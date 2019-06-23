import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { newBookToCart } from "../../../redux/actions/cart";

class addToCartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksToCart: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevState) {
    if (prevState != this.state) {
      
      this.props.newBookToCart(this.state.booksToCart);
    }
  }

  handleClick(book) {

  
  
    // if (this.state.booksToCart.length == 0) {
    //   var bookObj = {
    //     book: book,
    //     cant: 1
    //   };

    //   this.setState({
    //     booksToCart: [bookObj]
    //   });
    // } else if (this.state.booksToCart.length > 0) {
    //   var bookObj2 = { book: book, cant: 1 };
    //   var exist = false;

    //   for (let i = 0; i < this.state.booksToCart.length; i++) {
    //     console.log("soy for", i)
    //     if (this.state.booksToCart[i].book.id == book.id) {
          
    //       var bookObjOk = {
    //         book: book,
    //         cant: this.state.booksToCart[i].cant + 1
    //       };
    //       var newBooksToCart = this.state.booksToCart;
    //       newBooksToCart[i] = bookObjOk;

    //       this.setState({
    //         booksToCart: newBooksToCart
    //       });
    //       console.log("soy if", this.state.booksToCart)
    //       exist = true;
    //       break;
    //     }
    //   }
    // }else if (exist == false) {
    //       var newresult = [...this.state.booksToCart, bookObj2]
    //       console.log("soy newresult", newresult)
    //       console.log("soy this.state.booksToCart", this.state.booksToCart)
    //       this.setState({
    //         booksToCart: [...this.state.booksToCart, bookObj2]
  
    //       })
    //     }
  }

  render() {
    return (
      <div>
        {/* <AddToCart handleClick={this.handleClick} book={this.props.book} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
});

export default connect(
  null,
  mapDispatchToProps
)(addToCartContainer);
