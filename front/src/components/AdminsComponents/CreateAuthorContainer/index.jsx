import { connect } from 'react-redux'
import React from 'react'
import CreateAuthor from './CreateAuthor'
import { createAuthor } from '../../../redux/actions/authors';


class CreateAuthorContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputAuthor: '',
        }

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return (
            <CreateAuthor
                handleChangeAuthor={this.handleChangeAuthor}
                handleSubmit={this.handleSubmit}
            />
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('HICE EL PREVENT')
        console.log('this state', this.state)

        const newAuthor = {
            name: this.state.inputAuthor,
        }

        this.props.createAuthor(newAuthor)
            .then(() => this.props.history.push('/admin/authors'))

        // VALIDACIONES

    }

    handleChangeAuthor(evt) {
        const value = evt.target.value;
        console.log('author', value)
        this.setState({
            inputAuthor: value
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {
        createAuthor: (reqbody) => dispatch(createAuthor(reqbody)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAuthorContainer)

