import React from 'react'
import "./footer.css"
import logo from "./img/logo.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="">
                        <div className="site-logo text-center py-4">
                            <a href="#home"><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="social text-center mb-3">
                            <a href="https://www.linkedin.com/in/ritesh-rathod-26054a183/" rel="noreferrer" target="_blank" ><LinkedInIcon /></a>
                            <a href="https://github.com/rnrathod16" rel="noreferrer" target="_blank" ><GitHubIcon /></a>
                            <a href="https://www.codechef.com/users/rnrathod" rel="noreferrer" target="_blank" ><CodeIcon /></a>

                        </div>
                        <div className="copyrights text-center">
                            <p className="para">
                                Copyright ©2019
                                <a href="#home"><span style={{ color: "var(--primary-color)" }}> Ritesh</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer