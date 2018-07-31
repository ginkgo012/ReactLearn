import React, {Component} from 'react';

class ControlSidebar extends Component{

    constructor(props){
        super(props);
        // console.log("Props lulu");
        // console.log(this.props);
    }

    render(){
        // console.log("In ControlSidebar");
        // console.log(this.props.setSidebarStatus);
        // console.log(this.props.onSidebarOpen);

        return(
            <button onClick={this.props.setSideBarStatus} id="sidebarCollapse" 
            className={this.props.onSidebarOpen ? "navbar-btn" : "navbar-btn active"}>
                    <span></span>
                    <span></span>
                    <span></span>
            </button>
        )
    }
}

export default ControlSidebar;