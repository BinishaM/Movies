import React from 'react';
import {Link} from "react-router-dom";

let movieCardStyle = {
    width: '175px',
    height: '225px',
    borderRadius: '5px',
    border: '1px solid rgba(0,0,0,0.12)'
};
let imageCoverStyle = {
    height: '75%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
};


const MovieCard = props => (
    
    <Link to={'/'+ props.movie.id}>
        <div className="movie-card" style={movieCardStyle}>
            <img src={props.movie.medium_cover_image} style={imageCoverStyle} alt="" className="cover"/>
            <div className="movie-title">{props.movie.title}</div>
            <div className="movie-genre">
                {props.movie.genre}
            </div>
        </div>
    </Link>
);
export default MovieCard;