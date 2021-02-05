import * as React from 'react';
import '../Styles/HeaderStyled.css';
import fetchMovieData from "../Utils/APICall";

const HeaderComponent = () => {

    const [movie, setMovie] = React.useState({
        id: undefined,
        title: undefined,
        poster: undefined,
        overview: undefined,
        votes: undefined
    });

    // const [fetchStatus, setStatus] = React.useState(false)

    // Call to TMDb for movie info
    React.useEffect(() => {
        fetchMovieData('now_playing', 0)
            .then((res: any) => {
                setMovie(prevState => ({
                    ...prevState,
                    id: res.id,
                    title: res.title,
                    poster: res.backdrop_path,
                    overview: res.overview,
                    votes: res.vote_average
                }))
            })
            .catch((error: any) => {
                console.log(error)
            })

    }, [])

    return (
        <div className="header-container">
            <img className="header-img" src={`https://image.tmdb.org/t/p/original/${movie.poster}`}
                 alt="Wonder Woman 1984"/>
            <div className="header-info absolute">
                <div className="header-title flex items-center flex-wrap">
                    <h1>{movie.title}</h1>
                    <span>Rating {movie.votes}/10 </span>
                </div>
                <h3>{movie.overview}</h3>
                <a href="https://www.youtube.com/watch?v=XW2E2Fnh52w" target="_blank">Watch Trailer</a>
                <a href="https://www.youtube.com/watch?v=VFfQmnYye4o" target="_blank">Watch Clip</a>
            </div>
        </div>
    )
}


export default HeaderComponent;
