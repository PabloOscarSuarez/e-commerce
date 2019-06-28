import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PanelConainer from "../AdminsComponents/PanelContainer";
import UserMainContainer from '../ClientsComponents/UserMainContainer'
import { fetchLoggedUser, logout } from "../../redux/actions/user"
import { connect } from "react-redux";
import {
  userLocalCart,
  fetchCart,
  createNewCart
} from "../../redux/actions/cart";

// export default () => {
//   return (

//   );
// };

class MainContainer extends React.Component {

  // componentDidUpdate() {
  //   // this.props.fetchLoggedUser()
  //   if (!this.props.user.name) {
  //     this.props.fetchLoggedUser()
  //     // this.props.fetchLoggedUser()
  //   }
  // }

  componentDidMount() {
    this.props.fetchLoggedUser()


    // if (this.props.user.name) {
      // SI HAY USER
      // console.log('SOY this.props.booksToCart !!!!!!!!!!!!!!', this.props.booksToCart)
      // if (this.props.booksToCart.length > 0) {

      //   console.log('1 - CREATE NEW CART!!!CREADO Y FECHEADO')
      //   this.props.createNewCart(this.props.user, this.props.booksToCart)
      //     .then(() => {
      //       console.log('CREADO Y FECHEADO')
      //       this.props.fetchCart(this.props.user)
      //     })
      //     // NO VA
      //     // this.props.fetchCart(this.props.user)
      //   }
        // NO VA O SI ?
        // this.props.fetchCart(this.props.user)

    // } else {
    //   // SI NO HAY USER
    //   if (this.props.booksToCart.length > 0) {
    //     localStorage.setItem("cart", JSON.stringify(this.props.booksToCart));

    //   }
    //   this.props.userLocalCart();
    // }

  }

  render() {
    return (
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

const mapStateToProps = function (state) {
  return {
    user: state.user.user,
    booksToCart: state.cart.booksToCart
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    fetchLoggedUser: () => dispatch(fetchLoggedUser()),
    userLocalCart: () => dispatch(userLocalCart()),
    fetchCart: (user) => dispatch(fetchCart(user)),
    createNewCart: (user, cart) => dispatch(createNewCart(user, cart))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
