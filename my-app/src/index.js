import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyBiJblHvnEP8L2LnRZ_y38fqYRajUkr6kI';

//Create a new component
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}


//take this component's generated html and put it 
//on the page
ReactDOM.render(<App />, document.getElementById('root'));