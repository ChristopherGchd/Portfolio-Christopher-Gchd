import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

function ProjectAdmin() {
  const [projectList, setProjectList] = useState([]);

  const [project, setProject] = useState({
    title: "",
    description: "",
    picture_url: "",
    github_url: "",
    site_url: "",
  });

  const navigate = useNavigate();

  const handleNewProjet = (position, value) => {
    const newProject = { ...project };
    newProject[position] = value;
    setProject(newProject);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    apiConnexion
      .post(`/projectadmin`, {
        ...project,
      })
      .then((res) => {
        setProjectList(res.data);
        setTimeout(() => navigate("/projectadmin"), 3000);
      })
      .catch((err) => console.error(err));
  };

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
      <h1 className="flex justify-center mt-4 mb-4 font-bold">
        Portfolio Admin
      </h1>
      <form onSubmit={handleAddProject}>
        <div>
          <h2 className="flex justify-center font-semibold">Add Project</h2>
        </div>
        <div className="mb-2">
          <div className="ml-6">
            <p className="pb-2 text-xl">Title</p>
            <input
              className="px-2 border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
              type="text"
              name="title"
              required="required"
              placeholder="Title"
              value={project.title}
              onChange={(e) => handleNewProjet(e.target.name, e.target.value)}
            />
          </div>
          <div className="ml-6">
            <p className="pb-2 text-xl">Description</p>
            <input
              className="px-2 border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
              type="text"
              name="description"
              required="required"
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleNewProjet(e.target.name, e.target.value)}
            />
          </div>
          <div className="ml-6">
            <p className="pb-2 text-xl">Picture</p>
            <input
              className="px-2 border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
              type="text"
              name="picture_url"
              required="required"
              placeholder="Picture"
              value={project.picture_url}
              onChange={(e) => handleNewProjet(e.target.name, e.target.value)}
            />
          </div>
          <div className="ml-6">
            <p className="pb-2 text-xl">Github</p>
            <input
              className="px-2 border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
              type="text"
              name="github_url"
              required="required"
              placeholder="Github"
              value={project.github_url}
              onChange={(e) => handleNewProjet(e.target.name, e.target.value)}
            />
          </div>
          <div className="ml-6">
            <p className="pb-2 text-xl">Site</p>
            <input
              className="px-2 border-2 w-9/10 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-2 text-lg"
              type="text"
              name="site_url"
              required="required"
              placeholder="Site"
              value={project.site_url}
              onChange={(e) => handleNewProjet(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#94a3b8] rounded-xl px-5 py-2 text-ml font-semibold mr-2"
          >
            Valider
          </button>
        </div>
      </form>
      <div className="flex flex-col mb-32">
        {projectList &&
          projectList.map((projects) => (
            <div className="mb-4">
              <button
                className="ml-8"
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
                <p className="flex justify-center font-semibold">
                  {projects.github_url}
                </p>
                <p className="flex justify-center font-semibold">
                  {projects.site_url}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectAdmin;
