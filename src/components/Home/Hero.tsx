import React from "react";

const Hero: React.FC = () => {
    const skills = [
        "Go",
        "Python",
        "TypeScript",
        "Kubernetes",
    ];

    return (
        <section className="hero-section" >
            <div className="container-fluid">
                <div className="row" style={{ minHeight: "75vh"}}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-light d-flex align-items-center">
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-6">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/36263004?v=4"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                                <div className="col-6">
                                    <h1 className="display-6 fw-bold">Antony Injila</h1>
                                    <h3 className="fw-light">
                                        With a strong background in <strong>Python</strong>, <strong>Golang</strong>, <strong>TypeScript</strong>, <strong>ReactJS</strong>, <strong>AWS</strong>, <strong>Kubernetes</strong>, <strong>Apigee</strong>, and <strong>Docker</strong>,
                                        I have experience in developing scalable applications. Additionally, I have expertise in CICD processes. I am currently working at Safaricom PLC as a Systems Integrations Engineer.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                        <div className="card" style={{ border: "0px", width: "100%" }}>
                            <div className="card-body">
                                <h1 className="display-6 fw-bold">Skills</h1>
                                <ul className="list-group">
                                    {skills.map((skill) => (
                                        <li className="list-group-item" style={{ border: "0px" }}>
                                            <label className="form-check-label stretched-link">
                                                <h1 className="display-6">{skill}</h1>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
