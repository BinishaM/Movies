import React, {Component} from 'react';
import Movies from '../../../shared/Movies'
import MovieCard from "../../../component/MovieCard";
import axios from 'axios';

class WelcomeContent extends Component {
    state={
        movies:[]
    }
    componentDidMount(){
        axios.get('https://yts.lt/api/v2/list_movies.json').
            then(res=>{
                this.setState({
                    movies:[...res.data.data.movies]
                });
                console.log(this.state.movies)
        })
    }
    render() {
        return (
            <div className="welcome-content">
                <h1>List of Movies</h1>
                <div className="movies-list">
                    {this.state.movies.map((movie, key) => (
                        <MovieCard movie={movie} key={key}/>
                    ))}
                </div>
            </div>
        );
    }
}


export default WelcomeContent;