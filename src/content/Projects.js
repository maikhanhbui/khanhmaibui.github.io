const colors = {
    "pink": "#FBA1D4", 
    "purple": "#E2B4FF", 
    "green": "#c1eaa7", 
    "yellow": "#FFE595",
    "blue": "#80a1b2",
};
  
  export const projects = [
    {
      title: "StuddiBuddi Finder",
      subtitle: "A Study Group Finder App",
      tools: ["Kotlin", "XML", "Android SDK", "Firebase"],
      desc: (
        <p>
          Led a team of five students in the development of a user-centric Android app aiming to provide a platform that connects SFU students for formal study group sessions.
          <br /> <br />
          Integrated Optical Character Recognition (OCR) for extracting texts from images using Firebase’s ML Kit. 
          <br /> <br />
          Implemented a real-time chat function enabling live communication between app users using Firebase Realtime Database for storing and retrieving chat messages.
        </p>
      ),
      github: "https://github.com/khanhmaibui/Studdi-Buddi-Finder",
      color: colors.blue,
      logo: <img src="androidLogo.png" alt=""/>,
      githubLogo: <a href="https://github.com/khanhmaibui/Studdi-Buddi-Finder" target="_blank" rel="noopener noreferrer"> <img
      src="githubLogo.png"
      alt="go to Github repo"
      width={35}
      style={{ marginLeft: '10px' }} /> </a>
    },
    {
      title: "Thief Escape",
      subtitle: "A 2D Arcade-Style Game",
      tools: [
        "Java",
        "JavaFX",
        "Maven",
        "OOP"
      ],
      desc: (
        <p>
          Developed a 2D arcade-style game, incorporating automated algorithmic character movements and adhering to strong OO design principles.
          <br /> <br />
          Designed an intuitive and user-friendly UI with setting menus and game displays that enhance player’s experience.
        </p>
      ),
      github: "https://github.com/khanhmaibui/thiefescape",
      color: colors.blue,
      logo: <img src="javaLogo.png" alt=""/>,
      githubLogo: <a href="https://github.com/khanhmaibui/thiefescape" target="_blank" rel="noopener noreferrer"> <img
      src="githubLogo.png"
      alt="go to Github repo"
      width={35}
      style={{ marginLeft: '10px' }} /> </a>
    },
    {
        title: "Trivia Game",
        subtitle: "A Client-Server-Based Game",
        tools: [
          "Python",
          "PyGame",
          "Socket Programming"
        ],
        desc: (
          <p>
            Collaborated with four students to developed a client-server-based trivia game, integrating remote connections and real-time interactions for multiple players, with seamless transmission and reception of requests.
            <br /> <br />
            Designed and constructed shared objects to provide exclusive access to individual players on a rotational basis through the use of semaphore, ensuring data integrity and fairness.
          </p>
        ),
        github: "https://github.com/khanhmaibui/thiefescape",
        color: colors.blue,
        logo: <img src="pythonLogo.png" alt=""/>,
        githubLogo: <a href="https://github.com/klocquiao/Trivia-Game" target="_blank" rel="noopener noreferrer"> <img
        src="githubLogo.png"
        alt="go to Github repo"
        width={35}
        style={{ marginLeft: '10px' }} /> </a>
      }
];