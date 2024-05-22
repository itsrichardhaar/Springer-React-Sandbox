// PortfolioSection.js
import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const projects = [
    { year: 2023, title: 'Project 1', description: 'Description of Project 1' },
    { year: 2022, title: 'Project 2', description: 'Description of Project 2' },
    { year: 2022, title: 'Project 3', description: 'Description of Project 3' },
    // Add more projects as needed
  ];

  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(projectsByYear).map(([year, projects]) => (
        <div key={year}>
          <h2>{year}</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;