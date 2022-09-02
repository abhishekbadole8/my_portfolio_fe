import React from 'react';
import "./navbar.css";

const Navbar = () => {

    // let nav_offset_top = document.getElementByClassName("header_area").height() + 50;

    // function navbarFixed() {
    //     if (document.getElementByClassName("header_area").length) {
    //         window.scroll(function () {
    //             let scroll = window.scrollTop();
    //             if (scroll >= nav_offset_top) {
    //                 document.getElementByClassName("header_area .main-menu").classList.add("navbar_fixed");
    //             } else {
    //                 document.getElementByClassName("header_area .main-menu").classList.remove("navbar_fixed");
    //             }
    //         })
    //     }
    // }

    // navbarFixed();

    // console.log(nav_offset_top);

    return (
        <>
            <header className="header_area container">
                <div className="main-menu navbar_fixed">

                    <nav className="navbar navbar-expand-lg navbar-light container">
                        <a href="/"><img src="logo.png" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="mr-auto"></div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#project">project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar