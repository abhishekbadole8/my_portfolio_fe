import React from 'react'

const Skill = ({ img, name, skills }) => {

    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="services">
                    <div className="sevices-img text-center py-4">
                        <img src={img} alt="Services-1" />
                    </div>

                    <div className="card-body text-center">
                        <h5 className="card-title text-uppercase font-roboto">{name}</h5>

                        <div className="row pt-4">

                            <ul className="decor flex-wrap text-secondary">
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill