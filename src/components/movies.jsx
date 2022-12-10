import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
class Movies extends Component {
    state = {
        movies: getMovies()
      } 
      handleDelete=(movie)=>{
             console.log('click on ',movie);
             const movies= this.state.movies.filter(m=>m._id !==movie._id);
             this.setState({movies:movies});
      }
    render() {
      const {length:count}=this.state.movies;
      if(count===0) return <p className='p-3 mr-5 mt-5'>There is no movies available</p>;
      return(
      <div className="container mt-5">
        
        <div>Showing {count} movies in the database </div>
        <div className="table-responsive m-3  ">
          <table className="table table-hover">
            {/* <caption>List of users</caption> */}
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(
                   <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-sm btn-danger">Delete</button></td>
              </tr> 
                ))}
              
             
            </tbody>
          </table>
        </div>
      </div>);
    }
}
 
export default Movies;