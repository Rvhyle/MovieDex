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

    const[fetchStatus,setStatus] = React.useState(false)

    // Call to TMDb for movie info
    React.useEffect(() => {
        fetchMovieData('now_playing',0)
            .then((res : any) => {
                setMovie({
                    ...movie,
                    id: res.id,
                    title: res.title,
                    poster: res.backdrop_path,
                    overview: res.overview,
                    votes: res.vote_average
                })
                //If Promise is fulfilled, status will be set to true
                // setting status prevents infinite renders
                setStatus(true);
            })
            .catch((error : any) => {
                console.log(error)
            })

        console.log(movie)
    }, [fetchStatus])

    return(
        <div className="header-container">
            <img className="header-img" src={`https://image.tmdb.org/t/p/original/${movie.poster}`} alt="Wonder Woman 1984"/>
        </div>
    )
}



export default HeaderComponent;
