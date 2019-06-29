import React from "react";
import { fetchBook } from "../../../redux/actions/books"
import { newBookToCart, createNewCart } from "../../../redux/actions/cart"
import { connect } from "react-redux";
import Book from '../BookContainer/Book'

class BookContainer extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.bookId)
  }


  handleClick(book) {
    this.props.newBookToCart(book)

    if (this.props.booksToCart.length > 0 && this.props.user.name) {

      console.log(this.props.booksToCart)
      this.props.createNewCart(this.props.user, this.props.booksToCart)
    }

  }
  render() {
    return (
      <div>
        <Book
          selectedBook={this.props.selectedBook}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = function (state, ownprops) {

  return {
    bookId: ownprops.match.params.id,
    selectedBook: state.books.selectedBook,

  }
}


const mapDispatchToProps = function (dispatch) {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart)),
    createNewCart: (user, cart) => dispatch(createNewCart(user, cart))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)






