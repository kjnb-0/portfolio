import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#welcome">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Ta0ex8llz71LtCb8pTOlLj4sgL3bpxjI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
