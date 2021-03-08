import React from 'react';
import LazyLoad from 'react-lazyload';
import fetchMovieData from "../Utils/FetchAPI";


class MoviePage extends React.Component<any,any> {
    constructor(props : any) {
        super(props);
        this.state = {
            movies : []
        }
    }

    getMovies() {
        fetchMovieData('now_playing')
            .then((res : any) => {
                this.setState({
                    movies : res
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
    }

    render() {
        return(
            <div className=" movie_page-container m-auto">
                <h1 className="title">Movies</h1>
                <div className="movies_poster-container w-4/5 flex flex-wrap justify-around m-auto gap-y-8">
                    {[...this.state.movies].slice(0,18).map((movies) => {
                        return(
                            <div className="movie-posters" key={movies.id}>
                                <LazyLoad once>
                                    <img className="poster" src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}/>
                                </LazyLoad>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MoviePage;