import BCLogo from "../img/logos/bc.png";
import BVALogo from "../img/logos/bva.png";
import SCALogo from "../img/logos/sca.png";
import SDLogo from "../img/logos/sd.png";
import ViasatLogo from '../img/logos/viasat.png';

const companies = [
  {
    name: "Viasat, Inc.",
    logo: ViasatLogo,
    time: "June, 2022 - Present",
    location: "Boston, MA",
    positions: [
      {
        name: "Software Engineer",
        objectives: []
      }
    ],
  },
  {
    name: "Satcom Direct, Inc.",
    logo: SDLogo,
    time: "June, 2021 - April, 2022",
    location: "Melbourne, FL",
    positions: [
      {
        name: "Junior Software Engineer",
        objectives: [
          "Worked on aircraft movement reports and flight deck connectivity teams", 
          "Developed services that interface between aircraft and data providers including FAA TDLS and CPDLC"]
      },
      {
        name: "Software Engineering Intern",
        objectives: ["Designed, implemented, and tested internal Angular support website and associated ASP.NET API", "Learned Agile software development methodology"]
      },
    ],
  },
  {
    name: "Boston College",
    logo: BCLogo,
    time: "January, 2019 - May 2021",
    location: "Chestnut Hill, MA",
    positions: [
      {
        name: "Computer Science Teaching Assistant",
        objectives: [
          "Facilitated one-on-one and group tutorial sessions",
          "Graded and provided feedback for 80 student's weekly Java problem sets",
        ],
      },
      {
        name: "Tech Team Lead, Computer Science Society",
        objectives: [
          `Organized BC's annual 24-hour hackathon: <a target="_blank" href="http://hacktheheights.org/">Hack the Heights</a>`,
          `Developed and maintained society's <a target="_blank" href="http://bccss.io">website</a>`,
          "Planned bi-weekly workshops and technical events",
        ],
      },
    ],
  },
  {
    logo: BVALogo,
    name: "Boston Virtual ARTCC",
    time: "May, 2018 - Present",
    location: "Boston, MA (pro-bono)",
    positions: [
      {
        name: "Deputy Air Traffic Manager",
        objectives: [
          "Manages roster of over 150 active volunteers",
          "Collaborates with VATUSA Northeastern region to develop LOAs and inter-ARTCC events",
        ],
      },
      {
        name: "Facility Engineer",
        objectives: [
          "Managed and updated community web tools including an Information Display System that provides access to FAA databases, weather information, aeronautical charts, and live airport information",
          "Created video maps and maintained navigation databases sourced from FAA FOIA requests",
        ],
      }
    ],
  },
  {
    name: "Spring City Aviation, Inc.",
    logo: SCALogo,
    time: "May, 2019 - August, 2019",
    location: "Milwaukee, WI",
    positions: [
      {
        name: "Customer Service Representative",
        objectives: [
          "Organized FAR part 135 charter operations including crew and aircraft scheduling and trip logistics",
          "Supported FBO customer's and flight school student's billing and scheduling needs",
          'Helped facilitate community outreach events including the annual “flour drop" competition covered by the Milwaukee Journal Sentinel',
        ],
      },
    ],
  },
];

export { companies };

