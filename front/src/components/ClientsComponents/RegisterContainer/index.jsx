import React from 'react';
import { connect } from 'react-redux';
import Register from "../RegisterContainer/Register";
import { createNewUser } from "../../../redux/actions/user"


class RegisterContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email:"",
            address:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
       
    }
    handleChange(e) {
        
        this.setState({
            [e.target.name]:e.target.value //esto rellena auto los campos que coreespondan
        });
       
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("soy this state", this.state)
        this.props.createNewUser(this.state)
            .then(() =>  this.props.history.push("/users/login"))
            .catch(() => this.setState({ error: true }))
           
    }
    render() {
        return (
            <div>
                 <Register handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
                {this.state.error && <p style={{color: 'red'}}>Campos Invalidos o incompletos!</p>}
            </div>
        );
    }
}

const mapDispatchToProps = function (dispatch)
{      
       return {
           createNewUser:(data)=> dispatch(createNewUser(data))
       } 
    }

export default connect(null, mapDispatchToProps)(RegisterContainer)