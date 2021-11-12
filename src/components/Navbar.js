import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header>
        {/* cf/hide on small for mobile view - links will disappear */}
        <nav className="cf">
          <ul className="cf">
            <li className="hide-on-small">
              <a href="#welcome">About Me</a>
            </li>
            <li className="hide-on-small">
              <a href="#projects">Projects</a>
            </li>
            <li className="hide-on-small">
              <a href="#contact">Contact Me</a>
            </li>
            {/* <li className="hide-on-small">
              <a
                href="https://drive.google.com/file/d/1Ta0ex8llz71LtCb8pTOlLj4sgL3bpxjI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};
