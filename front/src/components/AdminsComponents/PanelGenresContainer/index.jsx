import { connect } from 'react-redux'
import React from 'react'
import PanelGenres from './PanelGenres'
import { fetchGenres, removeGenre } from '../../../redux/actions/genres';


class PanelGenresContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    render() {
        // console.log('SOY GENRES', this.props.genres)
        return (
            <PanelGenres
                genres={this.props.genres}
                handleClickDelete={this.handleClickDelete}
            />
        )
    }

    componentDidMount() {
        this.props.fetchGenres()
    }

    handleClickDelete(evt) {
        var value = evt.target.value
        // console.log(value)
        this.props.removeGenre(value)
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        genres: state.genres.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
        removeGenre: (authorId) => dispatch(removeGenre(authorId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelGenresContainer)

