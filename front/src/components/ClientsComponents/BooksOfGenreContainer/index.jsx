import React from "react";
import { connect } from "react-redux";
import { fetchBooksofGenreInStock } from '../../../redux/actions/genres';
import { newBookToCart } from "../../../redux/actions/cart";
import Books from '../BooksContainer/Books'

class BooksOfGenreContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            booksToCart: [],
            totalPrice: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Libros de {this.props.genreName}</h1>
                <Books books={this.props.books} handleClick={this.handleClick} />
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchBooksofGenreInStock(this.props.genreId)
    }

    componentDidUpdate(prevProps, prevState) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.books !== prevProps.books) {
            this.props.fetchBooksofGenreInStock(this.props.genreId)
        }

        if (prevState != this.state) {
            this.props.newBookToCart(this.state.booksToCart);
          }
    }

    handleClick(book) {
        if (this.state.booksToCart.length == 0) {
            var bookObj = {
                book: book,
                cant: 1,
                price: book.price
            };

            this.setState({
                booksToCart: [bookObj]
            });
        } else if (this.state.booksToCart.length > 0) {
            var bookObj2 = { book: book, cant: 1, price: book.price };
            var exist = false;

            for (let i = 0; i < this.state.booksToCart.length; i++) {
                if (this.state.booksToCart[i].book.id == book.id) {
                    var bookObjOk = {
                        book: book,
                        cant: this.state.booksToCart[i].cant + 1,
                        price:
                            this.state.booksToCart[i].book.price *
                            (this.state.booksToCart[i].cant + 1)
                    };
                    var newBooksToCart = this.state.booksToCart;
                    newBooksToCart[i] = bookObjOk;

                    this.setState({
                        booksToCart: newBooksToCart
                    });
                    exist = true;
                    break;
                }
            }
            if (exist == false) {
                this.setState({
                    booksToCart: [...this.state.booksToCart, bookObj2]
                    // total:[...this.state.total, newBookToCart.price*cant ]
                });
            }

        }
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        genreName: ownProps.match.params.genre,
        genreId: ownProps.match.params.id,
        books: state.genres.booksByGenreInStock,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBooksofGenreInStock: (genreId) => dispatch(fetchBooksofGenreInStock(genreId)),
        newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksOfGenreContainer);
