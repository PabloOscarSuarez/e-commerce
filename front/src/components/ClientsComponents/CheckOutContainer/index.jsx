import React from "react";
import { connect } from "react-redux";
import CheckOut from "./CheckOut";
import { createNewTransaction, sendEmailConfirm } from "../../../redux/actions/cart";

class CheckoutContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      anonimousEmail: "",
      address: "",
      password: "111"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log("soy this.state", this.state, "soy booksTo", this.props.booksToCart)
    this.props
      .createNewTransaction(this.state, this.props.booksToCart)
      // .then(() => this.props.history.push("/confirm-checkout"))
      .then((transaction) => console.log("so ransaccion del checkou", transaction))
      .catch(() => this.setState({ error: true }));
  }
  // this.props.sendEmailConfirm(this.props.user)
  render() {
    return (
      <CheckOut
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
const mapStateToProps = function(state) {
  return {
    user: state.user.user,
    booksToCart: state.cart.booksToCart
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    createNewTransaction: (userData, booksData) =>
      dispatch(createNewTransaction(userData, booksData)),
    sendEmailConfirm: userData => dispatch(sendEmailConfirm(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
