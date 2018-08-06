import React, {Component} from 'react';

class About extends Component{

    render(){
        return(
            <div>
                <h2>About this website</h2>
                <p className="lead">
                    The website is a single-page-application, which means that user is able to switch different pages fast and smoothly without loading pages. The aim of building this website is to present various projects. </p>
                    <h4>Frontend :</h4>
                    <p>User interfaces are built with Javascript library - <mark>React</mark>. <mark>React Router</mark> is used for handling routing. <br/>
                    The website is designed with open source toolkit <mark>Bootstrap</mark>, which enables the entire application to be responsive and mobile device friendly.
                    </p>
                    <h4>Backend :</h4>
                    <p>The project is Hosted in <mark>Amazon Web Service EC2</mark> and <mark>Nginx</mark> is acting as the web server. <br/>
                    HTTPS certification is provided by certificate authority - <mark>Let's Encrypt</mark>.
                    </p>

                
            </div>

        )
    }

}

export default About;