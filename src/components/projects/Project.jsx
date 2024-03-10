import React from 'react'

const Pro = ({ title, img, github_link, demo_link, development_link }) => {

    return (
        <>
            <div className="col-md-3 element-item latest card-hover">
                <div className="our-project">

                    <div className="img mt-4">
                        <a className="" rel="noreferrer" href={development_link} target="_blank">
                            <img src={img} alt={title} className="img-fluid" />
                        </a>
                    </div>

                    <div className="title py-4 site-buttons">

                        <h4 className="text-uppercase mt-3 text-center">{title}</h4>

                        <div className="d-flex flex-row flex-wrap mt-4 justify-content-center align-items-center">
                            <a rel="noreferrer" href={development_link} target="_blank"><button type="button" className="btn button primary-button mr-4 text-uppercase">Live</button></a>
                            <a rel="noreferrer" href={github_link} target="_blank"><button type="button" className="btn button secondary-button text-uppercase">Github</button></a>
                            <a rel="noreferrer" href={demo_link} target="_blank"><button type="button" className="btn button secondary-button text-uppercase demo">Demo</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pro