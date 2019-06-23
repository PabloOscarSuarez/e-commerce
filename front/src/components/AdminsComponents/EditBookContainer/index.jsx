import { connect } from 'react-redux'
import React from 'react'
import EditBook from './EditBook'
import { editBook, editBookStock, fetchBook } from '../../../redux/actions/books';
import { fetchGenres } from '../../../redux/actions/genres';
import { fetchAuthors } from '../../../redux/actions/authors';

class EditBookContainer extends React.Component {

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
        // console.log(this.state)
        // console.log(this.props.selectedBook.genres, 'SOY GENRES DE SELECTED BOOK')
        // var algo = this.props.selectedBook.genres && this.props.selectedBook.genres.map(genre=>genre.id)
        // console.log(algo, 'ALGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
        return (
            <EditBook
                // selectedBook={this.props.selectedBook}
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
    
                inputTitle= {this.state.inputTitle}
                inputAuthor= {this.state.inputAuthor} 
                inputGenre= {this.state.inputGenre}
                // SOLO ENVIO UN ARRAY CON LOS ID DE LOS GENEROS SELECCIONADOS
                inputPrice= {this.state.inputPrice}
                inputStock= {this.state.inputStock}
                inputUrlImage= {this.state.inputUrlImage}
                inputDescription= {this.state.inputDescription}
            />
        )
    }

    componentDidMount() {

        Promise.all([
            this.props.fetchBook(this.props.bookId),
            this.props.fetchAuthors(),
            this.props.fetchGenres()
        ])
        .then(()=>{
            var miObj ={
                inputTitle: this.props.selectedBook.title,
                inputAuthor: this.props.selectedBook.authorId, // es 0 porque va a ser el id
                inputGenre: this.props.selectedBook.genres && this.props.selectedBook.genres.map(genre=>genre.id.toString()),
                // SOLO ENVIO UN ARRAY CON LOS ID DE LOS GENEROS SELECCIONADOS
                inputPrice: this.props.selectedBook.price,
                inputStock: this.props.selectedBook.stock,
                inputUrlImage: this.props.selectedBook.urlImage,
                inputDescription: this.props.selectedBook.description,
            }
            this.setState(miObj)
        })

    };

    handleSubmit(event) {
        event.preventDefault();
        // console.log('HICE EL PREVENT')
        // console.log('this state', this.state)

        const newBook = {
            title: this.state.inputTitle,
            authorId: this.state.inputAuthor,
            genres: this.state.inputGenre,
            price: this.state.inputPrice,
            stock: this.state.inputStock,
            urlImage: this.state.inputUrlImage,
            description: this.state.inputDescription,
        }

        this.props.editBook(this.props.bookId, newBook)
            .then(() => this.props.history.push(`/admin/books/${this.props.bookId}`))

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

        console.log(evt.target.value)

        // console.log(this.state)
        const value = evt.target.value;
        // console.log('IF CONDITION',(this.state.inputGenre.includes(value)))
        if (this.state.inputGenre.includes(value)) {
            this.setState({
                inputGenre: this.state.inputGenre.filter(genreId=>genreId !== value)
            })
        }
        else {
            this.setState({
                inputGenre: [...this.state.inputGenre, value]
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
        bookId: ownProps.match.params.id,
        selectedBook: state.books.selectedBook,
        authors: state.authors.list,
        genres: state.genres.list,
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchBook: (id) => dispatch(fetchBook(id)),
        editBook: (bookId, reqbody) => dispatch(editBook(bookId, reqbody)),
        editBookStock: (bookId, reqbody) => dispatch(editBookStock(bookId, reqbody)),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchAuthors: () => dispatch(fetchAuthors()),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBookContainer)

