import React from 'react'

const Pro = (props) => {
    return (
        <>
            <div className="col-md-3 element-item latest card-hover">
                <div className="our-project">
                    <div className="img mt-4">
                        <a className="" rel="noreferrer" href={props.liveLink} target="_blank">
                            <img src={props.img} alt="portfolio-1" className="img-fluid" />
                        </a>
                    </div>
                    <div className="title py-4 site-buttons">
                        <h4 className="text-uppercase mt-3 text-center">{props.title}</h4>
                        <div className="d-flex flex-row flex-wrap mt-4 justify-content-center align-items-center">
                            <a rel="noreferrer" href={props.liveLink} target="_blank"><button type="button" className="btn button primary-button mr-4 text-uppercase">Live</button></a>
                            <a rel="noreferrer" href={props.gitLink} target="_blank"><button type="button" className="btn button secondary-button text-uppercase">Github</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pro