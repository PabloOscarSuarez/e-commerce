import { connect } from 'react-redux'
import React from 'react'
import EditStatus from './EditStatus'
// import { fetchBook, editBookStock } from "../../../redux/actions/books"
import { fetchStatuses } from "../../../redux/actions/status"
import { editSaleStatus, fetchSale } from "../../../redux/actions/sales"

class EditStatusContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputStatus: 0,
        }

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // console.log('SOY this.props.statuses',this.props.statuses)
        return (
            <EditStatus
                handleChangeStatus={this.handleChangeStatus}
                selectedSale={this.props.selectedSale}
                handleSubmit={this.handleSubmit}
                statuses={this.props.statuses}
            />
        )
    }

    componentDidMount() {
        this.props.fetchStatuses()
        this.props.fetchSale(this.props.saleId)
    };

    handleSubmit(event) {
        event.preventDefault();
        // console.log('HICE EL PREVENT')
        // console.log('this state', this.state)

        const newStatus = {
            statusId: this.state.inputStatus,
        }

        if(this.state.inputStatus >= 0){
            this.props.editSaleStatus(this.props.saleId, newStatus)
                .then(() => this.props.history.push('/admin/ventas'))
        }
    }

    handleChangeStatus(evt) {
        const value = evt.target.value;
        this.setState({
            inputStatus: value
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        saleId: ownProps.match.params.id,
        selectedSale: state.sales.selectedSale,
        statuses: state.statuses.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchStatuses: () => dispatch(fetchStatuses()),
        editSaleStatus: (saleId, reqbody) => dispatch(editSaleStatus(saleId, reqbody)),
        fetchSale: (id) => dispatch(fetchSale(id)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditStatusContainer)

