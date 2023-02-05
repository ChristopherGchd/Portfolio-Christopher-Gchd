import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <p>{project.title}</p>
      </div>
    </div>
  );
}

export default Project;
