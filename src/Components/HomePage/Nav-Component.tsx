import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import '../../Styles/NavStyled.css';

const NavComponent = () => {

    let [isPressed,setPressed] = useState(false);

    let menuOpen = () => {
        setPressed(true);
    }

    let menuClose = () => {
        setPressed(false);
    }

    return (
        <div className="nav-container sticky  w-full m-auto">
            <div className="w-4/5 m-auto flex flex-wrap items-center nav_content-container ">
                <h1 className="pr-16 font-extrabold text-3xl logo">Movie<span id="logospan">Dex</span></h1>
                <button onClick={() => menuOpen()} className={!isPressed ? "openBurger" : "closeBurger"}><MenuIcon style={{ fontSize: 30 }} /></button>
                <button onClick={() => menuClose()} className={isPressed ? "openBurger" : "closeBurger"}><CloseIcon style={{ fontSize: 30 }}/></button>
                <ul className="flex gap-14 font-bold dv">
                    <li>Movies</li>
                    <li>Shows</li>
                </ul>
            </div>

            {/*Burger Nav*/}
            <ul className={isPressed ? "open font-bold" : "close"}>
                <li>Movies</li>
                <li>Shows</li>
            </ul>
        </div>
        )

}

export default NavComponent;
