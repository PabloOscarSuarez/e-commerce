import { connect } from 'react-redux'
import React from 'react'
import PanelVentas from './PanelVentas'
import { fetchSales, fetchSalesByStatus } from '../../../redux/actions/sales';
import { fetchStatuses } from "../../../redux/actions/status"

class PanelVentasContainer extends React.Component {

    constructor(props) {
        super(props)

        this.handleChangeStatus = this.handleChangeStatus.bind(this)
    }

    render() {
        // console.log('SOY SALES en el container', this.props.sales)
        return (
            <div>
                <h1 className="text-center">Ventas</h1>
                <PanelVentas
                    sales={this.props.sales}
                    statuses={this.props.statuses}
                    handleChangeStatus={this.handleChangeStatus}
                />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchSales()
        this.props.fetchStatuses()
    }

    handleChangeStatus(evt) {
        const value = evt.target.value;
        if(value == 0){
            this.props.history.push(`/admin/ventas`)
        }
        else{
            this.props.fetchSalesByStatus(value)
                .then(() => {
                    this.props.history.push(`/admin/ventas/status/${value}`)
                })
        }
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        sales: state.sales.list,
        salesByStatus: state.sales.salesByStatus,
        statuses: state.statuses.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSales: () => dispatch(fetchSales()),
        fetchStatuses: () => dispatch(fetchStatuses()),
        fetchSalesByStatus: (statusId) => dispatch(fetchSalesByStatus(statusId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelVentasContainer)

