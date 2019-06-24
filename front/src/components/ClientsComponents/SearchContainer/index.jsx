
import React from "react"
import { connect } from "react-redux"
import { fetchBookByTitle, setTitleSearched } from "../../../redux/actions/books"
import Search from "./search";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.setTitleSearched(value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchBookByTitle(this.props.titleSearched)
      .then(() => this.props.history.push(`/search/${this.props.titleSearched}`))

  }

  render() {
    return (
      <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = function(state){
  return{
    titleSearched: state.books.titleSearched
  }
}
const mapDispatchToprops = () => dispatch => (
  {
    fetchBookByTitle: (title) => dispatch(fetchBookByTitle(title)),
    setTitleSearched: (title) => dispatch(setTitleSearched(title))
  }
)

export default connect(mapStateToProps, mapDispatchToprops)(SearchContainer)