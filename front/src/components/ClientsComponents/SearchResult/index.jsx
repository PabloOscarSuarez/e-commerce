import React from "react"
import { connect } from "react-redux"
import { fetchBookByTitle } from "../../../redux/actions/books"
import { newBookToCart } from "../../../redux/actions/cart";
import Books from "../BooksContainer/Books";

class SearchResultContainer extends React.Component {

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
      <Books books={this.props.bookByTitle} handleClick={this.handleClick} />
    );
  }

  componentDidMount() {
    this.props.fetchBookByTitle(this.props.searched)
  }

  componentDidUpdate(prevState) {
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
    bookByTitle: state.books.bookByTitle,
    titleSearched: state.books.titleSearched,
    searched: ownProps.match.params.searched
  }
}
const mapDispatchToprops = () => dispatch => (
  {
    fetchBookByTitle: (title) => dispatch(fetchBookByTitle(title)),
    newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
  }
)

export default connect(mapStateToProps, mapDispatchToprops)(SearchResultContainer)
