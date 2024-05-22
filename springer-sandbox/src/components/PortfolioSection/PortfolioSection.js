// PortfolioSection.js
import React from 'react';

const PortfolioSection = () => {
  const projects = [
    { year: 2023, title: 'Project 1', made: 'Springer Studios', built: 'React', link: 'https://brittanychiang.com/archive' },
    { year: 2022, title: 'Project 2', made: 'Springer Studios', built: 'React', link: 'https://brittanychiang.com/archive' },
    { year: 2022, title: 'Project 3', made: 'Springer Studios', built: 'React', link: 'https://brittanychiang.com/archive' },
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
    <div class="portfolio-section">
        <div class="return-div">
            <a class="return-link" href="https://www.richardhaar.com/">Richard Haar</a>
        </div>
        <div class="portfolio-heading">
            <h1>All Projects</h1>
        </div>
      {Object.entries(projectsByYear).map(([year, projects]) => (
        <div key={year}>
          <h2>{year}</h2>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Made at</th>
                <th>Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.title}</td>
                  <td>{project.made}</td>
                  <td>{project.built}</td>
                  <td>{project.link}</td>
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