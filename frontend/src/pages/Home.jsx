import React, { useState, useEffect } from "react";

import Logo from "@assets/logo-Chris.svg";

function Home() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/home`)
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
      <div className="mt-8 ml-6">
        <p>My Portfolio</p>
      </div>
      <div>
        {projectsList && projectsList.map((projects) => ({ projects }))}
      </div>
    </div>
  );
}

export default Home;
