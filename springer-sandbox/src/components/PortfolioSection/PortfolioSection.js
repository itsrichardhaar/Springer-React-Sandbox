// PortfolioSection.js
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

  // Sort the years in descending order
  const sortedProjectsByYear = Object.entries(projectsByYear).sort(([yearA], [yearB]) => yearB - yearA);

  return (
    <div className="portfolio-section">
        <div className="return-div">
            <a className="return-link" href="https://www.richardhaar.com/">Richard Haar</a>
        </div>
        <div className="portfolio-heading">
            <h1>All Projects</h1>
        </div>
      {sortedProjectsByYear.map(([year, projects]) => (
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
                  <td><a href={project.link}>{project.link}</a></td>
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