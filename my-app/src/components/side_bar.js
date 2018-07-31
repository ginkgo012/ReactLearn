import React, {Component} from 'react';
import SideBarButton from './side_bar_button';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            onSidebarOpen : true
        };       
        this.setSideBarStatus = ()=>{
            const currentState = this.state.onSidebarOpen;
            this.setState({onSidebarOpen: !currentState});
        }
    }
    
render(){
    return(
    

        <nav id="sidebar" className={this.state.onSidebarOpen ? "" : "active"} >
            {/* <!-- Sidebar Header --> */}
            <div className="sidebar-header">
                <h3>Collapsible Sidebar</h3>
            </div>      
            {/* <!-- Sidebar Links --> */}
            <ul className="list-unstyled components">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li>
                    {/* <!-- Link with dropdown items --> */}
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <SideBarButton 
            setSideBarStatus={this.setSideBarStatus}
            onSidebarOpen={this.state.onSidebarOpen}/>
        </nav>
        

        

  )
    }
}

export default SideBar;