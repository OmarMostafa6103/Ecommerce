import React from "react";
import { Link } from "react-router-dom";

export default function SocialMedia({ className }) {
  return (
    <>
      <Link to="https://github.com/OmarMostafa6103" target="_blank">
        <i
          className={`dark:text-white text-black ${className} fa-brands fa-github`}
        ></i>
      </Link>
      <Link to="https://www.linkedin.com/in/omar-mostafa-ramadan-17aa762b6/">
        <i
          className={`fa-brands fa-linkedin dark:text-white text-black ${className}`}
        ></i>
      </Link>
    </>
  );
}
