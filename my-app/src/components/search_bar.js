import React, {Component} from 'react';


//const SearchBar = () => {
  //  return <input />    
//}

class SearchBar extends Component{
    onInputChange(event){
        console.log(event.target.value);
    }
    
    render() {
        //return <input onChange={this.onInputChange} />;
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;