import React from "react";
import { connect } from "react-redux";
import Books from "../BooksContainer/Books";
import Carrousel from "../Carrousel/Carrousel";
import { fetchBooks } from "../../../redux/actions/books";
import { newBookToCart, createNewCart } from "../../../redux/actions/cart";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }

  handleClick(book) {
    // console.log('soy book', book)

    this.props.newBookToCart(book)

    if(this.props.booksToCart.length > 0 && this.props.user.name){

      console.log(this.props.booksToCart)
      this.props.createNewCart(this.props.user, this.props.booksToCart)
    }



  }

  render() {
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
    user: state.user.user
  };
};
const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart)),
  createNewCart: (user, cart) => dispatch(createNewCart(user, cart))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
