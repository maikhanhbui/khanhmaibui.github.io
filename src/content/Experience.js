const colors = {
    "pink": "#FBA1D4", 
    "purple": "#E2B4FF", 
    "green": "#ADE989", 
    "yellow": "#FFE595",
    "blue": "#b4cdff",
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
            Developed and maintained the Microsoft SQL driver aimed at offering database connectivity for Django.
          </li>
          <li>
            Implemented new features and addressed identified issues using Python, SQL, and Azure DevOps.
          </li>
          <li>
            In charge of deployment activities for new releases using Azure Pipelines, ensuring efficient and error-free deployment of driver updates, enhancements and features.
          </li>
          <li>
            Managed user inquires and concerns on the MSSQL driver repository through GitHub, including issue reproduction and resolution.
          </li>
        </ul>),
      logo: insightLogo,
      bgColor: colors.green,
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
            Generated automated data visualization scripts for various visualizing tools such as heatmaps, bar plots and volcano plots from supplied datasets, utilizing R packages including GGplot2 and plotly.
          </li>
          <li>
            Conducted data processing and analyzing by employing statistical methods such as T-tests and ANOVA-tests to extract valuable insights from the data.
          </li>
        </ul>
      ),
      logo: sfuLogo,
      bgColor: colors.purple,
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
      bgColor: colors.yellow,
    },
  ];