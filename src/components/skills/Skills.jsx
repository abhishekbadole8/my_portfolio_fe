import React from 'react'
import "./skills.css";
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
import Skill from './Skill';

const Skills = () => {
    return (
        <>
            <section className="services-area skill mt-5" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center services-title">
                            <h1 className="text-uppercase title-text">Skills</h1>
                            <p className="para">
                                What skills I Have
                            </p>
                        </div>
                    </div>
                    <div className="container services-list">
                        <div className="row d-flex justify-content-center align-items-center">
                            <Skill img={s1} name="Frontend" skill1="HTML" skill2="CSS" skill3="Javascript" skill4="ReactJS" skill5="Bootstrap" />
                            <Skill img={s2} name="Backend" skill1="NodeJS" skill2="MongoDB" skill3="ExpressJS" skill4="PHP" skill5="MySql" />
                            <Skill img={s3} name="General" skill1="C++" skill2="Linux" skill3="Git" skill4="Unqork" skill5="Networking" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills