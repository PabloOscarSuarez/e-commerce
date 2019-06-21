import React from "react";
import { connect } from "react-redux";
import Books from "../BooksContainer/Books";
import Carrousel from '../Carrousel/Carrousel'
import {fetchBooks} from "../../../redux/actions/books"
import { newBookToCart } from "../../../redux/actions/cart";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      booksToCart: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
  handleClick(book) {
    // for (let i = 0; i < this.state.booksToCart.length; i++) {
    //   if(this.state.booksToCart[i].book.id == book.id){
    //     this.setState({
    //       booksToCart: [...this.state.booksToCart, booksToCart[i].cant++]
    //     })
    //   }
    // }
    // if (this.state.booksToCart.length == 0) {
    //   var bookObj = {
    //     book: book,
    //     cant: 1
    //   };
    //   this.setState({
    //     booksToCart: bookObj
    //   });
    // }
  }

  // this.setState({
  //   booksToCart : [...this.state.booksToCart, bookId]

  // })

  render() {
    return (
      <div>
        <Carrousel />
        {console.log(this.props.booksToCart)}
        <Books books={this.props.books} handleClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    books: state.books.books,
    booksToCart: state.cart.booksToCart
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
