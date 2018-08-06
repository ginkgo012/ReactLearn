import React, {Component} from 'react';
import SunmapperLogo from '../images/sunmapper-logo.png';
import SunmapperBg from '../images/sunmapper-background-1.jpg';

class Sunmapper extends Component{

    render(){
        return(
            <div>
                <h2>About Sunmapper</h2>
                {/* <img src={SunmapperLogo} className="img-responsive" /> */}
                <a href="https://sunmapper.com" target="_blank"><img src={SunmapperBg} className="img-fluid" alt="Responsive image" />
                </a>
                <p className="lead">
                <a href="https://sunmapper.com" target="_blank" style={{ color: '#007bff' }}>Sunmapper</a> is a web application that calculates potential savings for your household. 
                    The goal of Sunmapper is to make it easy for private households to get an overview of the economy in installing solarpanels. 
                    <br/>I worked as a dev intern at Sunmapper for half a year. As a member of dev team, I took responsibilities for revamping the website, including implementing new features and designs, with collaboration among nice colleagues. 

                    </p>
                    <a class="btn btn-primary" href="https://sunmapper.com" target="_blank" role="button">Have a look</a>
            </div>

        )
    }
}

export default Sunmapper;