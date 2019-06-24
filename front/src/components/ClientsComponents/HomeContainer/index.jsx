import React from "react";
import { connect } from "react-redux";
import Books from "../BooksContainer/Books";
import Carrousel from "../Carrousel/Carrousel";
import { fetchBooks } from "../../../redux/actions/books";
import { newBookToCart } from "../../../redux/actions/cart";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      booksToCart: [],
      totalPrice: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchBooks();
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

  render() {
    return (
      <div>

        <Carrousel />
        <Books books={this.props.books} handleClick={this.handleClick}/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    books: state.books.books
  };
};
const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
