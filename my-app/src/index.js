import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/nav_bar';
import SideBar from './components/side_bar';
import VideoApp from './videoapp-components/video_app';
import Home from './components/home';
import Another from './construction-components/another';
import About from './components/about';
import Contact from './components/contact';
import {BrowserRouter, Route } from 'react-router-dom';
import Sunmapper from './sunmapper-components/sunmapper';
import WeatherApp from './weather/components/app';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';



//Create a new component
class App extends Component{
    constructor(props){
        super(props);
        this.state={ 
            onSidebarOpen: true
        };
        this.setSideBarStatus =  ()=>{
            const currentState = this.state.onSidebarOpen;
            this.setState({onSidebarOpen: !currentState});
        }
    }

    render(){
        return (
            <BrowserRouter>
            <div className ="wrapper">               
                <SideBar onSidebarOpen={this.state.onSidebarOpen}/>      
                <div id="content">
                <NavBar
                setSideBarStatus={this.setSideBarStatus}
                onSidebarOpen={this.state.onSidebarOpen} />             
                <Route exact path="/" component={Home} />  
                <Route path="/about" component={About} />  
                <Route path="/app/videoapp" component={VideoApp} />  
                <Route path="/app/weatherapp" component={WeatherApp} />  
                <Route path="/app/sunmapper" component={Sunmapper} />
                <Route path="/app/another" component={Another} />
                <Route path="/contact" component={Contact} />    
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, document.getElementById('root'));