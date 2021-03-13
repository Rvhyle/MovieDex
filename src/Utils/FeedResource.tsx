import React from "react";
import axios from 'axios';
import {APIKEY} from "./APIKey";


//Render Props Container
class FeedResource extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            payLoad : []
        }
    }

    //Fetch Function
    async fetchFeed(path: string) {
        try{
            let req = await axios.get(`https://api.themoviedb.org/3/${path}?api_key=${APIKEY}&language=en-US&page=1`)
            return req.data.results //Returns an array of movie objects
        }
        catch (e) {
            console.log(e)
        }
    }


    //Life Cycle
    componentDidMount() {
        this.fetchFeed(this.props.path)
            .then((res: any) => {
                this.setState({
                    payLoad : res
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return this.props.render(this.state);
    }
}

export default FeedResource;




/**
 * Returns Array of Movie Objects [ONLY FOR HEADER COMPONENT]
 * @param category
 */
export const fetchMovieData = async(category : string) => {
    try {
        let req =  await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${APIKEY}&language=en-US&page=1`);
        return req.data.results
    }
    catch(e){
        console.log(e)
    }
}