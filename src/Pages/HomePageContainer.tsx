import * as React from 'react';
import {fetchMovieData} from "../Utils/FetchAPI";
//Components
import HeaderComponent from "../Components/HomePage/Header-Component";
import PopularComponent from "../Components/HomePage/Popular-Component";
import NewMoviesComponent from "../Components/HomePage/NewMovies-Component";
import TopRatedComponent from "../Components/HomePage/TopRated_Component";


class HomePageContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            movieHeader : {},
            popularMovies : [],
            newMovies : [],
            topRated : []
        }
    }

    //Fetch Data
    /**
     * Fetch movie info for Header Component
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects]
     */
    getMovieHeader(category : string) {
        let randIndex = Math.floor(Math.random() * 15)

        fetchMovieData(category)
            .then((res: any) => {
                this.setState({
                    movieHeader : {
                        id: res[randIndex].id,
                        title: res[randIndex].title,
                        poster: res[randIndex].backdrop_path,
                        overview: res[randIndex].overview,
                        votes: res[randIndex].vote_average
                    }
                })
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    /**
     * Fetch array of movies for Popular Movies Component
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects]
     */
    getPopularMovies(category : string) {
        fetchMovieData(category)
            .then((res : any) => {
                this.setState({
                    popularMovies : res
                })
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    /**
     * Fetch array of movies for New Movies Component
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects]
     */
    getNewMovies(category : string) {
        fetchMovieData(category)
            .then((res: any) => {
                this.setState({
                    newMovies : res
                })
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    /**
     * Fetch array of movies for Top Movies Component
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects]
     */
    getTopMovies(category : string) {
        fetchMovieData(category)
            .then((res : any) => {
                this.setState({
                    topRated : res
                })
            })
            .catch((error : String) => {
                console.log(error)
            })
    }


    //Life Cycle
    componentDidMount() {
        this.getMovieHeader('now_playing');
        this.getPopularMovies('popular');
        this.getNewMovies('upcoming');
        this.getTopMovies('top_rated');
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
    }

    render() {
        return (
            <div>
                <HeaderComponent header={this.state.movieHeader}/>
                <PopularComponent popular={this.state.popularMovies}/>
                <NewMoviesComponent newMovie={this.state.newMovies} />
                <TopRatedComponent topMovies ={this.state.topRated} />
            </div>
        )
    }
}

export default HomePageContainer;