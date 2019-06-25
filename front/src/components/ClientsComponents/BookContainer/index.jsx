import React from "react";
import { fetchBook } from "../../../redux/actions/books"
import { newBookToCart} from "../../../redux/actions/cart"
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
    newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)






