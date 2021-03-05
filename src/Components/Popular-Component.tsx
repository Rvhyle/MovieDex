import React from 'react';
import Slider from "react-slick";
//Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SliderStyles.css'
import '../Styles/PopularStyled.css';

// @ts-ignore
const PopularComponent = ({popular}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: true,
        autoplay : true,
        autoplaySpeed :4000
    }

    //Reduces Array down to 6 Objects
    let reducedArray : Array<any> = [...popular].slice(0, 6)

    return (
        <div className="popular-container">
            <h1 className="popular-title">What's Popular</h1>
            <Slider className="w-4/5 m-auto" {...settings}>
                {[...reducedArray].map(movie => {
                    return (
                        <div key={movie.id}>
                            <div className="slide-item">
                                <img className="popular-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}


export default PopularComponent;