import React from 'react';
import FeedResource from "../../Utils/FeedResource";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

const PopularComponent = () => {

    //Slider Settings
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

    //Reduces Array down to 15 Objects

    return (
        <FeedResource path='movie/popular' render={(data: any) => {
            let reducedArray: Array<any> = [...data.payLoad].slice(0, 15);

            return(
                <div className="slider-container">
                    <h1 className="title">What's Popular</h1>
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
        }}/>

    )
}


export default PopularComponent;