import React from "react";
import { connect } from "react-redux";
import {fetchLoggedUser, logout} from "../../../redux/actions/user"
import Navbar from "../NavbarContainer/Navbar";

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
    this.logOutLoggedUser= this.logOutLoggedUser.bind(this)
  }
  componentDidMount(){
   this.props.fetchLoggedUser(this.props.user)
  }
  logOutLoggedUser(){
    this.props.logout()
  }
  render() {
    return(
          <div>
            <Navbar user={this.props.user} logOutLoggedUser={this.logOutLoggedUser}/>
          </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    fetchLoggedUser: (userData)=>dispatch(fetchLoggedUser(userData)),
    logout:()=>dispatch(logout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
