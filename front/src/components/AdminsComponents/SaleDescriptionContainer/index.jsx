import { connect } from 'react-redux'
import React from 'react'
import SaleDescription from './SaleDescription'
import { fetchSale } from "../../../redux/actions/sales"

class SaleDescriptionContainer extends React.Component {

    render() {
        console.log('soy selectedSale', this.props.selectedSale)
        return (
            <SaleDescription
                selectedSale={this.props.selectedSale}
            />
        )
    }

    componentDidMount() {
        this.props.fetchSale(this.props.saleId)
    };

}

const mapStateToProps = function (state, ownProps) {
    return {
        saleId: ownProps.match.params.id,
        selectedSale: state.sales.selectedSale,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSale: (id) => dispatch(fetchSale(id)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SaleDescriptionContainer)

