const projects = [
  {
    title: 'Bozja Buddy',
    image: './images/pf_bozjabuddy.webp',
    description: "An open-source gaming overlay that provides game data and mind-mapping tools to over 200,000 users." +
                  "",
    tools: ['C#', 'C++', 'SQLite', 'ImGUI'],
    github: 'https://github.com/kaleidocli/BozjaBuddy',
    link: 'https://github.com/kaleidocli/BozjaBuddy',
  },
  {
    title: 'Fabflix',
    image: './images/pf_fabflix.webp',
    description: "Class project - A scalable movie web application allowing users to find, filter, and purchase movies, " +
        "all supported by a microservice architecture on AWS with Docker and Kubernetes and a clustered database system " +
        "using MySQL and Redis.",
    tools: ['Java', 'HTML 5', 'Javascript', 'CSS 3', 'Apache Tomcat', 'Docker', 'AWS', 'Kubernetes', 'MySQL'],
    github: '',
    link: 'https://www.youtube.com/watch?v=oliR0aZ472k',
  },
  {
    title: 'Snake Game AI',
    image: './images/pf_aisnake.webp',
    description: "Class project - An AI agent using Reinforcement Learning (A2C and PPO algorithms) " +
        "to master the classic Snake game. The agent analyzes the game state to make optimal moves, " +
        "maximizing its score under both standard and challenging conditions.",
    tools: ['Python', 'C++', 'Stable-Baseline3', 'TensorFlow', 'Gymnasium', 'Jupyter Lab'],
    github: 'https://github.com/kaleidocli/cs175-group10',
    link: 'https://kaleidocli.github.io/cs175-group10/final.html',
  }
  
];

export default projects;
