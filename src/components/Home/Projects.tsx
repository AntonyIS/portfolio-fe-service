import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';


type Project = {
    id: string;
    userId: string;
    name: string;
    description: string;
    image: string;
};

const Projets: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        const data = [
            { id: "1", userId: "1", name: "Setting up Go projects in Linux", image: "https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png.webp", description: "It looks like you're trying to define a function named projects" },
            { id: "2", userId: "2", name: "Setting up Go projects in Linux", image: "https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg", description: "It looks like you're trying to define a function named projects" },
            { id: "3", userId: "3", name: "Setting up Go projects in Linux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYtgjPwqw8scZTUj_lxdn-SgyVZUPge479qztSmyTuCXJf3i2MuNyWvZDGPcGyeoLelo&usqp=CAU", description: "It looks like you're trying to define a function named projects" },
        ];
        setProjects(data);
    };

    return (
        <section className="hero-section align-items-center bg-light" style={{ minHeight: "75vh", marginBottom: "1px" }}>
            <div className="container pt-5">
                <div className="row mt-5">
                    {projects.map((project: Project) => (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2" key={project.id}>
                            <div className="card d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                <img
                                    src={project.image}
                                    className="card-img-top"
                                    alt={project.name}
                                    style={{ height: "200px" }}
                                />
                                <div className="card-body">
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5 fw-light">
                    <p>Explore these projects to see my skills in action, and feel free to get in touch for more details!</p>
                    <Link to="/all-projects" className="btn btn-dark">
                        Projects <i className="bi bi-arrow-right"></i>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Projets;
