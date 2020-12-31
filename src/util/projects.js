import pw1 from "../img/projects/pw1.png";
import pw2 from "../img/projects/pw2.png";
import pw3 from "../img/projects/pw3.png";
import pw4 from "../img/projects/pw4.png";

import lindbergh1 from "../img/projects/lindbergh1.png";
import lindbergh2 from "../img/projects/lindbergh2.png";
import lindbergh3 from "../img/projects/lindbergh3.png";
import lindbergh4 from "../img/projects/lindbergh4.png";
import lindbergh5 from "../img/projects/lindbergh5.png";

import bccss1 from "../img/projects/bccss1.png";
import bccss2 from "../img/projects/bccss2.png";
import bccss3 from "../img/projects/bccss3.png";
import bccss4 from "../img/projects/bccss4.png";

import spot1 from "../img/projects/spot1.png";
import spot2 from "../img/projects/spot2.png";
import spot3 from "../img/projects/spot3.png";
import spot4 from "../img/projects/spot4.png";
import spot5 from "../img/projects/spot5.png";
import spot6 from "../img/projects/spot6.png";

import tar1 from "../img/projects/tar1.png";
import tar2 from "../img/projects/tar2.png";
import tar3 from "../img/projects/tar3.png";
import tar4 from "../img/projects/tar4.png";

import et1 from "../img/projects/et1.png";
import et2 from "../img/projects/et2.png";
import et3 from "../img/projects/et3.png";
import et4 from "../img/projects/et4.png";
import et5 from "../img/projects/et5.png";
import et6 from "../img/projects/et6.png";

import ids from "../img/projects/ids.png";
import wx from "../img/projects/preflight.png";
import fcd from "../img/projects/fcd.png";

import HTML from "../img/icons/html.png";
import CSS from "../img/icons/css.png";
import JS from "../img/icons/js.png";
import React from "../img/icons/react.png";
import ReactRouter from "../img/icons/reactrouter.png";
import Mapbox from "../img/icons/mapbox.png";
import EmailJS from "../img/icons/emailjs.png";
import reCAPTCHA from "../img/icons/recaptcha.png";
import GitHub from "../img/icons/git.png";
import PHP from "../img/icons/php.png";
import SQL from "../img/icons/sql.png";
import Laravel from "../img/icons/laravel.png";
import MySQL from "../img/icons/mysql.png";
import JQuery from "../img/icons/jquery.png";
import Web from "../img/icons/web.png";
import Mailchimp from "../img/icons/mailchimp.png";
import CodeIgniter from "../img/icons/ci.png";
import Handlebars from "../img/icons/handlebars.png";
import Swift from "../img/icons/swift.png";
import Java from "../img/icons/java.png";
import US from "../img/icons/ue.png";
import OC from "../img/icons/oc.png";

