import React from "react";
import LazyLoad from 'react-lazyload';

//@ts-ignore
const NewMoviesComponent = ({newMovie}) => {

    //Reduces Array down to 6 Objects
    let reducedArray: Array<any> = [...newMovie].slice(5, 11);

    return (
        <div className="newMovies-container">
            <h1 className="title">Upcoming Movies</h1>
            <div className="poster-container flex flex-wrap justify-around">
                {[...reducedArray].map((movie) => {
                    return (
                        <div className="movie-posters" key={movie.id}>
                            <LazyLoad>
                                <img className="poster newMovie" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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