import React from 'react';
import "./about.css";
import aboutUs from './img/about-us.png';
import resume from "../../resume/RiteshWebDev_Resume.pdf";
const About = () => {
    return (
        <>
            <section id="about" className="container about mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={aboutUs} alt="About us" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-title fly">
                            <h2 className="title-text text-uppercase mb-0">
                                Let Me</h2>
                            <h2 className="title-text text-uppercase mb-0">
                                Introduce</h2>
                            <h2 className="title-text text-uppercase mb-0">
                                Myself</h2>

                            <div className="py-4 w-md-75 paragraph">
                                <p className="para">
                                    I am an Engineer intend to build a career with an organisation with dedicated people which will help me to explore myself, I’m a type person Once I say I’ll do something, I will complete it at any chance I am willing to work as a key player In challenging
                                    and creative environment.
                                </p>

                            </div>
                            <a href={resume} rel='noreffer' download><button type="button" className="btn button primary-button text-uppercase">Download cv</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About