import React from 'react'
import "./project.css"

import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.svg";
import Pro from './Pro';


const Project = () => {
    return (
        <>
            <section className="project-area mt-5 project" id="project">
                <div className="container">
                    <div className="project-title pb-5 text-center">
                        <h1 className="text-uppercase title-h1 mt-4">Recently Done Project</h1>
                    </div>
                    <div className="row grid d-flex justify-content-between align-items-center">
                        <Pro img={p1} title="Notes App MERN" liveLink="https://rkeepnotes.herokuapp.com/" gitLink="https://github.com/rnrathod16/MERN_rKeep_Notes" />
                        <Pro img={p2} title="Portfolio Builder" liveLink="https://fastidious-pothos-189583.netlify.app/" gitLink="https://github.com/rnrathod16/Portfolio_Builder_Frontend" />

                        <div className="col-md-3 element-item latest card-hover">
                            <div className="our-project">
                                <div className="img mt-4">
                                    <a className="" rel="noreferrer" href="https://github.com/rnrathod16" target="_blank">
                                        <img src={p3} alt="portfolio-1" className="img-fluid" />
                                    </a>
                                </div>
                                <div className="title py-4 site-buttons">
                                    <h4 className="text-uppercase mt-3 text-center">Other Projects</h4>
                                    <div className="d-flex flex-row flex-wrap mt-4 justify-content-center align-items-center">
                                        <a rel="noreferrer" href="https://github.com/rnrathod16" target="_blank"><button type="button" className="btn button primary-button mr-4 text-uppercase">Github</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Project