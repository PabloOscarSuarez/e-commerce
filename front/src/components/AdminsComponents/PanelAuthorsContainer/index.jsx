import { connect } from 'react-redux'
import React from 'react'
import PanelAuthors from './PanelAuthors'
import { fetchAuthors } from '../../../redux/actions/authors';


class PanelAuthorsContainer extends React.Component {

    render() {
        console.log('SOY AUTHORS', this.props.authors)
        return (
            <PanelAuthors authors={this.props.authors}/>
        )
    }

    componentDidMount(){
        this.props.fetchAuthors()
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        authors: state.authors.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchAuthors: () => dispatch(fetchAuthors()),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelAuthorsContainer)

