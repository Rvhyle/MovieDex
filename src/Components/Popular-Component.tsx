import * as React from 'react';
import fetchMovieData from "../Utils/APICall";
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

    render() {
        return (
            <div></div>
        )
    }
}

export default PopularComponent;