import React from 'react'
import "./skills.css";
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
import Skill from './Skill';

const Skills = () => {
    const skills = [
        {
            category: "Frontend Development",
            img: s1,
            skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
        },
        {
            category: "Backend Development",
            img: s2,
            skills: ["NodeJS", "ExpressJS", "MySQL"]
        },
        {
            category: "Database and General",
            img: s3,
            skills: ["MongoDb", "Mysql", "Git", "Tailwind"]
        }
    ];

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
                            {skills.map((skill, index) => {
                                return <Skill key={index} img={skill.img} name={skill.category} skills={skill.skills} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills