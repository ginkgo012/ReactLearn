import React, {Component} from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';


const API_KEY = 'AIzaSyBiJblHvnEP8L2LnRZ_y38fqYRajUkr6kI';

class VideoApp extends Component{
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
        return (
            <div>
            <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                    <div className="row">
                        <VideoDetail video={this.state.selectedVideo} />
                        <VideoList 
                            videos={this.state.videos}
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        />
                    </div>
            </div>
        )
    }

}

export default VideoApp;