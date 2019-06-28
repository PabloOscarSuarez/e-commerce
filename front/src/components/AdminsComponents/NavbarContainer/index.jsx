import React from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar';
import { logout, fetchLoggedUser } from "../../../redux/actions/user"
import { removeAllCart } from "../../../redux/actions/cart"

class NavbarContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickLogout = this.handleClickLogout.bind(this)
    }

    render() {
        return (
            <Navbar
                user={this.props.user}
                logOutLoggedUser={this.props.logout}
                removeAllCart={this.props.removeAllCart}
            />
        );
    }

    handleClickLogout() {
        console.log('ENTRE AL LOGUOT')
        localStorage.clear()
        this.props.logout()
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        user: state.user.user
    };
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchLoggedUser: () => dispatch(fetchLoggedUser()),
        logout: () => dispatch(logout()),
        removeAllCart: () => dispatch(removeAllCart())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);
