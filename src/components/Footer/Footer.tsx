import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-light py-3 fw-light" style={{ minHeight: "50px" }}>
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-12 text-center">
                     
                     <Link className="nav-link me-3" to="/">
                     <img
                        src="https://avatars.githubusercontent.com/u/36263004?v=4"
                        alt=""
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: "40px", height: "auto" }}
                    />  
                    <br /> 
                    </Link>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link className="nav-link me-3" to="https://www.linkedin.com/in/antony-injila-30a53410b/">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link className="nav-link me-3" to="https://github.com/AntonyIS">
                                <i className="bi bi-github"></i>
                            </Link>
                            <Link className="nav-link me-3" to="ttps://twitter.com/injila_antony">
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                            <Link className="nav-link me-3" to="/">
                                <i className="bi bi-tiktok"></i>
                            </Link>
                          
                        </div>
                        <br />
                        <p>&copy; 2024 Antony Injila. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
