import * as React from 'react';
import fetchMovieData from "../Utils/FetchAPI";
import Movie from "../Utils/MovieInterface";

class PopularComponent extends React.Component<any, Movie> {
    constructor(props : any) {
        super(props);
        this.state = {
            id : 0,
            title: '',
            poster: '',
            overview: '',
            votes: 0
        }
    }

    //Will hold an array of Movie objects
    popularMovies : any = []

    getPopularMovies = (index : number) => {
        fetchMovieData('popular',index)
            .then(res => {
                this.popularMovies.push(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        let count : number = 6;
        for (let i : number = 0; i < count; i++) {
            this.getPopularMovies(i);
        }

    }

    render() {
        return (
            <div>
                <h1>Popular Movies</h1>
            </div>
        )
    }
}

export default PopularComponent;