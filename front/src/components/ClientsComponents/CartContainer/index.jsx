import React from "react";
import { connect } from "react-redux";
import { newBookToCart } from "../../../redux/actions/cart";
import Cart from "../CartContainer/Cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localBookToCart: [],
      totalPrice: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount(){
  //   var sumTotal = this.state.localBookToCart
  //   .map(book => book.price) //mapeo
  //   .reduce((prev, cur) => prev + cur, 0) //sumo
  //     console.log("soy sumTotal", sumTotal)
  //   this.setState({
  //     totalPrice : sumTotal
  //   })
  // }

  componentDidUpdate(prevState) {
    if (prevState != this.state.localBookToCart) {
      console.log("soy local", this.state.localBookToCart);
      this.props.newBookToCart(this.state.localBookToCart);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleDelete(book) {
    var bookList = this.props.booksToCart;
    

    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].book.id == book.book.id) {
        if (book.cant == 1) {
          bookList.splice(bookList[i], 1);
        } else if (book.cant > 1) {
          bookList[i].cant = bookList[i].cant - 1;
          bookList[i].price = bookList[i].price - book.book.price;
      
        }
      }
    }
    this.setState({
      localBookToCart: bookList,
    });
    
  }



  render() {
    return (
      <div>
        <Cart
          booksToCart={this.props.booksToCart}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
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
