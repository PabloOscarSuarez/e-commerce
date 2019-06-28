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

  // componentDidMount() {


  //   if (this.props.user.name) {
  //     // SI HAY USER
  //     console.log('SOY this.props.booksToCart !!!!!!!!!!!!!!', this.props.booksToCart)
  //     if (this.props.booksToCart.length > 0) {

  //       // this.props.fetchCart(this.props.user)
  //       this.props.createNewCart(this.props.user, this.props.booksToCart)
  //         .then(() => {
  //           this.props.fetchCart(this.props.user)
  //         })
  //     }

  //   }
  //    else {
  //     // SI NO HAY USER
  //     if (this.props.booksToCart.length > 0) {
  //       localStorage.setItem("cart", JSON.stringify(this.props.booksToCart));

  //     }
  //     this.props.userLocalCart();
  //   }

  // }
  componentDidMount() {

    console.log('USER', this.props.user)
    if (this.props.user.name) {
      // SI HAY USER
      console.log('SOY this.props.booksToCart !!!!!!!!!!!!!!', this.props.booksToCart)
      this.props.fetchCart(this.props.user)
      // if (this.props.booksToCart.length > 0) {

        // this.props.fetchCart(this.props.user)

      // }
      // .then(() => {
        // this.props.createNewCart(this.props.user, this.props.booksToCart)
        // .then(carrito => console.log(carrito))
        
      // })

      // this.props.fetchCart(this.props.user)
      // ESTA SI VA 

    }
    else {
      // SI NO HAY USER
      if (this.props.booksToCart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(this.props.booksToCart));

      }
      this.props.userLocalCart();
    }


  }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props.booksToCart)
  //   if (prevProps.booksToCart != this.props.booksToCart) {
  //     this.props.createNewCart(this.props.user, this.props.booksToCart)
  //     // localStorage.clear()
  //   }
  // }

  handleIncrement(book) {
    console.log("tendria que ser el usuario", this.props.user)
    this.props.incrementBooksToCart(book, this.props.user)

    if(this.props.booksToCart.length > 0 && this.props.user.name){
      console.log(this.props.booksToCart)
      this.props.createNewCart(this.props.user, this.props.booksToCart)
    }

  }
  handleDecrement(book) {
    this.props.decrementBooksToCart(book, this.props.user)

    if(this.props.booksToCart.length >= 0 && this.props.user.name){
      console.log(this.props.booksToCart)
      this.props.createNewCart(this.props.user, this.props.booksToCart)
    }

    // this.props.createNewCart(this.props.booksToCart, this.props.user)
  }
  handleDelete(book) {
    this.props.deleteBookFromCart(book, this.props.user)

    console.log(this.props.booksToCart, '1')
    
    if(this.props.booksToCart.length > 0 && this.props.user.name){
      console.log(this.props.booksToCart, '2')
      this.props.createNewCart(this.props.user, this.props.booksToCart)
    }
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
  incrementBooksToCart: (book, updatedBooksToCart, user) => dispatch(incrementBooksToCart(book, updatedBooksToCart, user)),
  decrementBooksToCart: updatedBooksToCart => dispatch(decrementBooksToCart(updatedBooksToCart)),
  deleteBookFromCart: book => dispatch(deleteBookFromCart(book)),
  userLocalCart: () => dispatch(userLocalCart()),
  fetchCart: (user) => dispatch(fetchCart(user)),
  createNewCart: (user, cart) => dispatch(createNewCart(user, cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
