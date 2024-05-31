// PortfolioSection.js
// PortfolioSection.js
import React from 'react';
import MouseTracker from '../MouseTracker/MouseTracker';

const PortfolioSection = () => {
  const projects = [
    { year: 2024, title: 'Carteret Community College', made: 'Springer Studios', built: 'PHP', link: 'https://carteret.springerstudios.net' },
    { year: 2024, title: 'Vance-Granville Community College', made: 'Springer Studios', built: 'PHP', link: 'https://www.vgcc.edu' },
    { year: 2024, title: 'Cooks Mill Whiskey', made: 'Springer Studios', built: 'PHP', link: 'https://cooksmill-whiskey.com' },
    { year: 2023, title: 'Cameron Art Museum', made: 'Springer Studios', built: 'PHP', link: 'https://cameronartmuseum.org' },
    { year: 2023, title: 'Iredell Ready', made: 'Springer Studios', built: 'PHP', link: 'https://iredellready.com' },
    { year: 2023, title: 'Honeycutt Construction Services', made: 'Springer Studios', built: 'PHP', link: 'https://honeycuttcorp.com' },
    { year: 2023, title: 'Southeastern Community College', made: 'Springer Studios', built: 'PHP', link: 'https://www.sccnc.edu' },
    { year: 2023, title: 'Cameron Art Museum', made: 'Springer Studios', built: 'PHP', link: 'https://cameronartmuseum.org' },
    { year: 2023, title: 'Studsvik', made: 'Springer Studios', built: 'PHP', link: 'https://www.studsvik.com/' },
    { year: 2023, title: 'Durham Charter', made: 'Springer Studios', built: 'PHP', link: 'https://www.durhamcharter.org' },
    { year: 2022, title: 'Bladen Community College', made: 'Springer Studios', built: 'PHP', link: 'https://www.bladencc.edu' },
    { year: 2022, title: 'James Sprunt Community College', made: 'Springer Studios', built: 'PHP', link: 'https://jamessprunt.edu' },
    { year: 2022, title: 'Cape Fear Community College', made: 'Springer Studios', built: 'PHP', link: 'https://cfcc.edu/' },
    { year: 2022, title: 'Trask Land Company', made: 'Springer Studios', built: 'PHP', link: 'https://trasklandco.com' },
    { year: 2022, title: 'Thomas Construction Group', made: 'Springer Studios', built: 'PHP', link: 'https://thomasconstructiongroup.com' },
    { year: 2022, title: 'McCord Contactors Inc', made: 'HighClick Media', built: 'PHP', link: 'https://mccordcontractors.com' },
    { year: 2022, title: 'SliverCare', made: 'HighClick Media', built: 'PHP', link: 'https://silvercareweb.com' },
    { year: 2022, title: 'Edge Dental Solutions', made: 'HighClick Media', built: 'PHP', link: 'https://edgedentalsolutions.com' },
    { year: 2021, title: 'TD Goodwin', made: 'HighClick Media', built: 'PHP', link: 'https://www.tdgoodwin.com' },
    { year: 2020, title: 'EncounterWorks EHR', made: 'HighClick Media', built: 'PHP', link: 'https://encounterworks.com/' },
    { year: 2018, title: 'Hidden Talents', made: 'UNC Chapel Hill Bootcamp', built: 'React', link: 'https://github.com/itsrichardhaar/Hidden-Talents' },
    { year: 2018, title: 'Know Your Vote', made: 'UNC Chapel Hill Bootcamp', built: 'React', link: 'https://github.com/merinogeospatial/know-your-vote' },
    { year: 2018, title: 'HiJack', made: 'UNC Chapel Hill Bootcamp', built: 'React', link: 'https://github.com/itsrichardhaar/HiJack/tree/master/Alice' },
    { year: 2018, title: 'Trivia Game', made: 'UNC Chapel Hill Bootcamp', built: 'Javascript', link: 'https://github.com/itsrichardhaar/Homework-5/' },
    { year: 2018, title: 'Bamazon App', made: 'UNC Chapel Hill Bootcamp', built: 'Node.js', link: 'https://github.com/itsrichardhaar/bamazon-app' },
    { year: 2018, title: 'Liri Node App', made: 'UNC Chapel Hill Bootcamp', built: 'Node.js', link: 'https://github.com/itsrichardhaar/liri-node-app' },
    { year: 2018, title: 'Mongo Scraper', made: 'UNC Chapel Hill Bootcamp', built: 'Javascript', link: 'https://github.com/itsrichardhaar/mongo-scraper' },
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
    <MouseTracker>
    <div className="portfolio-section">
        <div className="return-div">
            <a className="return-link" href="https://www.richardhaar.com/">Back to Home</a>
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
    </MouseTracker>
  );
};

export default PortfolioSection;