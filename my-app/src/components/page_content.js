import React, {Component} from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';

import NavBar from './nav_bar';
import SideBar from './side_bar';

import SideBarButton from './side_bar_button';


const API_KEY = 'AIzaSyBiJblHvnEP8L2LnRZ_y38fqYRajUkr6kI';
 


//Create a new component
class PageContent extends Component{
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


            <div id="content">
         
        
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
            // <div>
                
            //  <div className="col">
                
            //     <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
            //     <div className="row">
            //         <VideoDetail video={this.state.selectedVideo} />
            //         <VideoList 
            //             videos={this.state.videos}
            //             onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            //         />
            //         {childComponent}
            //     </div>
            // </div> 
            // </div>
            
        
        
        );
    }
}

export default PageContent;

//take this component's generated html and put it 
//on the page
