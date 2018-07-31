import React, {Component} from 'react';

class SideBarButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <button onClick={this.props.setSideBarStatus} id="sidebarCollapse" className={this.props.onSidebarOpen ? "navbar-btn" : "navbar-btn active"}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
    }
}

export default SideBarButton;