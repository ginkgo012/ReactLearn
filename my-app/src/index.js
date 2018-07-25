import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBiJblHvnEP8L2LnRZ_y38fqYRajUkr6kI';



//Create a new component
class App extends Component{
    constructor(props){
        super(props);

        this.state={ 
            videos:[],
            selectedVideo: null
        
        };

        YTSearch({key:API_KEY, term:'Denmark'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos: videos});
            console.log(videos);
        })
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
            );
    }
}



//take this component's generated html and put it 
//on the page
ReactDOM.render(<App />, document.getElementById('root'));