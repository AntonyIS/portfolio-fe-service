import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="hero-section d-flex align-items-center bg-white" style={{ height: "75vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="display-6 fw-bold">Antony Injila</h1>
                        <h3 className="fw-light">
                            Check out some of my latest Software Engineering Project.
                        </h3>
                        <p className="fw-light">
                            I've worked at start-ups, tech companies and corporates on a range
                            of different projects, including design systems, websites and apps.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card">
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
