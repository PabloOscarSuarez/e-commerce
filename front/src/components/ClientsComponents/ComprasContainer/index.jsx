import { connect } from 'react-redux'
import React from 'react'
import Compras from './Compras'
import { fetchSalesByUser } from '../../../redux/actions/sales';

class ComprasContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        // console.log('SOY SALES en el container', this.props.sales)
        return (
            <div>
                <h1 className="text-center">Historial de Compras</h1>
                <Compras
                    sales={this.props.sales}
                />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchSalesByUser(this.props.user.id)
    }

    
}

const mapStateToProps = function (state, ownProps) {
    return {
        sales: state.sales.salesByUser,
        user: state.user.user,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSalesByUser: (userId) => dispatch(fetchSalesByUser(userId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComprasContainer)

