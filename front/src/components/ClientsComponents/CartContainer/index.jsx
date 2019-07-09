import React from "react";
import { connect } from "react-redux";
import {
  incrementBooksToCart,
  decrementBooksToCart,
  deleteBookFromCart,
  userLocalCart,
  fetchCart,
  createNewCart
} from "../../../redux/actions/cart";
import Cart from "../CartContainer/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <div>
        <Cart
          booksToCart={this.props.booksToCart}
          handleDelete={this.handleDelete}
          sumTotal={this.sumTotal}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }

  componentDidMount() {

    console.log('USER', this.props.user)
    if (this.props.user.name) {
      // SI HAY USER
      this.props.fetchCart(this.props.user)

    }
    else {
      // SI NO HAY USER
      if (this.props.booksToCart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(this.props.booksToCart));

      }
      this.props.userLocalCart();
    }


  }

  handleIncrement(book) {
    this.props.incrementBooksToCart(book, this.props.user)
  }

  handleDecrement(book) {
    this.props.decrementBooksToCart(book, this.props.user)
  }

  handleDelete(book) {
    this.props.deleteBookFromCart(book, this.props.user)
  }

  sumTotal(array) {
    //suma el total de lo ingresado al carrito
    return array && array
      .map(book => book.price) //mapeo
      .reduce((prev, cur) => prev + cur, 0); //sumo
  }


}

const mapStateToProps = function (state) {
  return {
    user: state.user.user,
    booksToCart: state.cart.booksToCart
  };
};
const mapDispatchToProps = dispatch => ({
  incrementBooksToCart: (book, user) => dispatch(incrementBooksToCart(book, user)),
  decrementBooksToCart: (book, user) => dispatch(decrementBooksToCart(book, user)),
  deleteBookFromCart: (book, user) => dispatch(deleteBookFromCart(book, user)),
  userLocalCart: () => dispatch(userLocalCart()),
  fetchCart: (user) => dispatch(fetchCart(user)),
  newBookToCart: (book,user) => dispatch(newBookToCart(book,user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
