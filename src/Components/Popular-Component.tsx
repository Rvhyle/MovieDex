import React from 'react';
import '../Styles/PopularStyled.css';


// @ts-ignore
const PopularComponent = ({popular}) => {

    //Reduces Array down to 6 Objects
    let reducedArray = [...popular].slice(0, 6)

    return (
        <div className="popular-container">
            <h1>Popular Movies</h1>
                {[...reducedArray].map(movie => {
                    return (
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                        </div>
                    )
                })}
        </div>
    )
}


export default PopularComponent;