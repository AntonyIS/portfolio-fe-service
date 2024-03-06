import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="hero-section d-flex align-items-center bg-light" style={{ minHeight: "100vh" }}>
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1 className="display-6 fw-bold">Antony Injila</h1>
                    <h3 className="fw-light">Experienced Software Engineer</h3>
                    <p className="fw-light">
                        With a strong background in <strong>Python</strong>, <strong>Golang</strong>, <strong>TypeScript</strong>, <strong>ReactJS</strong>, <strong>AWS</strong>, <strong>Kubernetes</strong>, <strong>Apigee</strong>, and <strong>Docker</strong>,
                        I have experience in developing scalable applications. Additionally, I have expertise in CICD processes. I am currently working at Safaricom PLC as a Systems Integrations Engineer.
                    </p>
                    <img 
                        src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                        alt=""
                        className="img-fluid" 
                        style={{ maxWidth: "400px", height: "auto" }}
                    />
                </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="card-header">Goroutines</div>
                            <div className="card-body">
                                <p className="card-text">
                                    To run a goroutine in Golang, you can use the `go` keyword followed by a function call. Here's an example:
                                </p>
                                <pre>
                                    <code>
                                        {`package main

import (
    "fmt"
    "time"
)

func main() {
    go sayHello()
    time.Sleep(1 * time.Second)
}

func sayHello() {
    fmt.Println("Hello, Goroutine!")
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
