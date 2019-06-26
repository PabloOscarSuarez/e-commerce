import { connect } from 'react-redux'
import React from 'react'
import CreateAdmin from './CreateAdmin'
import { createNewUser } from "../../../redux/actions/user"


class CreateAuthorContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email:"",
            name:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return (
            <CreateAdmin handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        )
    }

    handleChange(e) {        
        this.setState({
            [e.target.name]:e.target.value //esto rellena auto los campos que coreespondan
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("soy this state", this.state)

        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            isAdmin:true
        }

        this.props.createNewUser(newUser)
            .then(() =>  this.props.history.push("/admin/admins"))
            .catch(() => this.setState({ error: true }))
    }

}

const mapStateToProps = function (state, ownProps) {
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {
        createNewUser:(data)=> dispatch(createNewUser(data))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAuthorContainer)

