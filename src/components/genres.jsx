import React, { Component } from 'react';
class Genres extends Component {
    state = {  } 
    render() { 
        //console.log(this.props);
        return (
          <ul className="list-group table-hover">
            {/* <a onClick={()=>this.props.onGenreChange({id:''})}  style={{cursor:'pointer'}}>
            <li
              className={
                this.props.selectedGenre === ""
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              All Genres
            </li></a> */}
            {this.props.genres.map((genre) => (
              <a
                key={genre.id}
                onClick={
                   () => this.props.onGenreChange(genre) 
                }
                style={{ cursor: "pointer" }}
              >
                <li
                  className={
                    this.props.selectedGenre === genre.id
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {genre.name}
                </li>
              </a>
            ))}
          </ul>
        );
        
       
    }
    
}

 Genres.defaultProps={
          textProperty:'name',
           valueProperty:'_id'
        }
export default Genres;