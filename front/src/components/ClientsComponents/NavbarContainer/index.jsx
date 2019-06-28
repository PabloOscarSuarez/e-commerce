import React from "react";
import { connect } from "react-redux";
import { fetchLoggedUser, logout } from "../../../redux/actions/user"
import { removeAllCart } from "../../../redux/actions/cart"
import Navbar from "../NavbarContainer/Navbar";

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

  }
  // componentDidMount(){
  //  this.props.fetchLoggedUser()
  // }



  render() {
    return (
      <div>
        <Navbar user={this.props.user} logout={this.props.logout} removeAllCart={this.props.removeAllCart} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchLoggedUser: () => dispatch(fetchLoggedUser()),
    logout: () => dispatch(logout()),
    removeAllCart: () => dispatch(removeAllCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
