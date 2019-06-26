import React from "react";
import { connect } from "react-redux";
import { fetchGenres } from '../../../redux/actions/genres';
import SelectGenre from './SelectGenre'


class SelectGenreContainer extends React.Component {

  render() {
    return (
      <div>
        <SelectGenre genres={this.props.genres}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchGenres()
}

}

const mapStateToProps = function(state) {
  return {
    genres: state.genres.list,
};
};
const mapDispatchToProps = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectGenreContainer);
