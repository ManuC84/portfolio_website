export const projects = [
  {
    title: "Freelycomment",
    description:
      "This is my pet project still in development and to be released as a full product when finished. Currently it's being refactored to use redux toolkit functionality to the fullest and to better normalize data. Styling wise it has almost no work done as I've focused mainly on functionality so far but eventually I'll make sure it looks really good. It features real-time notifications with socket-io(only custom users not google oAuth yet). You can use any url to create a post and then comment and like other comments!",
    image: "/images/freely-comment-thumb.png",
    tags: ["MongoDb", "Express", "React", "Redux"],
    source: "https://github.com/ManuC84/frontend",
    visit: "https://tender-fermat-3d5fca.netlify.app/",
    id: 0,
  },
  {
    title: "Disney Plus Clone",
    description:
      "This is a project I made mainly to focus on front-end and UI/UX skills. It also helped me learn how to use Firebase database and auth. It doesn't feature much functionality so it's more of a font-end demo. You can only login and then enjoy the cool styling and effects.",
    image: "/images/disney-plus-thumb.png",
    tags: ["React", "Firebase", "Styled-Components"],
    source: "https://github.com/ManuC84/youtube-disney-clone",
    visit: "https://disneyplus-clone-d00ab.web.app/",
    id: 1,
  },
  {
    title: "Socket-Io Chat-App",
    description:
      "This is a project I made in order to learn to use socket-io which is used for real-time notifications in my main project Freelycomment. It's made with React and the server with Express.js. It's fully functional and can be tested.",
    image: "/images/chat-app-demo.png",
    tags: ["React", "Socket-Io", "Express"],
    source: "https://github.com/ManuC84/client",
    visit: "https://xenodochial-bhabha-f513d7.netlify.app/",
    id: 2,
  },
  {
    title: "Backend Solutions",
    description:
      "Backend Solutions is a fictional company project meant for me to learn Laravel. I had just taken a full PHP course and wanted to learn one of the hottest PHP frameworks. Since Then I've focused more on Javascript it must be admitted, however I'm really itching to go back to develop in Laravel as it's a super cool framework and I enjoy it a lot. It features persistent full CRUD functionality with MySql. The styling was done with Bootstrap 4",
    image: "/images/back-end-solutions-thumb.png",
    tags: ["Laravel", "Bootstrap", "MySql"],
    source: "https://github.com/ManuC84/backend-solutions",
    visit: "https://shielded-plains-40931.herokuapp.com/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
