import React from "react";

export const Header = () => {
  return (
    <div className="container">
      <main className="welcome-section">
        <h2>Welcome to my portfolio!</h2>
        <div className="background-trans"> 
        <h3>
          Hi<span className="wave" role="img"></span>I'm Krista.
        </h3>
        <h4>I'm glad you're here.</h4>
        <p>
          I'm a UW student getting my full stack web development certification
          and having fun learning how to build useful, beautiful things on the
          internet.
        </p>
        </div>
      </main>
    </div>
  );
};
