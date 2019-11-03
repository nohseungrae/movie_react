import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movies from "./Movies";
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("im constructor");
  // }
  // state = {
  //   count: 0
  // };
  // add = () => {
  //   this.setState(current => ({ count: current.count + 1 }));
  // };
  // miuns = () => {
  //   this.setState(current => ({ count: current.count - 1 }));
  // };
  // componentDidMount() {
  //   console.log("im componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("im componentDidUpdate");
  // }
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    console.log("im render");
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map(movie => {
              return (
                <Movies
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
