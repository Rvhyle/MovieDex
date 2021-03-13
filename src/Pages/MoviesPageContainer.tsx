import React from 'react';
import GalleryComponent from "../Components/GalleryComponent";
import FeedResource from "../Utils/FeedResource";


const MoviePageContainer = () => {
    return (
        <FeedResource path='movie/top_rated' render={(data: any) => {
            return (
                <GalleryComponent items={data.payLoad}/>
            )
        }}/>
    )

}


export default MoviePageContainer;