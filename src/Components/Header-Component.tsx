import * as React from 'react';
import Movie from "../Utils/MovieInterface";
import '../Styles/HeaderStyled.css';
import fetchMovieData from "../Utils/FetchAPI";


class HeaderComponent extends React.Component<any, Movie> {
    constructor(props: any) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            poster: '',
            overview: '',
            votes: 0

        }
    }

    //Randomly picks an index between 0 and the max number input
    indexPicker = (max: number) => {
        let num = Math.floor(Math.random() * max)
        return num;
    }

    componentDidMount() {
        console.log("Mounted")
        fetchMovieData('now_playing', this.indexPicker(15))
            .then((res: any) => {
                this.setState({
                    id: res.id,
                    title: res.title,
                    poster: res.backdrop_path,
                    overview: res.overview,
                    votes: res.vote_average
                })

            })
            .catch((error: any) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div className="header-container">
                <img className="header-img" src={`https://image.tmdb.org/t/p/original/${this.state.poster}`}
                     alt="Wonder Woman 1984"/>
                <div className="header-info absolute">
                    <div className="header-title flex items-center flex-wrap">
                        <h1>{this.state.title}</h1>
                        <span>Rating {this.state.votes}/10 </span>
                    </div>
                    <h3>{this.state.overview}</h3>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Watch Clip</a>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;
