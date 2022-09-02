import React from 'react'

const Skill = (props) => {
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="services">
                    <div className="sevices-img text-center py-4">
                        <img src={props.img} alt="Services-1" />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title text-uppercase font-roboto">{props.name}</h5>
                        <div className="row pt-4">
                            <div className="col-6 card-text text-secondary p-0 ">
                                <ul className="decor">
                                    <li>{props.skill1}</li>
                                    <li>{props.skill2}</li>
                                    <li>{props.skill3}</li>
                                </ul>
                            </div>
                            <div className="col-6 card-text text-secondary p-0 ">
                                <ul className="decor">
                                    <li>{props.skill4}</li>
                                    <li>{props.skill5}</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill