import React from 'react'
import "./footer.css"
import logo from "./img/logo.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div >
                        <div className="site-logo text-center pt-4 pb-3">
                            <a href="#home" className='navbar-logo'>My_Portfolio</a>
                        </div>
                        <div className="social text-center mb-3">
                            <a href="https://www.linkedin.com/in/abhishek-badole-16596a166/" rel="noreferrer" target="_blank" ><LinkedInIcon /></a>
                            <a href="https://github.com/abhishekbadole8" rel="noreferrer" target="_blank" ><GitHubIcon /></a>
                            <a href="https://x.com/abhibadole1" rel="noreferrer" target="_blank" ><TwitterIcon /></a>
                        </div>
                        <div className="copyrights text-center">
                            <p className="para">
                                Copyright ©2024
                                <a href="#home"><span style={{ color: "var(--primary-color)" }}> Abhishek</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer