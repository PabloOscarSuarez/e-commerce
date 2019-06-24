import { connect } from 'react-redux'
import React from 'react'
import BookDescription from './BookDescription'
import { fetchBook } from "../../../redux/actions/books"

class BookDescriptionContainer extends React.Component {

    render() {
        return (
            <BookDescription
                selectedBook={this.props.selectedBook}
            />
        )
    }

    componentDidMount() {
        this.props.fetchBook(this.props.bookId)
    };

}

const mapStateToProps = function (state, ownProps) {
    return {
        bookId: ownProps.match.params.id,
        selectedBook: state.books.selectedBook,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDescriptionContainer)

