import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/PopularStyled.css'


// @ts-ignore
const PopularComponent = ({popular}) => {
    //Slider Settings
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    //Reduces Array down to 6 Objects
    let reducedArray = [...popular].slice(0,6)

    return(
        <div>
            <h1>Popular Movies</h1>
            <Slider {...settings}>
                {[...reducedArray].map(movie => {
                    return(
                        <div>
                            <h1 key={movie.id}>{movie.title}</h1>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}


export default PopularComponent;