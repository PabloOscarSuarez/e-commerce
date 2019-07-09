import React from "react";
import { fetchBook } from "../../../redux/actions/books"
import { newBookToCart } from "../../../redux/actions/cart"
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
    this.props.newBookToCart(book, this.props.user)
  }
  render() {
    return (
      <div>
        {console.log(this.props.selectedBook, 'SOY SELECTED BOOK')}
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
    user : state.user.user
  }
}


const mapDispatchToProps = function (dispatch) {
  return {
    fetchBook: (id) => dispatch(fetchBook(id)),
    newBookToCart: (booksToCart,user) => dispatch(newBookToCart(booksToCart,user)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)






