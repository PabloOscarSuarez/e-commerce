import { connect } from 'react-redux'
import React from 'react'
import PanelAdmins from './PanelAdmins'
import { fetchAdmins, removeAdmin } from "../../../redux/actions/user"



class PanelAdminsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    render() {
        return (
            <PanelAdmins admins={this.props.admins} 
            handleClickDelete={this.handleClickDelete}
            />
        )
    }

    handleClickDelete(evt) {
        var value = evt.target.value
        // console.log(value)
        this.props.removeAdmin(value)
    }

    componentDidMount() {
        this.props.fetchAdmins()
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        admins: state.user.admins,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchAdmins: () => dispatch(fetchAdmins()),    
        removeAdmin: (adminId) => dispatch(removeAdmin(adminId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelAdminsContainer)

