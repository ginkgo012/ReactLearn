import React, {Component} from 'react';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {

        };       
    }

    
render(){
    return(
    
        <nav id="sidebar" className={this.props.onSidebarOpen ? "" : "active"} >
            {/* <!-- Sidebar Header --> */}
            <div className="sidebar-header">
                <h3>   Studio </h3>
            </div>      
            {/* <!-- Sidebar Links --> */}
            <ul className="list-unstyled components">
                <li ><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li>
                    {/* <!-- Link with dropdown items --> */}
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Pages</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>


        
    )
    }
}

export default SideBar;