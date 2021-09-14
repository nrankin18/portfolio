import BCLogo from "../img/logos/bc.png";
import BVALogo from "../img/logos/bva.png";
import SDLogo from "../img/logos/sd.png";
import SCALogo from "../img/logos/sca.png";

const companies = [
  {
    name: "Boston College",
    logo: BCLogo,
    time: "January, 2019 - Present",
    location: "Chestnut Hill, MA",
    positions: [
      {
        name: "Computer Science Teaching Assistant",
        objectives: [
          "Facilitated one-on-one and group tutorial sessions",
          "Graded and provided feedback for 80 students' weekly problem sets",
          "Facilitated student collaboration via an online forum",
        ],
      },
      {
        name: "Tech Team Lead, Computer Science Society",
        objectives: [
          `Organized BC’s annual 24-hour hackathon: <a target="_blank" href="http://hacktheheights.org/">Hack the Heights</a>`,
          `Developed and maintained society's <a target="_blank" href="http://bccss.io">website</a>`,
          "Planned bi-weekly workshops and technical events",
        ],
      },
    ],
  },
  {
    name: "Satcom Direct",
    logo: SDLogo,
    time: "June, 2021 - Present",
    location: "Melbourne, FL",
    positions: [
      {
        name: "Junior Software Engineer",
        objectives: []
      },
      {
        name: "Software Engineering Intern",
        objectives: ["Designed and implemented numerous Angular webpages and associated ASP.NET API functionality for internal support website"]
      },
    ],
  },
  {
    logo: BVALogo,
    name: "Boston Virtual ARTCC",
    time: "August, 2017 - Present",
    location: "Boston, MA",
    positions: [
      {
        name: "Facility Engineer",
        objectives: [
          "Assist in the continual development of community management website with a user base of over 1500 members featuring exam distribution and test corrections, event management, shift sign-ups, and roster management",
          "Manage and develop community web tools including an Information Display System that interfaces with FAA databases, weather information, aeronautical charts and live airport information",
          "Develops and maintains a library of 90 radar client sector files",
        ],
      },
      {
        name: "ATC Mentor",
        objectives: [
          "Works with students learning air traffic control procedures and issues certifications to control on the VATSIM network",
          "Manages internal exam center including test correction review",
        ],
      },
    ],
  },
  {
    name: "Spring City Aviation",
    logo: SCALogo,
    time: "May, 2019 - August, 2019",
    location: "Milwaukee, WI",
    positions: [
      {
        name: "Customer Service Representative",
        objectives: [
          "Organized FAR part 135 charter operations including crew and aircraft scheduling and trip logistics",
          "Supported FBO customer’s and flight school student’s billing and scheduling needs",
          'Helped facilitate community outreach events including the annual “flour drop" competition covered by the Milwaukee Journal Sentinel',
        ],
      },
    ],
  },
];

export { companies };
