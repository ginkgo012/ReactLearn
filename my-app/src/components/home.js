import React, {Component} from 'react';
import VideoImg from '../images/YouTube-TV.jpg';
import UnderCons from '../images/Under-Construction.jpg';
import UC from '../images/Tesla_03_Plug.gif';
import {Link} from 'react-router-dom';

class Home extends Component{


    render(){
        return(
       
        <div className="card-deck">

                <div className="card" >
                    <img src={VideoImg} className="img-thumbnail rounded float-left" />
                    <div className="card-body">
                        <h5 className="card-title">Video Search App</h5>
                        <p className="card-text">Created an app in order to search videos by using YouTube Api.</p>
                        <Link to="/videoapp" className="btn btn-primary">Take me a look</Link>
                    </div>
                </div>     
                <div className="card" >
                    <img src={UC} className="img-thumbnail rounded float-left" />
                    <div className="card-body">
                        <h5 className="card-title">Under Construction</h5>
                        <p className="card-text">Content will be available soon...</p>
                        <a href="#" className="btn btn-primary disabled">Take me a look</a>
                    </div>
                </div>
                
            </div>
            
       
        )
    }
}

export default Home;