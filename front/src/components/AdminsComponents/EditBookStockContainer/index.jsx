import { connect } from 'react-redux'
import React from 'react'
import EditBookStock from './EditBookStock'
import { fetchBook, editBookStock } from "../../../redux/actions/books"

class EditBookStockContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputStock: 0,
        }

        this.handleChangeStock = this.handleChangeStock.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <EditBookStock
                handleChangeStock={this.handleChangeStock}
                selectedBook={this.props.selectedBook}
                handleSubmit={this.handleSubmit}
            />
        )
    }

    componentDidMount() {
        this.props.fetchBook(this.props.bookId)
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log('HICE EL PREVENT')
        console.log('this state', this.state)

        const newStock = {
            stock: this.state.inputStock,
        }

        if(this.state.inputStock >= 0){
            this.props.editBookStock(this.props.bookId, newStock)
                .then(() => this.props.history.push('/admin/books'))
        }

        // VALIDACIONES

    }

    handleChangeStock(evt) {
        const value = evt.target.value;
        this.setState({
            inputStock: value
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        bookId: ownProps.match.params.id,
        selectedBook: state.books.selectedBook,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
        editBookStock: (bookId, reqbody) => dispatch(editBookStock(bookId, reqbody)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBookStockContainer)

