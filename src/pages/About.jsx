import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-6xl">Github Profile Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p>
        By{" "}
        <strong>
          <a
            href="https://arbaazsumar.com"
            target="_blank"
            className="hover:text-blue-300"
            rel="noreferrer"
          >
            {" "}
            Arbaaz Sumar
          </a>
        </strong>
      </p>
    </>
  );
};

export default About;
