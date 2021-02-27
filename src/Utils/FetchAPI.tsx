import axios from 'axios';
import {APIKEY} from "./APIKey";


const fetchMovieData = async(category : string) => {
    try {
        let req =  await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${APIKEY}&language=en-US&page=1`);
        return req.data.results
    }
    catch(e){
        console.log(e)
    }
}

export default fetchMovieData;