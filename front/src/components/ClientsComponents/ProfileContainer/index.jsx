import { connect } from 'react-redux'
import React from 'react'
import Profile from './Profile'
import { fetchLoggedUser } from '../../../redux/actions/user';
// import { fetchFavouritesMovies } from '../redux/actions/movies';


class ProfileContainer extends React.Component {

    render() {
        // console.log(this.props.user, 'ale')
        // console.log(this.props.selectedUser, 'seleectedUser')
        return (
            <Profile 
                user={this.props.user}
            />
        )
    }

    componentDidMount(){
        this.props.fetchLoggedUser()
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        user: state.user.user,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchLoggedUser: () => dispatch(fetchLoggedUser()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer)

