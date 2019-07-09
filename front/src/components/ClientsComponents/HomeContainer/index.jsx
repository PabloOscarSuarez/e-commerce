import React from "react";
import { connect } from "react-redux";
import Books from "../BooksContainer/Books";
import Carrousel from "../Carrousel/Carrousel";
import { fetchBooks } from "../../../redux/actions/books";
import { newBookToCart } from "../../../redux/actions/cart";

class HomeContainer extends React.Component {
  constructor() {
    super();
  
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }

  handleClick(book) {
    // console.log('soy book', book)
    this.props.newBookToCart(book, this.props.user)

  }

  render() {
    console.log('soy el user', this.props.user)
    return (
      <div>
        <Carrousel />
        <Books books={this.props.books} handleClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    books: state.books.books,
    booksToCart: state.cart.booksToCart,
    user: state.user.user,
  };
};
const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  newBookToCart: (booksToCart,user) => dispatch(newBookToCart(booksToCart,user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
