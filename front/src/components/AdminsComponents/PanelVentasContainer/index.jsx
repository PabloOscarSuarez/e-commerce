import { connect } from 'react-redux'
import React from 'react'
import PanelVentas from './PanelVentas'


class PanelVentasContainer extends React.Component {

    render() {
        return (
            <PanelVentas />
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
)(PanelVentasContainer)

