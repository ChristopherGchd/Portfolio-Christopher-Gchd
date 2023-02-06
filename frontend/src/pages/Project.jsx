import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LogoSite from "@assets/lien site.jpg";
import apiConnexion from "../services/apiConnexion";

function Project() {
  const [project, setProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div>
        <p className="flex justify-center ml-4 font-semibold mt-4">
          {project.title}
        </p>
      </div>
      <div>
        <p className="flex justify-center ml-4 mb-2 mt-2">
          {project.description}
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-72" src={project.picture_url} alt="pictureProject" />
      </div>
      <div className="flex justify-center">
        <a href={project.site_url} target="_blank" rel="noreferrer">
          <a href={project.github_url} target="_blank" rel="noreferrer">
            <img className="w-12" src={LogoSite} alt="pictureProject" />
          </a>
        </a>
      </div>
    </div>
  );
}

export default Project;
