import React from "react";
import FeedResource from "../../Utils/FeedResource";
import LazyLoad from 'react-lazyload';

const NewMoviesComponent = () => {


    return (
        <FeedResource path='movie/upcoming' render={(data: any) => {
            let reducedArray: Array<any> = [...data.payLoad].slice(5, 11);

            return(
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
        }}/>
    )
}


export default NewMoviesComponent;