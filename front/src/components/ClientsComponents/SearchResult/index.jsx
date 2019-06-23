import React from "react"
import {connect} from "react-redux"
import {fetchBookByTitle} from "../../../redux/actions/books"
import Books from "../BooksContainer/Books";

class SearchResultContainer extends React.Component {

  render() {
    return (
      <Books books={this.props.bookByTitle}/>
    );
  }

  componentDidMount(){
      this.props.fetchBookByTitle(this.props.searched)
    
  }
}

const mapStateToProps = function(state, ownProps){
  return{
    bookByTitle: state.books.bookByTitle,
    titleSearched: state.books.titleSearched,
    searched : ownProps.match.params.searched
  }
}
const mapDispatchToprops = ()=> dispatch =>(
  {
    fetchBookByTitle: (title) => dispatch(fetchBookByTitle(title))
  }
)

export default connect(mapStateToProps, mapDispatchToprops)(SearchResultContainer)
