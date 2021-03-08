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
            <GalleryComponent items={this.state.movies} />
        )
    }
}

export default MoviePage;