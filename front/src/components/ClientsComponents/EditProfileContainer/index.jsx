import { connect } from 'react-redux'
import React from 'react'
import EditProfile from './EditProfile'
import { editUser } from '../../../redux/actions/user';
// import { fetchFavouritesMovies } from '../redux/actions/movies';


class EditProfileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            address: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // console.log(this.props.loggedUser)
        // console.log(this.props.selectedUser, 'seleectedUser')

        return (
            <EditProfile
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }

    componentDidMount() {
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value //esto rellena auto los campos que coreespondan
        });

    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("HICE EL PREVENT", this.state)

        const editedUser = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password,
        }

            // this.props.editUser(userId, editedUser)
            .then(() => this.props.history.push("/profile"))
            .catch(() => this.setState({ error: true }))

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
        // fetchLoggedUser: () => dispatch(fetchLoggedUser()),
        editUser: (userId, reqbody) => dispatch(editUser(userId, reqbody)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileContainer)

