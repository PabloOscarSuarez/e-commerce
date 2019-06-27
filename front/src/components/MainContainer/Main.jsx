import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PanelConainer from "../AdminsComponents/PanelContainer";
import UserMainContainer from '../ClientsComponents/UserMainContainer'
import {fetchLoggedUser, logout} from "../../redux/actions/user"
import { connect } from "react-redux";

// export default () => {
//   return (
    
//   );
// };

class MainContainer extends React.Component {
  
  componentDidMount(){
   this.props.fetchLoggedUser()
  }

  render() {
    return(
      <div>
      <Switch>
        <Route path="/admin" component={PanelConainer} />
        <Route path="/" component={UserMainContainer} />
        {/* <Redirect from="/" to="/" /> */}
      </Switch>
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
    fetchLoggedUser: ()=>dispatch(fetchLoggedUser()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
