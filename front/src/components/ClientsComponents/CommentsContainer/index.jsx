import React from "react"
import { connect } from "react-redux"
import Comments from "./Comments";

class CommentsContainer extends React.Component {

    render() {
        // console.log('SOY SELECTEDBOOK EN EL CONTAINER', this.props.selectedBook.users)
        return (
            <div>
                <h3 className="text-center mt-5">Comentarios de otros usuarios</h3>
                {/* this.props.selectedBook.users es un array de objetos 
                con la info de cada usuaio y el comentario */}
                <Comments comments={this.props.selectedBook.users} />
            </div>
        );
    }

}

const mapStateToProps = function (state, ownProps) {
    return {
        selectedBook: state.books.selectedBook,
    }
}
const mapDispatchToprops = () => dispatch => (
    {}
)

export default connect(mapStateToProps, mapDispatchToprops)(CommentsContainer)
