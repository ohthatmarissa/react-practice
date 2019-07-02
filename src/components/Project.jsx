import React from 'react';
import PropTypes from 'prop-types';

function Project(props){

  return (
    <div>
      <style jsx global>{`
            div.projectonly {
                background-color: pink;
            }
        `}</style>
      <div className="projectonly">
        <h3>{props.name}</h3>
        <h3>{props.about}</h3>
        <p><em>{props.techUsed}</em></p>
        <br></br>
        <hr/>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  techUsed: PropTypes.string
};

export default Project;