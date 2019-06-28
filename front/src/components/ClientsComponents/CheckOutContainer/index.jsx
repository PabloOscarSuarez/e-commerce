import React from "react";
import { connect } from "react-redux"
import CheckOut from "./CheckOut";
import { createNewTransaction, createNewTransactionToLoggedUser, sendEmailConfirm } from '../../../redux/actions/cart'
import { fetchLoggedUser } from '../../../redux/actions/user'


class CheckoutContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      address: "",
      password: "111"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
  
    return (
      <CheckOut user={this.props.user} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    );
  }

  componentDidMount() {
    if (this.props.user.name) {
      this.setState({
        address: this.props.user.address
      })
    }
  }

  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    });

  }
  handleSubmit(e) {
    e.preventDefault()
    // console.log("soy this.state", this.state, "soy booksTo", this.props.booksToCart)

    if (!this.props.user.name) {
      // ESTO LO HAGO SI NO HAY USUARIO LOGUEADO
      const anonimousUser = {
        name: this.state.name,
        anonimousEmail: this.state.email,
        address: this.state.address,
        password: "111"
      }
      
      this.props.createNewTransaction(anonimousUser, this.props.booksToCart)
        .then((e) => {
          console.log("so emailllllllll", this.state.email)
          this.props.sendEmailConfirm(anonimousUser, this.props.newTransaction)
          this.props.history.push("/confirm-checkout")
        })
        .catch(() => this.setState({ error: true }))
    }
    // this.props.sendEmailConfirm(this.props.user)
    // .then(() => this.props.history.push("/confirm-checkout"))
    else {
      // ESTO LO HAGO SI HAY USUARIO LOGUEADO

      const loggedUser = {
        name: this.props.user.name,
        email: this.props.user.email,
        address: this.state.address,
      }
      this.props.createNewTransactionToLoggedUser(loggedUser, this.props.booksToCart)
        .then(() => this.props.history.push("/confirm-checkout"))
        .catch(() => this.setState({ error: true }))
    }
  }
}
const mapStateToProps = function (state) {

  return {
    booksToCart: state.cart.booksToCart,
    user: state.user.user,
    newTransaction : state.cart.newTransaction
  }
}
const mapDispatchToProps = function (dispatch) {
  return {
    createNewTransaction: (userData, booksData) => dispatch(createNewTransaction(userData, booksData)),
    createNewTransactionToLoggedUser: (userData, booksData) => dispatch(createNewTransactionToLoggedUser(userData, booksData)),
    fetchLoggedUser: () => dispatch(fetchLoggedUser()),
    sendEmailConfirm: (userData, Transaction) => dispatch(sendEmailConfirm(userData, Transaction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)