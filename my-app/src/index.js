import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.css';
import NavBar from './components/nav_bar';
import SideBar from './components/side_bar';

const API_KEY = 'AIzaSyBiJblHvnEP8L2LnRZ_y38fqYRajUkr6kI';
 


//Create a new component
class App extends Component{
    constructor(props){
        super(props);

        this.state={ 
            videos:[],
            selectedVideo: null
        
        };

        this.videoSearch('Denmark');
        
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term:term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos: videos});
            //console.log(videos);
        });
    }

    render(){

        //const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000 );
        let childComponent = null;
        childComponent = <div> JUJU burger </div>;
        return (

            <div>
                
                {/* <NavBar /> */}
                <SideBar onSidebarOpen={this.props.setSideBar} />
            <div className="col">
                
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    />
                    {childComponent}
                </div>
            </div>
            </div>
            
        
        
        );
    }
}



//take this component's generated html and put it 
//on the page
ReactDOM.render(<App />, document.getElementById('root'));