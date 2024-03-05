import React from "react";
import { Link } from "react-router-dom"
const Hero: React.FC = () => {
    return (
        <section className="hero-section d-flex align-items-center bg-white fw-light" style={{ height: "100vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="display-6">Contact me!</h1>
                        <h3>Get in touch with me via social media or email.</h3>
                        <div className="row mt-3">
                        <div className="col-md-12 text-center">
                            <div className="d-flex align-items-center">
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
                        </div>
                        <br />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <form>
                        <div className="card shadow-lg p-1 mb-5 bg-body-tertiary rounded">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label  className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-floating mb-1">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label >Message</label>
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
