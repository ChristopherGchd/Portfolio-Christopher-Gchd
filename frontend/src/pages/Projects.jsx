import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`projects`)
      .then((res) => {
        setProjectList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p className="mt-4 ml-6 mb-4 font-bold">Portfolio</p>
      <div className="flex flex-col">
        {projectList &&
          projectList?.map((projects) => (
            <div className="mb-4">
              <p className="flex justify-center ml-4 font-semibold">
                {projects.title}
              </p>
              <p className="flex justify-center ml-4 mb-2">
                {projects.description}
              </p>
              <div className="flex justify-center">
                <Link to={`/projects/${projects.id}`}>
                  <img
                    className="w-72"
                    src={projects.picture_url}
                    alt="pictureProject"
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
