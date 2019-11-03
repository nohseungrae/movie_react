import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
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
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies_movie">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
