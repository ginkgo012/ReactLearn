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

    onInputEnter(e){
        if (e.key == 'Enter'){
            this.onSearchClick();
        }
    }

    render() {
        //return <input onChange={this.onInputChange} />;
        return(
        <div className="search-bar row justify-content-start ml-0">
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} 
            onKeyPress={event => this.onInputEnter(event)} />
            <button className="btn btn-secondary" onClick={() => this.onSearchClick()}>Search</button>
        </div>
        )
    }
}

export default SearchBar;