const projects = [
  {
    name: "Portfolio Website",
    images: [
      "/img/projects/pw1.png",
      "/img/projects/pw2.png",
      "/img/projects/pw3.png",
      "/img/projects/pw4.png",
    ],
    isMobile: 0,
    description: `I created this portfolio website at the beginning of 2020 to display my resume in a more interactive format. In late 2020 I ported the project to React for easier upkeep. In the projects section, I designed popup modals that display additional project information (such as the one you are viewing now) and incorporated interactive slideshows. The aviation page features a map created using Mapbox GL and is populated with data from a GeoJSON file. Finally, the contact page includes an email form with integrated Google reCAPTCHA protection.`,
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: "/img/icons/html.png" },
      { name: "CSS", icon: "/img/icons/css.png" },
      { name: "JavaScript", icon: "/img/icons/js.png" },
    ],
    line2Text: "Technologies used:",
    line2Icons: [
      { name: "React", icon: "/img/icons/react.png" },
      { name: "React Router", icon: "/img/icons/reactrouter.png" },
      { name: "Mapbox", icon: "/img/icons/mapbox.png" },
      { name: "EmailJS", icon: "/img/icons/emailjs.png" },
      { name: "reCAPTCHA", icon: "/img/icons/recaptcha.png" },
    ],
    line3Text: "Source code available on:",
    line3Icons: [
      {
        name: "GitHub",
        icon: "/img/icons/git.png",
        href: "https://github.com/nrankin18/react-portfolio",
      },
    ],
  },
  {
    name: "Project Lindbergh",
    images: [
      "/img/projects/lindbergh1.png",
      "/img/projects/lindbergh2.png",
      "/img/projects/lindbergh3.png",
      "/img/projects/lindbergh4.png",
      "/img/projects/lindbergh5.png",
    ],
    isMobile: 0,
    description:
      "Project Lindbergh is a collaborative volunteer project started by the current Webmaster of Boston Virtual ARTCC, a non-profit 501(c)(3) organization that provides realistic air traffic control services for pilots training on flight simulators. The website serves multiple functions in the community, including training management, exam distribution and test corrections, event management, shift sign-ups, and roster management. Currently I aid in the maitenance of the site as well as the implementation of new features.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: "/img/icons/html.png" },
      { name: "CSS", icon: "/img/icons/css.png" },
      { name: "JavaScript", icon: "/img/icons/js.png" },
      { name: "PHP", icon: "/img/icons/php.png" },

      { name: "SQL", icon: "/img/icons/sql.png" },
    ],
    line2Text: "Technologies used:",
    line2Icons: [
      {
        name: "Laravel",
        icon: "/img/icons/laravel.png",
      },
      {
        name: "MySQL",
        icon: "/img/icons/mysql.png",
      },
      {
        name: "jQuery",
        icon: "/img/icons/jquery.png",
      },
    ],
  },
  {
    name: "BCCSS Website",
    images: [
      "/img/projects/bccss1.png",
      "/img/projects/bccss2.png",
      "/img/projects/bccss3.png",
      "/img/projects/bccss4.png",
    ],
    isMobile: 0,
    description:
      "As part of my role as Tech Team Lead on the executive board of Boston College's Computer Science Society, I was tasked with refreshing our society's website along with the website for our annual hackathon: Hack the Heights. The main website features an integrated Mailchimp sign up, team members, and upcoming events. The Hack the Heights website was heavily used both for pre-event promotion as well as organization during the event weekend. It includes a 'live' page that displays the schedule and announcements as well as descriptions of our volunteer mentors and sponsors.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: "/img/icons/html.png" },
      { name: "CSS", icon: "/img/icons/css.png" },
      { name: "JavaScript", icon: "/img/icons/js.png" },
    ],
    line2Text: "Technologies used:",
    line2Icons: [{ name: "Mailchimp", icon: "/img/icons/mailchimp.png" }],
    line3Text: "Visit sites:",
    line3Icons: [
      {
        name: "bccss.io",
        icon: "/img/icons/web.png",
        href: "https://bccss.io",
      },
      {
        name: "hacktheheights.org",
        icon: "/img/icons/web.png",
        href: "http://hacktheheights.org",
      },
    ],
  },
  {
    name: "Spotter",
    images: [
      "/img/projects/spot1.png",
      "/img/projects/spot2.png",
      "/img/projects/spot3.png",
      "/img/projects/spot4.png",
      "/img/projects/spot6.png",
      "/img/projects/spot8.png",
    ],
    isMobile: 1,
    description: `Spotter was a Swift-based iOS app prototype built during my freshman year of college aimed at combining the immensely popular Pokémon Go-style game with the world of aviation. Players would compete by spotting real aircraft and earn points by completing objectives, such as finding a particular aircraft type, operator, or destination. Plans called for an augmented-reality style interface that would allow users to point their cameras at aircraft passing overhead to spot them. The project received real-time aircraft data from an open-source ADS-B data provider, which unfortunately ceased its service halfway through the app’s development. The app also relied on data from APIs that would dynamically look up the city name associated with an airport code, airline logos, and country flags.`,
    line1Text: "Language used:",
    line1Icons: [{ name: "Swift", icon: "/img/icons/swift.png" }],
    line2Text: "",
    line2Icons: [],
  },
  {
    name: "Information Display System",
    images: ["/img/projects/ids.png"],
    isMobile: 0,
    description:
      "Boston Virtual ARTCC's Information Display System (IDS) is a modular web-application that allows air traffic controllers on the VATSIM network to build a custom toolbox of useful technologies to aid them while controlling. It simulates software used by the FAA (Federal Aviation Administration) in facilities across the United States. Some of the available features include: access to aircraft, airline, and FAA preferred routes databases, weather information, aeronautical charts, and live airport information.",
    line1Text: "Languages used:",
    line1Icons: [
      { name: "HTML", icon: "/img/icons/html.png" },
      { name: "CSS", icon: "/img/icons/css.png" },
      { name: "JavaScript", icon: "/img/icons/js.png" },
      { name: "PHP", icon: "/img/icons/php.png" },
      { name: "SQL", icon: "/img/icons/sql.png" },
    ],
    line2Text: "Technologies:",
    line2Icons: [
      {
        name: "CodeIgniter",
        icon: "/img/icons/ci.png",
      },
      {
        name: "Handlebars.js",
        icon: "/img/icons/handlebars.png",
      },
      {
        name: "MySQL",
        icon: "/img/icons/mysql.png",
      },
      {
        name: "jQuery",
        icon: "/img/icons/jquery.png",
      },
    ],
  },

  {
    name: "Weather Briefer",
    images: ["/img/projects/preflight.png"],
    isMobile: 0,
    description:
      "A member of the Connecticut Civil Air Patrol approached me with a request to update their outdated MATLAB mission briefer that was no longer functional. He explained the aim of the program was simplicity. When a mission dropped, he wanted a simple one-click solution that would automatically generate a mission briefing .txt file that could be easily printed without the hassle of GUIs and dozens of online aviation weather sources. My solution was a simple Java executable file that, in addition to generating boilerplate mission paperwork, would gather weather reports for the state of Connecticut including Area Forecasts, METARs, TAFs, winds aloft, and AIRMETs, and output a briefing in an easily printable and readable format.",
    line1Text: "Language used:",
    line1Icons: [{ name: "Java", icon: "/img/icons/java.png" }],
    line2Text: "Source code available on:",
    line2Icons: [
      {
        name: "GitHub",
        icon: "/img/icons/git.png",
        href: "https://github.com/nrankin18/CTPreflight",
      },
    ],
  },

  {
    name: "Five Card Draw",
    images: ["/img/projects/fcd.png"],
    isMobile: 0,
    description:
      "Five Card Draw is a Java application that stemmed from an assignment in an intro to Java course. While the original assignment only called for a console-based game for students to practice writing Card and Deck classes, I decided to create a GUI and later added AI opponents to fully “flush” out the game. AI opponents were randomly generated each game with a unique name, skill level, and tendency to bluff. These opponents correctly discarded the two worst cards in their hand and wagered bets or folded according to their hand’s probability of winning. This game was fun to design and even more rewarding to see being played by classmates in school.",
    line1Text: "Language used:",
    line1Icons: [{ name: "Java", icon: "/img/icons/java.png" }],
    line2Text: "",
    line2Icons: [],
  },

  {
    name: "The Amazing Race",
    images: [
      "/img/projects/tar1.png",
      "/img/projects/tar2.png",
      "/img/projects/tar3.png",
      "/img/projects/tar4.png",
    ],
    isMobile: 0,
    description:
      "The Amazing Race was a single-player game prototype built for a week-long coding competition hosted by Codevana. The game was based on the CBS reality television show of the same name that sees contestants race around the world completing challenges to avoid elimination and be the first to cross the finish line. This prototype was based on the first episode of the 25th season located on the U.S. Virgin Islands. Players would dig for buried treasure using clues and a compass, then hop on a boat to the capital city of Charlotte Amalie where they would search for the leg’s pit stop located in Fort Christian. I created unique 3D assets in Blender including the iconic clue box and Fort Christian, designed the level in Unreal Engine, then scripted the leg's challenges in UnrealScript. At the end of the week, this project won the Audience Choice Award.",
    line1Text: "Language used:",
    line1Icons: [{ name: "UnrealScript", icon: "/img/icons/ue.png" }],
    line2Text: "",
    line2Icons: [{}],
  },

  {
    name: "Europe Trip App",
    images: [
      "/img/projects/et1.png",
      "/img/projects/et2.png",
      "/img/projects/et3.png",
      "/img/projects/et4.png",
      "/img/projects/et5.png",
      "/img/projects/et6.png",
    ],
    isMobile: 1,
    description:
      "The 2013 Europe Trip App was created while I was in 7th grade for a class trip to Spain and France the following summer. The app was written in Objective-C and was eventually published on the Apple App Store for my classmates to download and utilize on the trip. Some of the features included a daily itinerary, a plethora of cached maps to avoid international data plan usage, and information about the sites we would be visiting.",
    line1Text: "Language used:",
    line1Icons: [{ name: "ObjectiveC", icon: "/img/icons/oc.png" }],
    line2Text: "",
    line2Icons: [{}],
  },
];

export { projects };
