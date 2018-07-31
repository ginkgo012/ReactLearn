import React, {Component} from 'react';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            onSidebarOpen: true
        };       
    }

    setSideBarStatus(){
        const currentState = this.state.onSidebarOpen;
        this.setState({onSidebarOpen: !currentState});
    }
    
render(){
    return(
    <div className="wrapper">
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
        </nav>
        <div id="content">
            <button onClick={this.setSideBarStatus.bind(this)} id="sidebarCollapse" className={this.state.onSidebarOpen ? "navbar-btn" : "navbar-btn active"}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            sdfd
        </div>
    </div>)
    }
}

export default SideBar;