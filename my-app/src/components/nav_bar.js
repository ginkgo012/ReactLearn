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
            
            
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

              <ControlSidebar 
                setSideBarStatus={this.props.setSideBarStatus}
                onSidebarOpen={this.props.onSidebarOpen}
                />
              <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-align-justify"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="nav navbar-nav ml-auto">
                      <li class="nav-item active">
                          <a class="nav-link">Created by Mingjia</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


        );
    }

}

export default NavBar;