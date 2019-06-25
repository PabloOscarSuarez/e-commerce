import { connect } from 'react-redux'
import React from 'react'
import DeleteBook from './DeleteBook'
import { removeBook } from '../../../redux/actions/books';

class DeleteBookContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    render() {
        return (
            <div>
                <DeleteBook 
                handleClickDelete={this.handleClickDelete}
                bookId ={this.props.bookId}
                />
            </div>
        )
    }

    handleClickDelete(evt) {
        var value = evt.target.value
        this.props.removeBook(value)
        .then(()=>{
            this.props.history.push(`/admin/books`)
            // this.props.history.push(`/admin/${this.props.where}`)
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        bookId : ownProps.bookId,
        history : ownProps.history,
        where : ownProps.where,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        removeBook: (bookId) => dispatch(removeBook(bookId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteBookContainer)

