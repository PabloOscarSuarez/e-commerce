import React from "react";
import { connect } from "react-redux";
import { newBookToCart } from "../../../redux/actions/cart";
import Cart from "../CartContainer/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localBookToCart: [] //maneja localmente los cambios de booksToCart
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  componentDidMount() {
    this.setState({
      localBookToCart: this.props.booksToCart //1er seteo del estado local
    });
  }

  componentDidUpdate(prevState) {
    if (prevState != this.state.localBookToCart) {
      this.props.newBookToCart(this.state.localBookToCart);
      //actualiza el booksToCart del store, permite que se quiten auto los libros del carrito
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleIncrement(book) {
    var bookList = this.props.booksToCart;

    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].book.id == book.book.id) {
        if (book.cant > 1) {
          bookList[i].cant = bookList[i].cant + 1;
          bookList[i].price = bookList[i].price + book.book.price;
        }
      }
    }
    this.setState({
      localBookToCart: bookList
    });
  }
  handleDecrement(book) {
    var bookList = this.props.booksToCart;

    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].book.id == book.book.id) {
        if (book.cant > 1) {
          bookList[i].cant = bookList[i].cant - 1;
          bookList[i].price = bookList[i].price - book.book.price;
        } else {
          bookList.splice(bookList[i], 1);
        }
      }
    }
    this.setState({
      localBookToCart: bookList
    });
  }
  handleDelete(book) {
    var bookList = this.props.booksToCart;

    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].book.id == book.book.id) {
        bookList.splice(bookList[i], 1);
      }
    }
    //quita elementos del carrito y actualiza el localState al final
    // var bookList = this.props.booksToCart;
    // for (let i = 0; i < bookList.length; i++) {
    //   if (bookList[i].book.id == book.book.id) {
    //     if (book.cant == 1) {
    //       bookList.splice(bookList[i], 1);
    //     } else if (book.cant > 1) {
    //       bookList[i].cant = bookList[i].cant - 1;
    //       bookList[i].price = bookList[i].price - book.book.price;
    //     }
    //   }
    // }
    this.setState({
      localBookToCart: bookList
    });
  }

  sumTotal(array) {
    //suma el total de lo ingresado al carrito
    return array
      .map(book => book.price) //mapeo
      .reduce((prev, cur) => prev + cur, 0); //sumo
  }

  render() {
    return (
      <div>
        <Cart
          booksToCart={this.props.booksToCart}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          localBookToCart={this.state.localBookToCart}
          sumTotal={this.sumTotal}
          handleDecrement={this.handleDecrement}
          handleIncrement= {this.handleIncrement}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    booksToCart: state.cart.booksToCart
  };
};
const mapDispatchToProps = dispatch => ({
  newBookToCart: updatedBooksToCart =>
    dispatch(newBookToCart(updatedBooksToCart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
