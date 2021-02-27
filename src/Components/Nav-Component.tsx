import * as React from 'react';
import '../Styles/NavStyled.css';

const NavComponent = () => {
    return (
        <div className="nav-container flex sticky items-center w-screen m-auto">
            <div className="flex items-center w-4/5 m-auto">
                <h1 className="pr-16 font-extrabold text-3xl logo">Movie<span id="logospan">Dex</span></h1>
                <ul className="flex gap-11 font-extrabold">
                    <li>Movies</li>
                    <li>Shows</li>
                </ul>
            </div>
        </div>
    )
}


export default NavComponent;
