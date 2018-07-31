import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/side_bar';
import './style.css';
import PageContent from './components/page_content';

class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div className="wrapper">
                
                <SideBar />
                <PageContent />

                </div>
                


            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));