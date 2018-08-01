import React, {Component} from 'react';
import ControlSidebar from './control_sidebar';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
        
    }

    
    render(){
        return(
            
            
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

              <ControlSidebar 
                setSideBarStatus={this.props.setSideBarStatus}
                onSidebarOpen={this.props.onSidebarOpen}
                />
              <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-justify"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="nav navbar-nav ml-auto">
                      <li className="nav-item active">
                          <a className="nav-link">Created by Mingjia</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


        );
    }

}

export default NavBar;