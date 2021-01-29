import * as React from 'react';
import '../Styles/NavStyled.css';

const NavComponent = () => {
    return (
        <div className="nav-container flex items-center fixed w-screen m-auto">
            <div className="flex items-center justify-between w-4/5 m-auto">
                <h1 className="pr-16 font-extrabold text-2xl logo">Movie<span id="logospan">Dex</span></h1>
                <ul className="flex gap-11 font-extrabold">
                    <li>Movies</li>
                    <li>Shows</li>
                </ul>
            </div>
        </div>
    )
}


export default NavComponent;
