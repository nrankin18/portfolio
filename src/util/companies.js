import BCLogo from "../img/logos/bc.png";
import BVALogo from "../img/logos/bva.png";
import SCALogo from "../img/logos/sca.png";

const companies = [
    {
        name:"Boston College",
        logo:{BCLogo},
        time:"January, 2019 - Present",
        location:"Chestnut Hill, MA",
        positions: [
          {
            name: "Computer Science Teaching Assistant",
            objectives: [
              "Facilitates one-on-one and group tutorial sessions",
              "Grades and provides feedback for 80 students' weekly problem sets",
              "Facilitates student collaboration via an online forum",
            ],
          },
          {
            name: "Tech Team Lead, Computer Science Society",
            objectives: [
              `Organizes BC’s annual 24-hour hackathon: <a target="_blank" href="http://hacktheheights.org/">Hack the Heights</a>`,
              `Developed and maintains society's <a target="_blank" href="http://bccss.io">website</a>`,
              "Plans bi-weekly workshops and technical events",
            ],
          },
        ]
    },
    {
        logo:{BVALogo},
        name:"Boston Virtual ARTCC",
            time:"August, 2017 - Present",
            location:"Boston, MA",
            positions:[
              {
                name: "Facility Engineer",
                objectives: [
                  "Facilitates one-on-one and group tutorial sessions",
                  "Grades and provides feedback for 80 students' weekly problem sets",
                  "Facilitates student collaboration via an online forum",
                ],
              },
              {
                name: "ATC Mentor",
                objectives: [
                  "Works with students learning air traffic control procedures to issue certifications to control on the VATSIM network",
                  "Manages internal exam center including test correction review",
                ],
              },
            ]
    },
    {
        name:"Spring City Aviation",
        logo:{SCALogo},
            date:"May, 2019 - August, 2019",
            location:"Milwaukee, WI",
            positions:[
              {
                name: "Customer Service Representative",
                objectives: [
                  "Organized FAR part 135 charter operations including crew and aircraft scheduling and trip logistics",
                  "Supported FBO customer’s and flight school student’s billing and scheduling needs",
                  'Helped facilitate community outreach events including the annual “flour drop" competition covered by the Milwaukee Journal Sentinel',
                ],
              },
            ]
    }
    
];

export { companies };