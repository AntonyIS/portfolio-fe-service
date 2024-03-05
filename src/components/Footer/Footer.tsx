import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-light py-3 fw-light" style={{ minHeight: "50px" }}>
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <Link className="nav-link me-3" to="/">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link className="nav-link me-3" to="/">
                                <i className="bi bi-github"></i>
                            </Link>
                            <Link className="nav-link me-3" to="/">
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
