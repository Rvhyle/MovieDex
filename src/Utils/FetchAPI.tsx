import axios from 'axios';
import {APIKEY} from "./APIKey";


export const fetchMovieData = async(category : string) => {
    try {
        let req =  await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${APIKEY}&language=en-US&page=1`);
        return req.data.results
    }
    catch(e){
        console.log(e)
    }
}

export const fetchShowData = async () => {
    try {
        let req =  await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}&language=en-US&page=1`);
        return req.data.results
    }
    catch (e) {
        console.log(e)
    }
}