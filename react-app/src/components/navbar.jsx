import React, { Component } from 'react';

class Navbar extends Component {

    render() { 
        return ( 
             <nav className="navbar navbar-light bg-light" style={{display: "block", padding:"0.5rem 7.5rem"}}>
                <a className="navbar-brand" href="#">Navbar</a>
                 <span className="badge badge-pill badge-secondary">
                     {this.props.totalCounters}
                  </span>
             </nav>
        );
    }
}
 
export default Navbar;