import { connect } from 'react-redux'
import React from 'react'
import CreateGenre from './CreateGenre'
import { createGenre } from '../../../redux/actions/genres';


class CreateGenreContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputGenre: '',
        }

        this.handleChangeGenre = this.handleChangeGenre.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return (
            <CreateGenre
                handleChangeGenre={this.handleChangeGenre}
                handleSubmit={this.handleSubmit}
            />
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('HICE EL PREVENT')
        console.log('this state', this.state)

        const newGenre = {
            name: this.state.inputGenre,
        }

        this.props.createGenre(newGenre)
            .then(() => this.props.history.push('/admin/genres'))

        // VALIDACIONES

    }

    handleChangeGenre(evt) {
        const value = evt.target.value;
        console.log('author', value)
        this.setState({
            inputGenre: value
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {};
}

const mapDispatchToProps = function (dispatch) {
    return {
        createGenre: (reqbody) => dispatch(createGenre(reqbody)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGenreContainer)

