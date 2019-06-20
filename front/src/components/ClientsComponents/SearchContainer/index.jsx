
import React from "react"
import {connect} from "react-redux"
import {fetchBookByTitle} from "../../../redux/actions/books"
import Search from "./search";

class SearchContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount(){

}

handleChange(e){
  const value = e.target.value;
  this.setState({
    inputValue:value
  })
}

handleSubmit(e){
e.preventDefault()
this.props.fetchBookByTitle(this.state.inputValue)
.then((book)=> this.props.history.push("/search"))


}

  render() {
    return (
      <Search  handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
    );
  }
}

// const mapStateToProps = function(state){
//   return{


//   }
// }
const mapDispatchToprops = ()=> dispatch =>(
  {
    fetchBookByTitle: (title) => dispatch(fetchBookByTitle(title))
  }
)

export default connect(null, mapDispatchToprops)(SearchContainer)