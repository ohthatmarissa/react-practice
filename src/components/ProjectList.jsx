import React from 'react';
import Project from './Project';

var masterProjectList = [
  {
    name: 'MilkBar',
    about: 'Recreation of the Wonderful MilkBar site',
    techUsed: 'HTML, CSS, Angular, Node, JS'
  },
  {
    name: 'Blog Site',
    about: 'A cool web app for creating and reading blogs',
    techUsed: 'HTML, CSS, C#, ASP.NET'
  },
  {
    name: 'Forkify',
    about: 'A beautiful recipe look up web app that uses API calls',
    techUsed: 'HTML, CSS, Advanced JS, API'
  }
  
];


function ProjectList() {
  return (
    <div>
      <h1>VIEW ALL OF THE PROJECTS!</h1>
      <hr/>
      {masterProjectList.map((project, index) => 
        <Project name={project.name}
          about={project.about}
          techUsed={project.techUsed}
          key={index}/>
      )}
    </div>
  );
}
export default ProjectList;
