import React from "react"
import { Link } from "react-router-dom"

const Header:React.FC =() => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fw-bold" data-bs-theme="dark">
            <div className="container">
                <Link 
                    className="navbar-brand" 
                    to={`/`}
                    >
                    <img
                        src="https://avatars.githubusercontent.com/u/36263004?v=4"
                        alt=""
                        className="img-fluid rounded-circle m-1"
                        style={{ maxWidth: "40px", height: "auto" }}
                    />    
                    <span className="m-1">
                        Antony Injila
                    </span>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                        </li>
                    </ul>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`/about`}>
                                    About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`/projects`}>
                                    Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`/contact`}>
                                    Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`https://www.linkedin.com/in/antony-injila-30a53410b/`}
                                >
                               <i className="bi bi-linkedin"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`https://github.com/AntonyIS`}
                                >
                                <i className="bi bi-github"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`https://twitter.com/injila_antony`}
                                >
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to={`/`}
                                >
                                <i className="bi bi-tiktok"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header