import React, {Component} from 'react';


//const SearchBar = () => {
  //  return <input />    
//}

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term:'' };
    }

    onInputChange(term){
        this.setState({term});
    }

    onSearchClick(){
        this.props.onSearchTermChange(this.state.term);
    }

    onSearchEnter(e){
        if (e.key == 'Enter'){
            this.onSearchClick();
        }
    }

    render() {
        //return <input onChange={this.onInputChange} />;
        return(
        <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} 
            onKeyPress={event => this.onSearchEnter(event)} />
            <button onClick={() => this.onSearchClick()}>Search</button>
        </div>
        )
    }
}

export default SearchBar;