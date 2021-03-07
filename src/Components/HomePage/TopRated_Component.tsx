import React from "react";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
//Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Styles/SliderStyles.css';
import '../../Styles/poster-styled.css';

//@ts-ignore
const TopRatedComponent = ({topMovies}) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    draggable: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    autoplay: true,
                    infinite: true,
                    autoplaySpeed: 3000,
                    accessibility: false
                }
            }]
    }

    //Reduced Array
    let reducedArray : Array<any> = [...topMovies].slice(5,20);

    return (
        <div className="slider-container">
            <h1 className="title">Top Rated</h1>
            <Slider className="w-4/5 m-auto" {...settings}>
                {[...reducedArray].map(movie => {
                    return (
                        <div key={movie.id}>
                            <div className="slide-item">
                                <LazyLoad once>
                                    <img className="poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                         alt={movie.title}/>
                                </LazyLoad>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default TopRatedComponent;