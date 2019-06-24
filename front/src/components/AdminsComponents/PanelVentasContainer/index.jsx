import { connect } from 'react-redux'
import React from 'react'
import PanelVentas from './PanelVentas'
import { fetchSales } from '../../../redux/actions/sales';



class PanelVentasContainer extends React.Component {

    render() {
        // console.log('SOY SALES en el container', this.props.sales)
        return (
            <PanelVentas 
            sales={this.props.sales}
            />
        )
    }

    componentDidMount() {
        this.props.fetchSales()
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        sales: state.sales.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSales: () => dispatch(fetchSales()),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelVentasContainer)

