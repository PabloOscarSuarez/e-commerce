import { connect } from 'react-redux'
import React from 'react'
import PanelAuthors from './PanelAuthors'
import { fetchAuthors, removeAuthor } from '../../../redux/actions/authors';


class PanelAuthorsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    render() {
        console.log('SOY AUTHORS EN L PANEL AUTHOR CONTAINER', this.props.authors)
        return (
            <PanelAuthors
                authors={this.props.authors}
                handleClickDelete={this.handleClickDelete}
            />
        )
    }

    componentDidMount() {
        this.props.fetchAuthors()
    }

    handleClickDelete(evt) {
        var value = evt.target.value
        // console.log(value)
        this.props.removeAuthor(value)
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
        removeAuthor: (authorId) => dispatch(removeAuthor(authorId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelAuthorsContainer)

