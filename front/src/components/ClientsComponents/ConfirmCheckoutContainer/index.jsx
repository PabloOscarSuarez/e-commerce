import React from "react"
import { connect } from "react-redux"
import ConfirmCheckout from "./ConfirmCheckout";

class ConfirmCheckoutContainer extends React.Component {

    render() {
        console.log('SOY TRANSACTION EN EL CONTAINER', this.props.newTransaction)
        return (
            <div>
                <h3 className="text-center mt-5">Compra Registrada!</h3>
                <ConfirmCheckout transaction={this.props.newTransaction}/>
            </div>
        );
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        newTransaction: state.cart.newTransaction,
    }
}
const mapDispatchToprops = () => dispatch => (
    {}
)

export default connect(mapStateToProps, mapDispatchToprops)(ConfirmCheckoutContainer)
