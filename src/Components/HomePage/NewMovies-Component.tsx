import React from "react";
import LazyLoad from 'react-lazyload';
import '../../Styles/NewMoviesStyled.css';
import '../../Styles/poster-styled.css';

//@ts-ignore
const NewMoviesComponent = ({newMovie}) => {

    let reducedArray: Array<any> = [...newMovie].slice(5, 11);

    return (
        <div className="newMovies-container">
            <h1 id="upcoming-title">Upcoming Movies</h1>
            <div className="newMovies_poster-container flex flex-wrap justify-between">
                {[...reducedArray].map((movie) => {
                    return (
                        <div className="movie-posters" key={movie.id}>
                            <LazyLoad>
                                <img className="poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                     alt={movie.title}/>
                            </LazyLoad>
                        </div>
                    )
                })}
                    </div>
            </div>
    )
}


export default NewMoviesComponent;