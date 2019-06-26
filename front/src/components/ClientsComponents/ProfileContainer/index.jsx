import { connect } from 'react-redux'
import React from 'react'
import Profile from './Profile'
// import { fetchLoggedUser, fetchUser } from '../redux/actions/user';
// import { fetchFavouritesMovies } from '../redux/actions/movies';


class ProfileContainer extends React.Component {

    render() {
        // console.log(this.props.loggedUser)
        // console.log(this.props.selectedUser, 'seleectedUser')
        return (
            <Profile />
        )
    }

    componentDidMount(){
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        // loggedUser: state.users.loggedUser,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        // fetchLoggedUser: () => dispatch(fetchLoggedUser()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer)

