import React from 'react';
import GalleryComponent from "../Components/GalleryComponent";
import {fetchMovieData} from "../Utils/FetchAPI";


class MoviePage extends React.Component<any,any> {
    constructor(props : any) {
        super(props);
        this.state = {
            movies : []
        }
    }

    /**
     * Fetch movie array for Movies Page
     * @param category : String > From MovieDb API
     * fetchMovieData returns a promise [Array : objects], unlike header component
     * this sets state to the full array instead of just one object
     */
    getMovies(category : string) {
        fetchMovieData(category)
            .then((res : any) => {
                this.setState({
                    movies : res
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //Life Cycle
    componentDidMount() {
        this.getMovies('now_playing');
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
    }

    render() {
        return(
            <GalleryComponent items={this.state.movies} />
        )
    }
}

export default MoviePage;