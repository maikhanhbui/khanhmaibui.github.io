const colors = {
    "pink": "#FED4E7",
    "purple": "#E2B4FF", 
    "green": "#c1eaa7", 
    "yellow": "#FFE595",
    "blue": "#80a1b2",
  }
  
  // LOGOS
  const insightLogo = <img src="insightLogo.png" alt = ""/>;
  const sfuLogo = <img src="sfuLogo.png" alt = ""/>;
  const rakunaLogo = <img src="rakunaLogo.jpeg" alt = ""/>;
  
  // EXPERIENCE
  
  export const experience = [
    {
      role: "Junior Software Developer Co-op",
      company: "Magnitude Simba, Insightsoftware",
      time: "Sept 2022 - Aug 2023",
      tools: [
        "Python",
        "MSSQL",
        "Django",
        "Azure DevOps"
      ],
      desc:(
         <ul>
          <li>
            Developed and maintained the Microsoft SQL Server - Django driver by implementing and providing support for over 15 new driver features using Python, SQL queries, and Git.
          </li>
          <li>
            Resolved over 80 test cases and issues that arise in the production of the driver, ensuring 3 on-time deployments of new releases.
          </li>
          <li>
            Performed deployment activities for 2 releases using Azure Pipelines, including participating in security reviews and maintaining documentation, ensuring an efficient and error-free release. 
          </li>
          <li>
            Actively managed over 100 user inquiries and concerns on the MS SQL driver repository through GitHub, including issue reproduction and resolution.
          </li>
        </ul>),
      logo: insightLogo,
      bgColor: colors.blue,
    },
    {
      role: "Data Analyst",
      company: "SUN Lab, Simon Fraser University",
      time: "Sept 2021 - Apr 2022",
      tools: [
        "Python",
        "R",
        "Data Visualization",
      ],
      desc: (
        <ul>
          <li>
            Eliminated manual processes by 5+ hours by developing automated data visualization scripts for various visualizing tools from CSV files in R, utilizing packages such as GGplot2 and plotly.
          </li>
          <li>
            Reduced time spent on data processing and analyzing by 2 hours by building various statistical methods into automated R scripts to extract valuable insights from the data.
          </li>
        </ul>
      ),
      logo: sfuLogo,
      bgColor: colors.blue,
    },
    {
      role: "Software Engineer Intern",
      company: "Rakuna",
      time: "May - June 2021",
      tools: [
        "Ruby",
        "Ruby on Rails",
        "Trello",
        "Testing"
      ],
      desc: (
        <ul>
          <li>
          Collaborated with the development team to conduct comprehensive testing on newly created products, contributing to the accomplishment of a significant milestone – a successful release of three products within a 100-day timeframe.
          </li>
          <li>
          Demonstrated effective communication and organizational skills by consistently delivering detailed reports through platforms like Trello, ensuring clarity and cohesion within the team.
          </li>
          <li>
          Participated in daily meetings, offering clear progress updates and insights into upcoming goals, while also addressing and resolving identified needs and issues.
          </li>
        </ul>
      ),
      logo: rakunaLogo,
      bgColor: colors.blue,
    },
  ];