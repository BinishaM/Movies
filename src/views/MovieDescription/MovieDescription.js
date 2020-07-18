import React, {Component} from 'react';
import Movies from '../../shared/Movies';
import axios from 'axios';
class MovieDescription extends Component {
    state={
        routeNum:0,
        movie:{}
    };

    componentDidMount() {
        axios.get('https://yts.lt/api/v2/movie_details.json?movie_id='+
            this.props.match.params.id).then(res=>{
                this.setState({
                    movie:{...res.data.data.movie}
                })
            console.log(res.data.data.movie)
        });
        // this.getMovieHandler();
    };
    getMovieHandler(){
        let movie= Movies.find(movie=>{
            return movie.id==this.props.match.params.id
        });
        this.setState({
            movie:movie
        })
    }

    render() {
        return (
            <div  className="welcome-content">
                <div className="movie-cover">
                    <img src={this.state.movie.background_image_original} alt=""/>
                </div>
                <div className="movie-descriptions">
                    <div className="movie-description-title">
                        {this.state.movie.title}
                    </div>
                    <div className="movie-description-genre">
                        {this.state.movie.description_full}
                    </div>
                    <div className="download-torrent">
                        {this.state.movie.torrents?
                            this.state.movie.torrents.map(torrent=>(
                            <a href={torrent.url} >{torrent.quality}</a>
                        )):''}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDescription;