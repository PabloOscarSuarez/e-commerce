import { connect } from 'react-redux'
import React from 'react'
import PanelGenres from './PanelGenres'
import { fetchGenres } from '../../../redux/actions/genres';


class PanelGenresContainer extends React.Component {

    render() {
        console.log('SOY GENRES', this.props.genres)
        return (
            <PanelGenres genres={this.props.genres}/>
        )
    }

    componentDidMount(){
        this.props.fetchGenres()
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
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelGenresContainer)

