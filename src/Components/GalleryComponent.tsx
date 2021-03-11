import React from 'react';
import LazyLoad from 'react-lazyload';


//@ts-ignore
const GalleryComponent = ({items}) => {

    return(
        <div className=" movie_page-container m-auto">
            <h1 className="title">Movies</h1>
            <div className="movies_poster-container w-4/5 flex flex-wrap justify-around m-auto gap-y-8">
                {/*Sliced Array down to 18 Objects for a better UI Experience*/}
                {[...items].slice(0,18).map((item) => {
                    return(
                        <div className="movie-posters" key={item.id}>
                            <LazyLoad once>
                                <img className="poster" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </LazyLoad>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GalleryComponent;