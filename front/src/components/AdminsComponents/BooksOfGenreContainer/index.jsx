import { connect } from 'react-redux'
import React from 'react'
import PanelBooks from '../PanelBooksContainer/PanelBooks'
import { fetchBooksofGenre } from '../../../redux/actions/genres';



class BooksOfGenreContainer extends React.Component {

    render() {
        return (
            <div>
                <h1 className="text-center">Libros de {this.props.genreName}</h1>
                <PanelBooks
                    books={this.props.books}
                    history={this.props.history}
                    where ='genres'
                />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchBooksofGenre(this.props.genreName)
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        genreName: ownProps.match.params.genre,
        books: state.genres.booksByGenre,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBooksofGenre: (genreName) => dispatch(fetchBooksofGenre(genreName)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksOfGenreContainer)

