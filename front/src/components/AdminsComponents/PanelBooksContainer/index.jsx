import { connect } from 'react-redux'
import React from 'react'
import PanelBooks from './PanelBooks'
import { fetchAllBooks } from '../../../redux/actions/books';
import { Link } from 'react-router-dom';

class PanelBooksContainer extends React.Component {

    render() {
        // console.log(this.props.history)
        return (
            <div>
                <h1 className="text-center">Libros</h1>
                <Link to="/admin/books/create">
                    <button type="button" className="btn btn-sm btn-success">Agregar nuevo Libro</button>
                </Link>
                <PanelBooks 
                history ={this.props.history}
                where ='books'
                books={this.props.books} 
                handleClickDelete={this.handleClickDelete}
                />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchAllBooks()
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        books: state.books.allBooks,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchAllBooks: () => dispatch(fetchAllBooks()),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelBooksContainer)

