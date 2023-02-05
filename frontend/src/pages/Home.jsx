import React, { useState, useEffect } from "react";
import Logo from "@assets/logo-Chris.svg";

function Home() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects`)
      .then((res) => res.json())
      .then((json) => setProjectsList(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <img className="mt-6 w-40" src={Logo} alt="logo" />
      </div>
      <div className="mt-6">
        <p className="flex justify-center">Hello</p>
        <p className="flex justify-center">I'm Chris</p>
        <p className="flex justify-center">Web Developper</p>
      </div>
      <div className="mt-6">
        <h2 className="ml-8 mb-2 font-bold">Me !</h2>
        <p className="ml-4">
          Hello, I'm Chris, web developer, having followed an intensive training
          at the Wild Code School, I use languages and tools such as React,
          JavaScript, MySQL, Express, Postman, Nodejs, HTML5, CSS3...
        </p>
      </div>
      <div className="mt-6 ml-6 font-bold">
        <p className="mb-2">Portfolio</p>
      </div>
      <div className="flex flex-col">
        {projectsList &&
          projectsList?.map((projects) => (
            <div className="mb-4">
              <p className="flex justify-center ml-4 mb-2 font-semibold">
                {projects.title}
              </p>
              <div className="flex justify-center">
                <a href={projects.site_url} target="_blank" rel="noreferrer">
                  <a
                    href={projects.github_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-72"
                      src={projects.picture_url}
                      alt="pictureProject"
                    />
                  </a>
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-2">
        <h2 className="ml-8 mb-2 font-bold">Contact</h2>
        <div className="flex justify-center">
          <input
            className="px-2 border-2 w-3/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
            type="text"
            name="user_firstname"
            required="required"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="px-2 border-2 w-3/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
            type="text"
            name="user_email"
            required="required"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="px-2 border-2 w-3/4 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
            type="text"
            name="user_firstname"
            required="required"
            placeholder="Subject"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="px-2 border-2 w-3/4 h-60 rounded-lg border-[#e7ebec] outline-[#ced7da] mb-6 text-lg"
            type="text"
            name="message"
            required="required"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
