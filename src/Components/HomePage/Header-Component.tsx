import React from 'react';
import LazyLoad from 'react-lazyload';
import '../../Styles/HeaderStyled.css';
//@ts-ignore
const HeaderComponent = ({header}) => {
    return (
        <div className="header-container">
            <LazyLoad once>
                <img className="header-img" src={`https://image.tmdb.org/t/p/original/${header.poster}`}
                     alt={header.title}/>
            </LazyLoad>
            <div className="header-info absolute">
                <div className="header-title flex items-center flex-wrap">
                    <h1>{header.title}</h1>
                    <span>Rating {header.votes}/10 </span>
                </div>
                <h3>{header.overview}</h3>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Watch Clip</a>
            </div>
        </div>
    )
}

export default HeaderComponent;
