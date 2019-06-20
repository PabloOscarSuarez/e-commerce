import { connect } from 'react-redux'
import React from 'react'
import PanelAdmins from './PanelAdmins'


class PanelAdminsContainer extends React.Component {

    render() {
        return (
            <PanelAdmins />
        )
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelAdminsContainer)

