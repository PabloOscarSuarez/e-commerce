import React from "react";
import { connect } from "react-redux";
import Books from "../BooksContainer/Books";
import Carrousel from "../Carrousel/Carrousel";
import { fetchBooks } from "../../../redux/actions/books";
import { newBookToCart } from "../../../redux/actions/cart";

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
 
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
 
  handleClick(book) {
    // console.log('soy book', book)
  
      this.props.newBookToCart(book);
    
    
  }

  render() {
    return (
      <div>

        <Carrousel />
        <Books books={this.props.books} handleClick={this.handleClick}/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    books: state.books.books
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
