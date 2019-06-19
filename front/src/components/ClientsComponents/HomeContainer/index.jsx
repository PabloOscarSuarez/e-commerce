import React from "react";
import { connect } from 'react-redux';
import Books from "../BooksContainer/Books";
import {fetchBooks} from "../../../redux/actions/books"

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {

  this.props.fetchBooks()

  }

  render() {
    return (
      <div>
        <Books books = {this.props.books}/>
      </div>
    );
  }
}


  const mapStateToProps = function(state) {
  return {
    books: state.books.books
    };
  }
const mapDispatchToProps = (dispatch)=>({

  fetchBooks: () => dispatch(fetchBooks())

})


export default connect (mapStateToProps, mapDispatchToProps)(HomeContainer)