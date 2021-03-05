import * as React from 'react';
import fetchMovieData from "../Utils/FetchAPI";
import HeaderComponent from "../Components/HomePage/Header-Component";
import PopularComponent from "../Components/HomePage/Popular-Component";
import NewMoviesComponent from "../Components/HomePage/NewMovies-Component";


class HomePage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            movieHeader : {},
            popularMovies : [],
            newMovies : []
        }
    }

    //Fetch Data

    //Header
    getMovieHeader() {
        let randIndex = Math.floor(Math.random() * 15)

        fetchMovieData('now_playing')
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

    //Popular Movies
    getPopularMovies() {
        fetchMovieData('popular')
            .then((res : any) => {
                this.setState({
                    popularMovies : res
                })
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    //New Movies
    getNewMovies() {
        fetchMovieData('upcoming')
            .then((res: any) => {
                this.setState({
                    newMovies : res
                })
            })
            .catch((error: any) => {
                console.log(error)
            })
    }


    //Life Cycle
    componentDidMount() {
        this.getMovieHeader();
        this.getPopularMovies()
        this.getNewMovies();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
        console.log(this.state.newMovies)
    }

    render() {
        return (
            <div>
                <HeaderComponent header={this.state.movieHeader}/>
                <PopularComponent popular={this.state.popularMovies}/>
                <NewMoviesComponent newMovie={this.state.newMovies} />
            </div>
        )
    }
}

export default HomePage;