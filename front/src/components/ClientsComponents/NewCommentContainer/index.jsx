import React from "react"
import { connect } from "react-redux"
import NewComment from "./NewComment";
import { createComment } from '../../../redux/actions/comments'
import { fetchBook } from '../../../redux/actions/books'


class NewCommentContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputText: '',
        }

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // console.log('selectedBook', this.props.selectedBook)
        return (
            <div>
                <h3 className="text-center mt-5">Queres dejar un comentario sobre este Libro?</h3>
                <NewComment 
                    handleChangeText={this.handleChangeText}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('HICE EL PREVENT')
        console.log('this state', this.state)

        const newComment = {
            bookId : this.props.selectedBook.id,
            description: this.state.inputText,
        }

        if(this.state.inputText.length > 0){
            this.props.createComment(newComment)
                // .then(() => this.props.history.push(`/books/${this.props.selectedBook.title}/${this.props.selectedBook.id}`))
        }

    }

    handleChangeText(evt) {
        const value = evt.target.value;
        // console.log('title', value)
        this.setState({
            inputText: value
        })
    }

    // componentDidUpdate(prevProps) {
    //     // Uso tipico (no olvides de comparar los props):
    //     if (this.props.selectedBook !== prevProps.selectedBook) {
    //         this.props.fetchBook(this.props.selectedBook.id)
    //     }
    // }
    
}

const mapStateToProps = function (state, ownProps) {
    return {
        selectedBook: state.books.selectedBook,
    }
}
const mapDispatchToprops = () => dispatch => (
    {
        createComment: (reqbody) => dispatch(createComment(reqbody)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    }
)

export default connect(mapStateToProps, mapDispatchToprops)(NewCommentContainer)
