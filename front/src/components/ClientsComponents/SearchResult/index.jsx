import React from "react"
import { connect } from "react-redux"
import { fetchBookByTitle } from "../../../redux/actions/books"
import { newBookToCart } from "../../../redux/actions/cart";
import Books from "../BooksContainer/Books";

class SearchResultContainer extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Books books={this.props.bookByTitle} handleClick={this.handleClick} />
    );
  }

  componentDidMount() {
    this.props.fetchBookByTitle(this.props.searched)
  }

  handleClick(book) {
    this.props.newBookToCart(book);
  }

}

const mapStateToProps = function (state, ownProps) {
  return {
    bookByTitle: state.books.bookByTitle,
    titleSearched: state.books.titleSearched,
    searched: ownProps.match.params.searched
  }
}
const mapDispatchToprops = () => dispatch => (
  {
    fetchBookByTitle: (title) => dispatch(fetchBookByTitle(title)),
    newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
  }
)

export default connect(mapStateToProps, mapDispatchToprops)(SearchResultContainer)
