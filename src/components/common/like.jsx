import React, { Component } from 'react';
class Liked extends Component {
    state = {  } 
    render() { 
       let classes="fa fa-heart";
       if(!this.props.liked){
        classes+="-o";
       }
        return <i  className={classes} onClick={this.props.onClick} style={{cursor:'pointer'}} aria-hidden="true"></i>;
    }
}
 
export default Liked;