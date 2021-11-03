import React, { Fragment } from "react";

export const ProjectCard = (props) => {
  return (
    <Fragment>
      <div>
        <figure>
          <a target="_blank" rel="noreferrer" href={props.url}>
            <img src={props.img} alt={props.alt} />
          </a>
        </figure>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        See the repo <a href={props.repo}> here,</a> or click image to see the
        deployed site.
      </div>
    </Fragment>
  );
};


