import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <a
        className="text-white p-2"
        href="https://www.linkedin.com/in/rajdeep-datta-18716b16b/"
        target="_blank"
      >
        <i className="fab fa-linkedin fa-lg" /> Made by Rajdeep{" "}
      </a>
      &copy; {new Date().getFullYear()} Social
    </footer>
  );
}
