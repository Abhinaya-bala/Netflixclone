import React, { useEffect, useState } from 'react';
import "./NavBar.css"
import logo from "./assert/netflix.jpeg"
import avatar from "./assert/netflixavatar.png"

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        }

    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src={logo}
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src={avatar}
                alt="Netflix Logo"
            />
        </div>
    )
}

export default NavBar