const projects = [
  {
    name: "Portfolio Website",
    images: [pw1, pw2, pw3, pw4],
    isMobile: 0,
    description: `I created this portfolio website at the beginning of 2020 to display my resume in a more interactive format. In late 2020 I ported the project to React for easier upkeep. In the projects section, I designed popup modals that display additional project information (such as the one you are viewing now) and incorporated interactive slideshows. The aviation page features a map created using Mapbox GL and is populated with data from a GeoJSON file. Finally, the contact page includes an email form with integrated Google reCAPTCHA protection.`,
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
    ],
    line2Text: "Technologies used:",
    line2Icons: [
      { name: "React", icon: React },
      { name: "React Router", icon: ReactRouter },
      { name: "Mapbox", icon: Mapbox },
      { name: "EmailJS", icon: EmailJS },
      { name: "reCAPTCHA", icon: reCAPTCHA },
    ],
    line3Text: "Source code available on:",
    line3Icons: [
      {
        name: "GitHub",
        icon: GitHub,
        href: "https://github.com/nrankin18/react-portfolio",
      },
    ],
  },
  {
    name: "Project Lindbergh",
    images: [lindbergh1, lindbergh2, lindbergh3, lindbergh4, lindbergh5],
    isMobile: 0,
    description:
      "Project Lindbergh is a collaborative volunteer project started by the current Webmaster of Boston Virtual ARTCC, a non-profit 501(c)(3) organization that provides realistic air traffic control services for pilots training on flight simulators. The website serves multiple functions in the community, including training management, exam distribution and test corrections, event management, shift sign-ups, and roster management. Currently I aid in the maitenance of the site as well as the implementation of new features.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
      { name: "PHP", icon: PHP },
      { name: "SQL", icon: SQL },
    ],
    line2Text: "Technologies used:",
    line2Icons: [
      {
        name: "Laravel",
        icon: Laravel,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "jQuery",
        icon: JQuery,
      },
    ],
  },
  {
    name: "BCCSS Website",
    images: [bccss1, bccss2, bccss3, bccss4],
    isMobile: 0,
    description:
      "As part of my role as Tech Team Lead on the executive board of Boston College's Computer Science Society, I was tasked with refreshing our society's website along with the website for our annual hackathon: Hack the Heights. The main website features an integrated Mailchimp sign up, team members, and upcoming events. The Hack the Heights website was heavily used both for pre-event promotion as well as organization during the event weekend. It includes a 'live' page that displays the schedule and announcements as well as descriptions of our volunteer mentors and sponsors.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
    ],
    line2Text: "Technologies used:",
    line2Icons: [{ name: "Mailchimp", icon: Mailchimp }],
    line3Text: "Visit sites:",
    line3Icons: [
      {
        name: "bccss.io",
        icon: Web,
        href: "https://bccss.io",
      },
      {
        name: "hacktheheights.org",
        icon: Web,
        href: "http://hacktheheights.org",
      },
    ],
  },
  {
    name: "Spotter",
    images: [spot1, spot2, spot3, spot4, spot5, spot6],
    isMobile: 1,
    description: `Spotter was a Swift-based iOS app prototype built during my freshman year of college aimed at combining the immensely popular Pokémon Go-style game with the world of aviation. Players would compete by spotting real aircraft and earn points by completing objectives, such as finding a particular aircraft type, operator, or destination. Plans called for an augmented-reality style interface that would allow users to point their cameras at aircraft passing overhead to spot them. The project received real-time aircraft data from an open-source ADS-B data provider, which unfortunately ceased its service halfway through the app’s development. The app also relied on data from APIs that would dynamically look up the city name associated with an airport code, airline logos, and country flags.`,
    line1Text: "Language used:",
    line1Icons: [{ name: "Swift", icon: Swift }],
    line2Text: "",
    line2Icons: [],
  },
  {
    name: "Information Display System",
    images: [ids],
    isMobile: 0,
    description:
      "Boston Virtual ARTCC's Information Display System (IDS) is a modular web-application that allows air traffic controllers on the VATSIM network to build a custom toolbox of useful technologies to aid them while controlling. It simulates software used by the FAA (Federal Aviation Administration) in facilities across the United States. Some of the available features include: access to aircraft, airline, and FAA preferred routes databases, weather information, aeronautical charts, and live airport information.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
      { name: "PHP", icon: PHP },
      { name: "SQL", icon: SQL },
    ],
    line2Text: "Technologies:",
    line2Icons: [
      {
        name: "CodeIgniter",
        icon: CodeIgniter,
      },
      {
        name: "Handlebars.js",
        icon: Handlebars,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "jQuery",
        icon: JQuery,
      },
    ],
  },

  {
    name: "Weather Briefer",
    images: [wx],
    isMobile: 0,
    description:
      "A member of the Connecticut Civil Air Patrol approached me with a request to update their outdated MATLAB mission briefer that was no longer functional. He explained the aim of the program was simplicity. When a mission dropped, he wanted a simple one-click solution that would automatically generate a mission briefing .txt file that could be easily printed without the hassle of GUIs and dozens of online aviation weather sources. My solution was a simple Java executable file that, in addition to generating boilerplate mission paperwork, would gather weather reports for the state of Connecticut including Area Forecasts, METARs, TAFs, winds aloft, and AIRMETs, and output a briefing in an easily printable and readable format.",
    line1Text: "Language used:",
    line1Icons: [{ name: "Java", icon: Java }],
    line2Text: "Source code available on:",
    line2Icons: [
      {
        name: "GitHub",
        icon: GitHub,
        href: "https://github.com/nrankin18/CTPreflight",
      },
    ],
  },

  {
    name: "Five Card Draw",
    images: [fcd],
    isMobile: 0,
    description:
      "Five Card Draw is a Java application that stemmed from an assignment in an intro to Java course. While the original assignment only called for a console-based game for students to practice writing Card and Deck classes, I decided to create a GUI and later added AI opponents to fully “flush” out the game. AI opponents were randomly generated each game with a unique name, skill level, and tendency to bluff. These opponents correctly discarded the two worst cards in their hand and wagered bets or folded according to their hand’s probability of winning. This game was fun to design and even more rewarding to see being played by classmates in school.",
    line1Text: "Language used:",
    line1Icons: [{ name: "Java", icon: Java }],
    line2Text: "",
    line2Icons: [],
  },

  {
    name: "The Amazing Race",
    images: [tar1, tar2, tar3, tar4],
    isMobile: 0,
    description:
      "The Amazing Race was a single-player game prototype built for a week-long coding competition hosted by Codevana. The game was based on the CBS reality television show of the same name that sees contestants race around the world completing challenges to avoid elimination and be the first to cross the finish line. This prototype was based on the first episode of the 25th season located on the U.S. Virgin Islands. Players would dig for buried treasure using clues and a compass, then hop on a boat to the capital city of Charlotte Amalie where they would search for the leg’s pit stop located in Fort Christian. I created unique 3D assets in Blender including the iconic clue box and Fort Christian, designed the level in Unreal Engine, then scripted the leg's challenges in UnrealScript. At the end of the week, this project won the Audience Choice Award.",
    line1Text: "Language used:",
    line1Icons: [{ name: "UnrealScript", icon: US }],
    line2Text: "",
    line2Icons: [{}],
  },

  {
    name: "Europe Trip App",
    images: [et1, et2, et3, et4, et5, et6],
    isMobile: 1,
    description:
      "The 2013 Europe Trip App was created while I was in 7th grade for a class trip to Spain and France the following summer. The app was written in Objective-C and was eventually published on the Apple App Store for my classmates to download and utilize on the trip. Some of the features included a daily itinerary, a plethora of cached maps to avoid international data plan usage, and information about the sites we would be visiting.",
    line1Text: "Language used:",
    line1Icons: [{ name: "ObjectiveC", icon: OC }],
    line2Text: "",
    line2Icons: [{}],
  },
];

export { projects };
