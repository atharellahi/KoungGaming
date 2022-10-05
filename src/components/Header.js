import React from "react";

import kounglogo from './media/logo.png';


const Header = () => {
    return (
        <React.Fragment>
            <header>
                <h1>KOUNG GAMING</h1>
                <img src={kounglogo } alt="logo"></img>



            </header>
            <div id="nav">
                <nav>
                    <a href="#home">Home</a>
                    <div>
                        <a href="#shop">Shop</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#koungbuilds">KoungBuilds</a>
                    </div>
                    <a href="#singin" id="signin">Sign In ➔</a>

                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;