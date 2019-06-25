import React from "react";
import { connect } from "react-redux";
import { fetchBooksofGenreInStock } from '../../../redux/actions/genres';
import { newBookToCart } from "../../../redux/actions/cart";
import Books from '../BooksContainer/Books'

class BooksOfGenreContainer extends React.Component {

    constructor() {
        super();

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

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.books !== prevProps.books) {
            this.props.fetchBooksofGenreInStock(this.props.genreId)
        }
    }

    handleClick(book) {
        this.props.newBookToCart(book);
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
