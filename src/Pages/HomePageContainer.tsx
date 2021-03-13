import * as React from 'react';
import {fetchMovieData} from "../Utils/FeedResource";
//Components
import HeaderComponent from "../Components/HomePage/Header-Component";
import PopularComponent from "../Components/HomePage/Popular-Component";
import NewMoviesComponent from "../Components/HomePage/NewMovies-Component";
import TopRatedComponent from "../Components/HomePage/TopRated_Component";


class HomePageContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            movieHeader : {}
        }

    }

    /**
     * Fetch movie info for Header Component
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects]
     */
    getMovieHeader(category : string) {
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



    //Life Cycle
    componentDidMount() {
        this.getMovieHeader('now_playing');
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
    }

    render() {
        return (
            <div>
                <HeaderComponent header={this.state.movieHeader}/>
                <PopularComponent />
                <NewMoviesComponent />
                <TopRatedComponent />
            </div>
        )
    }
}

export default HomePageContainer;