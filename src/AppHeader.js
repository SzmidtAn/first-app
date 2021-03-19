import * as React from "react";

export const AppHeader = ({onNavClick}) => {



    return (
        <header className="ui fixed menu">
            <nav>



                <img id="logo" src="https://theme.zocom.io/assets/logo-black.svg"/>


                <a onClick={onNavClick.bind(true)} href="#">Card</a>
                <a onClick={onNavClick.bind(false)} href="#">Product</a>


                <a id="login" href="login.html">login</a>

            </nav>
        </header>
    );

};
