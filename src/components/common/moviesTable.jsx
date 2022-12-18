import React, { Component } from 'react';
import Liked from './like';
const MoviesTable = (props) => {
    const { movies, onLiked, onDelete, onSort } = props;
    return (
      <table className="table table-hover">
        {/* <caption>List of users</caption> */}
        <thead>
          <tr>
             <th onClick={()=>onSort('title')} scope="col">Title</th>
             <th onClick={()=>onSort('genre.name')} scope="col">Genre</th>
             <th onClick={()=>onSort('numberInStock')} scope="col">Stock</th>
             <th onClick={()=>onSort('dailyRentalRate')} scope="col">Rate</th>
             <th  scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <th scope="row">{movie.title}</th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Liked
                  liked={movie.liked}
                  onClick={() => onLiked(movie)}
                ></Liked>
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
 
export default MoviesTable;