import React from 'react';
import "./home.css";
import bannerImg from "./img/banner-image.png";
import resume from "../../resume/Resume_Abhishek_Badole_Fullstack_Developer.pdf";

const Home = () => {
    return (
        <>
            <section id="home" className="site-banner home " style={{ marginTop: '76px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center order-md-last">
                            <div className="banner-image">
                                <img src={bannerImg} alt="banner-img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  d-flex justify-content-center align-items-center order-md-first">

                            <div className="site-title text-center">
                                <h3 className="title-text">Hey</h3>
                                <h1 className="title-text text-uppercase">I am Abhishek</h1>
                                <h4 className="title-text text-uppercase cen">Full Stack Developer</h4>
                                <div className="site-buttons">
                                    <div className="d-flex flex-row">
                                        <a href="#contact" rel='noreffer'> <button type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                            me</button></a>
                                        <a href={resume} rel='noreffer' download> <button type="button" className="btn button secondary-button text-uppercase">Get
                                            cv</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home