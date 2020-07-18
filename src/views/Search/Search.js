import React, {Component} from 'react';
import axios from 'axios';
import MovieCard from '../../component/MovieCard'
class Search extends Component {
	state={
		movies:[]
	}
	componentDidMount(){
	 this.getMovies()
	}
	 componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
     this.getMovies()
    }
  }
  getMovies(){
  	 axios.get('https://yts.lt/api/v2/list_movies.json?query_term='+
	 	(this.props.match.params.search?this.props.match.params.search:'')).
	            then(res=>{
	                this.setState({
	                    movies:res.data.data.movies
	                });
	                console.log(this.state.movies)
	        })
  }
    render() {


        return (
            <div className="welcome-content">
            	<h1>{'Results for '+this.props.match.params.search}</h1>
                <div className="movies-list">
                {this.state.movies.map((movie,key)=>(
                	<MovieCard movie={movie} key={key}/>))};
        		</div>
        		</div>)
			}
}	

export default Search;