import HTML from "../img/icons/html.png";
import GitHub from "../img/icons/git.png";

import PW1 from "../img/projects/pw1.png";

import PL1 from "../img/projects/lindbergh1.png";

import S1 from "../img/projects/spot1.png";

import IDS from "../img/projects/ids.png";

import WX from "../img/projects/preflight.png";

import FCD from "../img/projects/fcd.png";

import TAR1 from "../img/projects/tar1.png";

import ET1 from "../img/projects/et1.png";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "I created this portfolio website at the beginning of 2020 to display my resume in a more interactive format for prospective employers. Around 95% of the website's elements were created from the ground up, helping me strengthen my HTML, CSS, JavaScript, and PHP skills. In the projects section, I designed popup modals that display additional project information (such as the one you are viewing now) and incorporated interactive slideshows. The aviation page features a map created using the Carto API and is populated with data from a GeoJSON file. Finally, the contact page includes a PHP email form with Google reCAPTCHA protection.",
    languages: [{ name: "HTML", icon: HTML }],
    secondLineText: "Source code available on:",
    secondLine: [
      {
        name: "GitHub",
        icon: GitHub,
        link: "https://github.com/nrankin18/Portfolio",
      },
    ],
    images: [PW1],
  },
  {
    name: "Project Lindbergh",
    images: [PL1],
  },
  {
    name: "Spotter",
    images: [S1],
  },
  {
    name: "Information Display System",
    images: [IDS],
  },

  {
    name: "Weather Briefer",
    images: [WX],
  },

  {
    name: "Five Card Draw",
    images: [FCD],
  },

  {
    name: "The Amazing Race",
    images: [TAR1],
  },

  {
    name: "Europe Trip App",
    images: [ET1],
  },
];

export { projects };
