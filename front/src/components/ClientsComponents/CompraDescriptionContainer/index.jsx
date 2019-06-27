import { connect } from 'react-redux'
import React from 'react'
import CompraDescription from './CompraDescription'
import { fetchSale } from "../../../redux/actions/sales"
import { newBookToCart } from "../../../redux/actions/cart";


class CompraDescriptionContainer extends React.Component {

    constructor() {
        super();
        this.state = {

        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log('soy selectedSale', this.props.selectedSale)
        return (
            <CompraDescription
                selectedSale={this.props.selectedSale}
                handleClick={this.handleClick}
            />
        )
    }

    componentDidMount() {
        this.props.fetchSale(this.props.saleId)
    };

    handleClick(book) {
        // console.log('soy book', book)
        this.props.newBookToCart(book);
    }

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
        newBookToCart: booksToCart => dispatch(newBookToCart(booksToCart))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompraDescriptionContainer)

