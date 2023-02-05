import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

function ProjectAdmin() {
  const [projectList, setProjectList] = useState([]);

  const getProject = () => {
    apiConnexion
      .get(`projectadmin`)
      .then((res) => {
        setProjectList(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProject();
  }, []);

  const deleteProject = (id) => {
    apiConnexion
      .delete(`${import.meta.env.VITE_BACKEND_URL}projectadmin/${id}`)
      .then(() => {
        getProject();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className="mt-4 ml-6 mb-4 font-bold">Portfolio Admin</p>
      <div className="flex flex-col">
        {projectList &&
          projectList?.map((projects) => (
            <div className="mb-4">
              <button
                className=""
                type="button"
                onClick={() => deleteProject(projects.id)}
              >
                X
              </button>
              <p className="flex justify-center ml-4 font-semibold">
                {projects.title}
              </p>
              <p className="flex justify-center ml-4 mb-2">
                {projects.description}
              </p>
              <div className="flex justify-center">
                <Link to="/projectadmin">
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

export default ProjectAdmin;
