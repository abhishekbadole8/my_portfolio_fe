import React from 'react'
import "./project.css"
import p1 from "./img/swiptory.png";
import p2 from "./img/product_feedback.jpeg";
import p3 from "./img/p3.svg";
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            title: "Swiptory",
            img: p1,
            development_link: "https://swiptory-one.vercel.app/",
            github_link: "https://github.com/abhishekbadole8/SwipTory_Fe",
            demo_link: "https://drive.google.com/file/d/1RVA9eWcjWGXebJBxwTEvlU8bVgRVaWEd/view"
        },
        {
            title: "Product feedback",
            img: p2,
            development_link: "https://product-listing-lemon.vercel.app/",
            github_link: "https://github.com/abhishekbadole8/Project_Listing_Platfrom_Fe",
            demo_link: "https://drive.google.com/file/d/1Ib6N9a9BXCCQyd93BF_37UZvpk_hGv1I/view"
        },
    ]

    return (
        <>
            <section className="project-area mt-5 project" id="project">
                <div className="container">
                    <div className="project-title pb-5 text-center">
                        <h1 className="text-uppercase title-h1 mt-4">Project's</h1>
                    </div>
                    <div className="row grid d-flex justify-content-between align-items-center">

                        {projects.map((project, index) => {
                            const { title, img, github_link, demo_link, development_link } = project;
                            return <Project key={index} img={img} title={title} github_link={github_link} demo_link={demo_link} development_link={development_link} />
                        })}

                        <div className="col-md-3 element-item latest card-hover">
                            <div className="our-project">
                                <div className="img mt-4">
                                    <a className="" rel="noreferrer" href="https://github.com/abhishekbadole8" target="_blank">
                                        <img src={p3} alt="portfolio-1" className="img-fluid" />
                                    </a>
                                </div>
                                <div className="title py-4 site-buttons">
                                    <h4 className="text-uppercase mt-3 text-center">Other Projects</h4>
                                    <div className="d-flex flex-row flex-wrap mt-4 justify-content-center align-items-center">
                                        <a rel="noreferrer" href="https://github.com/abhishekbadole8" target="_blank"><button type="button" className="btn button primary-button mr-4 text-uppercase">Github</button></a>
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

export default Projects;