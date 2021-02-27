import React, {useEffect} from 'react';


// @ts-ignore
const PopularComponent = ({popular}) => {

    //Reduces Array down to 6 Objects
    let reducedArray = [...popular].slice(0,6)

    return(
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {[...reducedArray].map(movie => {
                    return <li key={movie.id}>{movie.title}</li>
                })}
            </ul>
        </div>
    )
}


export default PopularComponent;