import { connect } from 'react-redux'
import React from 'react'
import PanelBooks from './PanelBooks'


class PanelBooksContainer extends React.Component {

    render() {
        return (
            <PanelBooks />
        )
    }

}

const mapStateToProps = function (state, ownProps) {
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {};
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelBooksContainer)

