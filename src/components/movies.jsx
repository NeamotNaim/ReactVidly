import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from "../services/fakeGenreService";
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import Genres from './genres';
import MoviesTable from './common/moviesTable';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    selectedGenre: "",
  };
  handleDelete = (movie) => {
    console.log("click on ", movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLiked = (movie) => {
    console.log("liked cliced", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    //console.log("on page change",currentPage);
  };
  hangeGenreChange = (genre) => {
    //console.log("selected genre", genre);
    this.setState({ selectedGenre: genre.id ,currentPage:1});
    
  };
  handleSort=(path)=>{
    console.log("sorting",path);
  }
  componentDidMount(){
    const genres=[{id:"",name:'All Genres'},...getGenres()];
    this.setState({movies: getMovies(),genres: genres});
  }

  render() {
    const { length: count } = this.state.movies;
    const {selectedGenre,movies:allMovies,currentPage,pageSize}=this.state;
    const filtered = selectedGenre
      ? allMovies.filter((m) => m.genre._id === selectedGenre)
      : allMovies;
      //console.log(selectedGenre);
     // console.log(allMovies.filter(m => m.genre._id===selectedGenre ));
    const movies = paginate(filtered,currentPage,pageSize );
    //console.log(movies);
    const genres = this.state.genres;
    //console.log(genres);
    if (count === 0)
      return <p className="p-3 mr-5 mt-5">There is no movies available</p>;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2">
            <Genres
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreChange={this.hangeGenreChange}
            />
          </div>
          <div className="col-md-9">
            <div>Showing {filtered.length} movies in the database </div>
            <div className="table-responsive m-3  ">
             <MoviesTable
             movies={movies}
             onLiked={this.handleLiked}
             onDelete={this.handleDelete}
             onSort={this.handleSort}

             />
              <Pagination
                pageCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
 
export default Movies;