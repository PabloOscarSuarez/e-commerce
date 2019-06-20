import { connect } from 'react-redux'
import React from 'react'
import CreateAdmin from './CreateAdmin'

class CreateAuthorContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}

    }


    render() {
        return (
            <CreateAdmin />
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
)(CreateAuthorContainer)

