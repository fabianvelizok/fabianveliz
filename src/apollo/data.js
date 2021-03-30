import { HOST } from "Utils/constants";

const data = {
  bio: {
    name: 'Fabián Horacio Veliz',
    tagline: 'FrontEnd Developer',
    full_profile: `
      <p>Professional Web UI Developer with 8+ years of experience coding web applications, focusing on the front end side using technologies like: HTML5, CSS3, Javascript, React and Responsive Design, among others.</p>
      <p>I am ready to face new challenges in my career.</p>
      <p>Interested? Check out my <a href="/resume">Resume</a>.</p>
    `,
    short_profile:
      '<p>Professional Web UI Developer with 8+ years of experience coding web applications, focusing on the front end side using technologies like: HTML5, CSS3, Javascript, React, Webpack, Git and Responsive Design, among others.</p><p>Familiar with fast-paced environments and agile methodology.</p>',
    avatar: `${HOST}/static/me.jpeg`,
    socialLinks: [
      {
        key: 'website',
        label: 'Website',
        link: 'https://fabianveliz.herokuapp.com',
        target: '_blank',
      },
      {
        key: 'linkedin',
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/velizfabianhoracio/',
        target: '_blank',
      },
      {
        key: 'github',
        label: 'Github',
        link: 'https://github.com/fabianvelizok',
        target: '_blank',
      },
      {
        key: 'email',
        label: 'Email',
        link: 'mailto:velizfabianhoracio@gmail.com',
        target: '_self',
      },
    ],
  },
  skills: [
    'HTML5',
    'CSS3',
    'Javascript',
    'React',
    'React ecosystem',
    'AngularJS/Angular',
    'Webpack',
    'Node.js',
    'Next.js',
    'Git',
    'SEO',
    'Responsive Design',
    'Sass',
    'Agile'
  ],
  courses: [
    {
      name: 'Advanced JS',
      link: 'https://www.udemy.com/certificate/UC-7fbbe4da-83a3-4ea8-9af3-50cab03b1a77/',
    },
    {
      name: 'Junior to Senior',
      link: 'https://www.udemy.com/certificate/UC-c896ee6c-5d02-4ab0-9f63-d3f9a4ad696b/',
    },
    {
      name: 'Design systems for devs',
      link: 'https://platzi.com/@fabianvelizok/curso/1422-diseno-desarrolladores/diploma/detalle/',
    },
    {
      name: 'Git and Github',
      link: 'https://platzi.com/@fabianvelizok/curso/1170-git-github/diploma/detalle/',
    },
    {
      name: 'React router',
      link: 'https://platzi.com/@fabianvelizok/curso/1342-react-router/diploma/detalle/',
    },
    {
      name: 'Responsive design',
      link: 'https://platzi.com/@fabianvelizok/curso/1362-responsive-design/diploma/detalle/',
    },
    {
      name: 'Sass',
      link: 'https://globant.acamica.com/cert/30e7dc293f2fce99bc49d307841eee11876cc1ad',
    },
    {
      name: 'WPO',
      link: 'https://platzi.com/@fabianvelizok/curso/1390-optimizacion-web/diploma/detalle/',
    },
    {
      name: 'Web animations',
      link: 'https://platzi.com/@fabianvelizok/curso/1103-animaciones-web/diploma/detalle/',
    },
    {
      name: 'Web development',
      link: 'https://platzi.com/clases/html5-css3/',
    },
    {
      name: 'Jest',
      link: 'https://platzi.com/@fabianvelizok/curso/1357-js-jest/diploma/detalle/',
    },
    {
      name: 'CSS Grid Layout',
      link: 'https://platzi.com/@fabianvelizok/curso/1229-css-grid-layout/diploma/detalle/',
    },
    {
      name: 'Next.js',
      link: 'https://platzi.com/@fabianvelizok/curso/1311-next-js/diploma/detalle/',
    },
    {
      name: 'PostCSS',
      link: 'https://platzi.com/@fabianvelizok/curso/1242-postcss/diploma/detalle/',
    },
    {
      name: 'jQuery to Javascript',
      link: 'https://platzi.com/@fabianvelizok/curso/1316-jquery-js/diploma/detalle/',
    },
    {
      name: 'Advanced Node.js',
      link: 'https://platzi.com/@fabianvelizok/curso/nodejs/diploma/',
    },
    {
      name: 'Professional Redux',
      link: 'https://platzi.com/@fabianvelizok/curso/redux/diploma/',
    },
    {
      name: 'React',
      link: 'https://platzi.com/@fabianvelizok/curso/react/diploma/',
    },
    {
      name: 'GraphQL',
      link: 'https://platzi.com/@fabianvelizok/curso/graphql/diploma/',
    },
    {
      name: 'JavaScript Design Patterns',
      link: 'https://app.pluralsight.com/profile/fabianvelizok',
    },
    {
      name: 'MEAN',
      link: 'https://platzi.com/@fabianvelizok/curso/mean/diploma/',
    },
    {
      name: 'Angular 4',
      link: 'https://platzi.com/@fabianvelizok/curso/angular/diploma/',
    },
    {
      name: 'Definitive Javascript',
      link: 'https://platzi.com/@fabianvelizok/curso/javascript-pro-2016/diploma/',
    },
    {
      name: 'Webpack',
      link: 'https://platzi.com/@fabianvelizok/curso/webpack/diploma/',
    },
    {
      name: 'Professional Vue.js',
      link: 'https://platzi.com/@fabianvelizok/curso/vuejs-profesional/diploma/',
    },
    {
      name: 'Basic Vue.js',
      link: 'https://platzi.com/@fabianvelizok/curso/vuejs/diploma/',
    },
    {
      name: 'Bitcoin and Blockchain',
      link: 'https://platzi.com/@fabianvelizok/curso/bitcoin/diploma/',
    },
    {
      name: 'Fundamentals of javascript',
      link: 'https://platzi.com/@fabianvelizok/curso/fundamentos-javascript/diploma/',
    },
    {
      name: 'Harnessing the power of AI',
      link: 'https://www.acamica.com/cert/03955779166f6a34b9ae026f0b77747a6f048efd',
    },
    {
      name: 'Introduction to React.js',
      link: 'https://www.acamica.com/cert/4e8721e5138a0b616abb2001f2cc7b5ac22bb313',
    },
    {
      name: 'NodeJS, beginning',
      link: 'https://www.acamica.com/cert/5735a729db40587ebbccc37af1020c0b5af1f266',
    },
    {
      name: 'Advanced CSS',
      link: 'https://www.acamica.com/cert/ca6a5186c2309c03b63117dd5ffd2a9396528019',
    },
    {
      name: 'Animations in CSS',
      link: 'https://www.acamica.com/cert/67f58906bc9e6d1d127b27f1f8dc28e8e5f6e12c',
    },
    {
      name: 'Application design',
      link: 'https://www.acamica.com/cert/4eee7b07f622eda5af94a56534ab019a59e74766',
    },
    {
      name: 'Asynchronism in Javascript',
      link: 'https://www.acamica.com/cert/fa0ebe4a6e0f227faf126d36bb73fc295721ac37',
    },
    {
      name: 'Bootstrap 4',
      link: 'https://www.udemy.com/certificate/UC-M99YGNGC/',
    },
    {
      name: 'CSS',
      link: 'https://www.acamica.com/cert/c9379d6ecb528505fd8d84cc63e929137654637a',
    },
    {
      name: 'Debugging',
      link: 'https://www.acamica.com/cert/9ed0521c905c66b7b2a66d130a94ab4b8ec04e65',
    },
    {
      name: 'ES6 Foundations',
      link: 'https://www.acamica.com/cert/26784989584d0d3b65dceb409be24300691d5267',
    },
    {
      name: 'Express',
      link: 'https://www.acamica.com/cert/4732e914054372e7ae5d756f35b55a2b31ee4e3e',
    },
    {
      name: 'Functional programming',
      link: 'https://www.acamica.com/cert/0d980bd841404ecca7b7d88fd2ce2b3f7ed67b7a',
    },
    {
      name: 'Fundamentals of programming',
      link: 'https://www.acamica.com/cert/4764b963fd49f57cf1bba14cd48f7080a2807e4e',
    },
    {
      name: 'Git',
      link: 'https://www.acamica.com/cert/38193c8837ee89db6c6201649b06e5770eadccb9',
    },
    {
      name: 'Gulp',
      link: 'https://www.acamica.com/cert/b51545ee8f06f49dc6e3325a0f0542e790fe6555',
    },
    {
      name: 'HTML',
      link: 'https://www.acamica.com/cert/12b3bcd5945785426a471fb89a701e6246f79e9b',
    },
    {
      name: 'HTML5',
      link: 'https://www.acamica.com/cert/e5993b76ee6c8890d59d351e03f75df518b7dad4',
    },
    {
      name: 'Heroku',
      link: 'https://www.acamica.com/cert/2cfaabfd2c6b148cef541431fcfaadf890ecda1c',
    },
    {
      name: 'Intermediate CSS',
      link: 'https://www.acamica.com/cert/db1fac9c85527842c15e8ee36d8687ac8c8a63eb',
    },
    {
      name: 'Introduction to Docker',
      link: 'https://www.acamica.com/cert/9b076a64c0e071213ced81bac65bea6cf8ff4157',
    },
    {
      name: 'Intro to web development',
      link: 'https://www.acamica.com/cert/5100e3332c53b9cc4a0b3bc8162474809495b607',
    },
    {
      name: 'MongoDB',
      link: 'https://www.acamica.com/cert/d67e3916ae09f742fd653ab3f46d7a3e5be17afc',
    },
    {
      name: 'OOP',
      link: 'https://www.acamica.com/cert/76bda37b68e928550b551cefe8913a90752a3646',
    },
    {
      name: 'Prototypes and classes in JS',
      link: 'https://www.acamica.com/cert/3f7cbebe4542b7efc5d7dd0fbf2d3a3fc597efd2',
    },
    {
      name: 'Responsive Design',
      link: 'https://www.acamica.com/cert/81d7f1a0b7d4a8ff947f46d45f54641ef7c733e6',
    },
    {
      name: 'Ruby On Rails',
      link: '',
    },
    {
      name: 'Shaping up with Angular.js',
      link: 'https://www.codeschool.com/users/1201704',
    },
    {
      name: 'TypeScript',
      link: 'https://www.udemy.com/certificate/UC-2TS53WLD/',
    },
    {
      name: 'Web Tooling & Automation',
      link: '',
    },
    {
      name: 'jQuery',
      link: 'https://www.acamica.com/cert/5c60d00551253c74823d3bbedc72c576b9e71ef9',
    },
  ],
  workExperience: [
    {
      from: 'Dec 2020',
      to: 'Present',
      title: 'Freelance Frontend Developer',
      description: `
        <p>Translating mockups and designs into rich user interfaces using technologies like React for building client side applications, Ruby on Rails and Python for server side and REST APIs to speak each other.</p>
      `,
      logo: `${HOST}/static/fv-logo.png`,
      projects: [
        { name: "Tucuman.gob.ar", link: "https://www.tucuman.gob.ar" },
        { name: "Gaming Blog", link: null },
        { name: "Prostock", link: "http://prostock.herokuapp.com" },
      ],
      technologies: ['HTML5', 'CSS3', 'Javascript', 'React', 'Web3', 'Blockchain', 'Python', 'REST', 'Next.js', 'Hooks', 'Webpack', 'CSS Modules', 'SSR', 'Ruby on Rails', 'BEM', 'Responsive Design', 'Git', 'ESLint']
    },
    {
      from: 'Nov 2019',
      to: 'Dec 2020',
      title: 'Frontend Engineer Lead at HBO (Globant Contractor)',
      description: `
        <p>Responsability includes collaborating with general Team Leader to handle frontend team by helping with project ramp-up and mentoring new coworkers, defining frontend architecture and improvements, making code reviews and improving quality code, estimating tasks and assigning to the right person, documenting processes and key features and participating in meetings with clients to help to build clean user interfaces, improve interactions and experiences.</p>
      `,
      logo: `${HOST}/static/hbo-logo.jpeg`,
      projects: [
        { name: "HBO", link: "https://hbo.com" }
      ],
      technologies: ['HTML5', 'CSS3', 'PostCSS', 'Javascript', 'Node.js', 'React', 'Hooks', 'Context', 'UT', 'Webpack', 'CSS Modules', 'SSR', 'Accessibility', 'ARCore', 'Docker', 'Jenkins', 'Responsive Design', 'Git', 'ESLint', 'Flow', 'Linux']
    },
    {
      from: 'Nov 2018',
      to: 'Dec 2020',
      title: 'Senior Web UI Developer at Globant',
      description: `
        <p>Responsible for building web user interfaces, defining application architecture and good practices, coding and testing components and doing code reviews (Key developer and technical referent).</p>
        <p>Also, Involved in mentoring activities. I helped new globers to understand company's values. I guided them to improve their careers and get promoted by defining goals and working towards them.</p>
      `,
      logo: `${HOST}/static/globant-logo.png`,
      projects: [
        { name: "Hallmark Movies Now", link: "https://www.hmnow.com/" },
        { name: "Globant", link: "https://globant.com" }
      ],
      technologies: ['HTML5', 'CSS3', 'Javascript', 'Node.js', 'React', 'Redux', 'UT', 'Webpack', 'Next.js', 'SSR', 'SEO', 'RxJS', 'Redux-Saga', 'Redux-Reselect', 'Immutable', 'Sass', 'BEM', 'Atomic Design', 'Responsive Design', 'Git', 'ESLint' ]
    },
    {
      from: 'Sep 2015',
      to: 'Nov 2018',
      title: 'Semi Senior Web UI Developer at Globant',
      description: `
        <p>Responsible for transforming designs into responsive web pages and writing client-side application logic using external tools and browser APIs like, AngularJS, jQuery, Drag and Drop, Interactive Charts, WebSockets, among others.</p>
      `,
      logo: `${HOST}/static/globant-logo.png`,
      projects: [
        { name: "United Airlines" },
        { name: "Handerr" },
        { name: "OCA", link: "https://www.oca.com.ar" },
        { name: "Grupo Rhuo" }
      ],
      technologies: ['HTML5', 'CSS3', 'Javascript', 'AngularJS', 'Webpack', 'Gulp', 'jQuery', 'Sass', 'Responsive Design', 'Git', 'GridstackJS', 'WebSockets']
    },
    {
      from: 'Jan 2015',
      to: 'Dec 2017',
      title: 'Freelance Front-End & Back-End Developer',
      description: `
        <p>Coding web and mobile interfaces using technologies like angularJS and Ionic for hybrid applications and Ruby on Rails for backend and administration side. Using WebSockets for building real time experiences.</p>
      `,
      logo: `${HOST}/static/fv-logo.png`,
      projects: [
        { name: "SimpleHSQE-Admin" },
        { name: "SimpleHSQE-App" },
        { name: "Famapp", link: "https://play.google.com/store/apps/details?id=com.nordecmedia.famailla&hl=es" },
        { name: "Arevalo", link: "https://play.google.com/store/apps/details?id=com.ionicframework.arevalo820026&hl=es" },
        { name: "Adput", link: "https://play.google.com/store/apps/details?id=com.lsprats.adput&hl=es" },
        { name: "Farmacia america" },
      ],
      technologies: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails', 'AngularJS', 'Ionic', 'WebSockets', 'Sass', 'Responsive Design', 'Heroku', 'Git', 'Material Design']
    },
    {
      from: 'Nov 2013',
      to: 'May 2015',
      title: 'Front-End & Back-End Developer at Insignia4u',
      description: `
        <p>Worked mainly on the frontend side of several projects developing new features and fixing issues using technologies like: javascript, responsive design, CSS preprocessors, just to name a couple. I also worked on the backend side doing some Ruby on Rails code connecting with databases and writting code for admin panels.</p>
      `,
      logo: `${HOST}/static/i4u-logo.png`,
      projects: [
        { name: "Gugu Guru", link: "https://guguguru.com" },
        { name: "Asbestos Answers", link: "http://www.asbestosanswers.com.au" },
        { name: "La Gaceta", link: "https://www.lagaceta.com.ar" },
        { name: "TuCancha" },
        { name: "Tradeagrape" },
      ],
      technologies: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails', 'AngularJS', 'Backbone', 'jQuery', 'Sass', 'Stylus', 'SMACSS', 'Responsive Design', 'Heroku', 'Git', 'Bootstrap']
    },
  ],
  education: [
    {
      from: '2019',
      to: '2024',
      title: 'Universidad Tecnológica Nacional (UTN-FRT)',
      description: 'I am currently pursuing a degree in Information Systems Engineering.',
      logo: `${HOST}/static/utn-logo.jpeg`,
    },
    {
      from: '',
      to: '',
      title: 'Platzi',
      description: 'I completed successfully 3 careers: Frontend with React.js, Frontend Architecture and Backend development with Javascript. Check out my <a href="https://platzi.com/@fabianvelizok" target="_blank">Profile</a>.',
      logo: `${HOST}/static/platzi-logo.jpeg`,
    },
    {
      from: '',
      to: '',
      title: 'Acámica',
      description: 'I completed successfully 3 careers: Frontend development, Backend development and Web development, which was a combination of the 2 previous mentioned careers. Check out my <a href="https://globant.acamica.com/@fabianV" target="_blank">Profile</a>.',
      logo: `${HOST}/static/acamica-logo.png`,
    },
    {
      from: '',
      to: '',
      title: 'Udemy',
      description: 'I completed several advanced courses related to Frontend Development. Check out my <a href="https://www.udemy.com/user/fabian-veliz-4" target="_blank">Profile</a>.',
      logo: `${HOST}/static/udemy-logo.jpeg`,
    },
  ],
  languages: [
    {
      name: 'Spanish',
      level: 'Native',
    },
    {
      name: 'English',
      level: 'Upper intermediate',
    },
  ],
};

export default data;
