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
        this.props.onSearchTermChange(term);
    }

    render() {
        //return <input onChange={this.onInputChange} />;
        return(
        <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        )
    }
}

export default SearchBar;