import React from "react";
import { fetchBook } from "../../../redux/actions/books"
import {connect} from "react-redux";
import Book from '../BookContainer/Book'

class BookContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      
    }
  
    };

  componentDidMount() {
  
    this.props.fetchBook(this.props.bookId)
    };
 

  render() {
    return(
      <div>
       
        <Book selectedBook = {this.props.selectedBook}/>;

      </div>
    ) 
  }
}

const mapStateToProps = function (state, ownprops) {

    return {

      bookId: ownprops.match.params.id,
      selectedBook:state.books.selectedBook,
     
    }
}


const mapDispatchToProps = function (dispatch)
{      
       return {
        fetchBook:(id)=> dispatch(fetchBook(id)),

       } 
    }


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
