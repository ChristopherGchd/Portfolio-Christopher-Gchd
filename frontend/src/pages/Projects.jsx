import React, { useState, useEffect } from "react";

function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/home`)
      .then((res) => res.json())
      .then((json) => setProjectsList(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p className="mt-4 ml-6 mb-4 font-bold">Portfolio</p>
      <div className="flex flex-col">
        {projectsList &&
          projectsList?.map((projects) => (
            <div className="mb-4">
              <p className="flex justify-center ml-4">{projects.title}</p>
              <p className="flex justify-center ml-4 mb-2">
                {projects.description}
              </p>
              <div className="flex justify-center">
                <img
                  className="w-72"
                  src={projects.picture_url}
                  alt="pictureProject"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
