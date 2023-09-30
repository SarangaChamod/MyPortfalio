import self from "../img/self.png";
// import Coming_soon from "../img/Coming_soon.png"
import Slide01 from "../img/Slide01.png";
import ui01 from "../img/uiDesignImg/ui_01.png";
import ui02 from "../img/uiDesignImg/ui_02.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Saranga",
  lastName: "Chamod",
  initials: "Sc", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the SRI LANKA",
    },
    {
      emoji: "💼",
      text: "software engineer at yomboc",
    },
    {
      emoji: "📧",
      text: "saranga.work1@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/saranga.chamod.7/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/saranga_chamod/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/SarangaChamod",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/saranga-chamod-11b4b8211/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.behance.net/agsarangachamod",
      icon: "fa fa-behance",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello, and welcome to my portfolio! I am Saranga Chamod, a passionate and driven undergraduate Software Engineer based in Sri Lanka. With a relentless curiosity for technology and a love for coding, I strive to make a meaningful impact in the world of software development.",
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "HTML/CSS"],
    frameworks: ["React Native", "Django", "Bootstrap/jQuery", "Material UI"],
    database: ["Firebase", "MySQL", "MongoDB", "AWS"],
    tools: ["Github", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  hobbies: [
    {
      label: "Neranjan Hewage",
      emoji: "🧑‍💻",
      link: "https://neranjanhewage.me/", // Add the link to the reading hobby
    },
    {
      label: "Dulshan Senadheera",
      emoji: "🧑‍💻",
      link: "https://dulshansenadheera.me/", // Add the link to the theater hobby
    },
    {
      label: "Sanuth Rathnayake",
      emoji: "🧑‍💻",
      link: "https://www.linkedin.com/in/sanuth-newmin-a33b73203/", // Add the link to the movies hobby
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed

    {
      title: "Environmental Monitoring Application",
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/SarangaChamod/EMP_Application", // this should be a link to the **repository** of the project, where the code is hosted.
      image: Slide01,
    },
  ],
  uiDesign: [
    // This is where your portfolio projects will be detailed

    {
      title: "Redesigned Spotify",
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/SarangaChamod/EMP_Application", // this should be a link to the **repository** of the project, where the code is hosted.
      image: ui01,
    },
    {
      title: "Smart Watch App",
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/SarangaChamod/EMP_Application", // this should be a link to the **repository** of the project, where the code is hosted.
      image: ui02,
    },
    {
      title: "Environmental Monitoring Application",
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/SarangaChamod/EMP_Application", // this should be a link to the **repository** of the project, where the code is hosted.
      image: Slide01,
    },
  ],
};
