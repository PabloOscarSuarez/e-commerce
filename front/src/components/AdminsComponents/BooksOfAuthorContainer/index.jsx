import { connect } from 'react-redux'
import React from 'react'
import PanelBooks from '../PanelBooksContainer/PanelBooks'
import { fetchBooksofAuthor } from '../../../redux/actions/authors';



class BooksOfAuthorContainer extends React.Component {

    render() {
        console.log('SOY BOOKS EN EL CONTAINER', this.props.books)
        return (
            <div>
                <h1 className="text-center">Libros de {this.props.authorName}</h1>
                <PanelBooks
                    history={this.props.history}
                    books={this.props.books}
                    where ='authors'
                />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchBooksofAuthor(this.props.authorId)
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        authorName: ownProps.match.params.author,
        authorId: ownProps.match.params.id,
        books: state.authors.booksByAuthor,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBooksofAuthor: (authorId) => dispatch(fetchBooksofAuthor(authorId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksOfAuthorContainer)

