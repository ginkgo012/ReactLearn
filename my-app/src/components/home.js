import React, {Component} from 'react';
import VideoImg from '../images/YouTube-TV.jpg';
import UnderCons from '../images/Under-Construction.jpg';
import UC from '../images/Tesla_03_Plug.gif';
import Sun from '../images/sun.jpg';
import {Link} from 'react-router-dom';

class Home extends Component{


    render(){
        return(
       
        <div className="card-deck">

                <div className="card" >
                    <img src={VideoImg} className="img-thumbnail rounded float-left" />
                    <div className="card-body">
                        <h5 className="card-title">Video Search App</h5>
                        <p className="card-text">It is a responsive single-page-application created by React and APIs from YouTube. Users can experience searching and playing videos without loading pages.</p>
                        <Link to="/app/videoapp" className="btn btn-primary">Take me a look</Link>
                    </div>
                </div>
                <div className="card" >
                    <img src={Sun} className="img-thumbnail rounded float-left" />
                    <div className="card-body">
                        <h5 className="card-title">Sunmapper App</h5>
                        <p className="card-text">It is a web application where a houseowner can calculate economic potentials when solar panels are installed on the roof.</p>
                        <a href="/app/sunmapper" className="btn btn-primary">Take me a look</a>
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