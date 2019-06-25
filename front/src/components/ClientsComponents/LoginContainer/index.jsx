import React from 'react';
import { connect } from 'react-redux';
import { logginUser } from "../../../redux/actions/user"
import Login from "../LoginContainer/Login"


class LoginContainer extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            email: "",
            password: ""
        }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      
    }
    handleChange(e) {
        
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logginUser(this.state)
            .then(() => this.props.history.push("/users/profile"))
            .catch(() => this.setState({ error: true }))
    }
    render() {
        return (

            <div>
                <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
const mapStateToProps = function (state) {

    return {

    }
}
const mapDispatchToProps = (dispatch) => (
    {
        logginUser: (data) => dispatch(logginUser(data))
    })

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)