import { connect } from 'react-redux'
import React from 'react'
import CreateBook from './CreateBook'
import { createBook } from '../../../redux/actions/books';
import { fetchGenres } from '../../../redux/actions/genres';
import { fetchAuthors } from '../../../redux/actions/authors';

class CreateBookContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputTitle: '',
            inputAuthor: 0, // es 0 porque va a ser el id
            inputGenre: [],// es 0 porque va a ser el id
            inputPrice: 0,
            inputStock: 0,
            inputUrlImage: '',
            inputDescription: '',
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeStock = this.handleChangeStock.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        console.log(this.state.inputGenre)
        return (
            <CreateBook
                handleChangeTitle={this.handleChangeTitle}
                handleChangeAuthor={this.handleChangeAuthor}
                handleChangeGenre={this.handleChangeGenre}
                handleChangePrice={this.handleChangePrice}
                handleChangeStock={this.handleChangeStock}
                handleChangeImage={this.handleChangeImage}
                handleChangeDescription={this.handleChangeDescription}
                handleSubmit={this.handleSubmit}
                genres={this.props.genres}
                authors={this.props.authors}
            />
        )
    }

    componentDidMount() {
        this.props.fetchAuthors()
        this.props.fetchGenres()
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('HICE EL PREVENT')
        console.log('this state', this.state)

        const newBook = {
            title: this.state.inputTitle,
            authorId: this.state.inputAuthor,
            genres: this.state.inputGenre,
            price: this.state.inputPrice,
            stock: this.state.inputStock,
            urlImage: this.state.inputUrlImage,
            description: this.state.inputDescription,
        }

        this.props.createBook(newBook)
            .then(() => this.props.history.push('/admin/books'))

        // VALIDACIONES
        // if (
        //     this.state.handleChangeTitle.length > 0 &&
        //     this.state.handleChangeAuthor != 0 &&
        //     this.state.handleChangeGenre != 0 &&
        //     this.state.handleChangeDescription.length > 0
        // ) {
        //     this.props.registerUser({ username: this.state.inputUsername, password: this.state.inputPassword })

        // }
    }

    handleChangeTitle(evt) {
        const value = evt.target.value;
        // console.log('title', value)
        this.setState({
            inputTitle: value
        })
    }

    handleChangeAuthor(evt) {
        const value = evt.target.value;
        // console.log('author', value)
        this.setState({
            inputAuthor: value
        })
    }

    handleChangeGenre(evt) {
        const value = evt.target.value;
        if(this.state.inputGenre.includes(value)){
            var index = this.state.inputGenre.indexOf(value)
            this.setState({
                inputGenre: [
                    ...this.state.inputGenre.slice(0, index),
                    ...this.state.inputGenre.slice(index + 1)
                ]
            })
        }
        else{
            this.setState({
                inputGenre: [...this.state.inputGenre ,value]
            })
        }
    }

    handleChangePrice(evt) {
        const value = evt.target.value;
        // console.log('price', value)
        this.setState({
            inputPrice: value
        })
    }

    handleChangeStock(evt) {
        const value = evt.target.value;
        // console.log('stock', value)
        this.setState({
            inputStock: value
        })
    }

    handleChangeImage(evt) {
        const value = evt.target.value;
        // console.log('image', value)
        this.setState({
            inputUrlImage: value
        })
    }

    handleChangeDescription(evt) {
        const value = evt.target.value;
        // console.log('description', value)
        this.setState({
            inputDescription: value
        })
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        authors: state.authors.list,
        genres: state.genres.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        createBook: (reqbody) => dispatch(createBook(reqbody)),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchAuthors: () => dispatch(fetchAuthors()),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateBookContainer)

