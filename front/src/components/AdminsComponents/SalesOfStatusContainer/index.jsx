import { connect } from 'react-redux'
import React from 'react'
import PanelVentas from '../PanelVentasContainer/PanelVentas'
import { fetchSalesByStatus } from '../../../redux/actions/sales';
import { fetchStatuses } from "../../../redux/actions/status"



class SalesOfStatusContainer extends React.Component {

    constructor(props) {
        super(props)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
    }

    render() {
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
        this.props.fetchSalesByStatus(this.props.statusId)
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
        statusId: ownProps.match.params.statusId,
        sales: state.sales.salesByStatus,
        statuses: state.statuses.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchStatuses: () => dispatch(fetchStatuses()),
        fetchSalesByStatus: (statusId) => dispatch(fetchSalesByStatus(statusId)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SalesOfStatusContainer)

