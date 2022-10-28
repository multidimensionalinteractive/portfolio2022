export const METADATA = {
  title: "Portfolio | Matt Haydon II | MattGo.Dev",
  description:
    "I bridge the gap between design and development. I like to craft an aesthetic user interface and user experience using modern best practices.",
  siteUrl: "https://mattgo.dev",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop products",
  "I develop modern frontend apps",
  "I design dynamic user experiences"
];

export const EMAIL = "matthaydon@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/matthaydon/",
  github: "https://github.com/multidimensionalinteractive",
  twitter: "https://twitter.com/matt_boh",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Get Dynamic ",
    image: "/projects/dynamic.jpg",
    blurImage: "/projects/blur/dynamic-blur.jpg",
    description: "Dynamic is an Enterprise blockchain based EDI platform that automates key data movement between customers and vendors.",
    gradient: ["#003052", "#167187"],
    url: "https://getdynamic.app",
    tech: ["css", "javascript", "python"],
  },
  {
    name: "Aerodynamic Data",
    image: "/projects/aerodynamicdata.jpg",
    blurImage: "/projects/blur/aerodynamicdata-blur.jpg",
    description: "MRO and Logistics Aviation ERP Blockchain Software Consulting Company.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://dynamics.aero",
    tech: ["react", "typescript", "css"],
  },
  {
    name: "LaserChain",
    image: "/projects/laserchain.jpg",
    blurImage: "/projects/blur/laserchain-blur.jpg",
    description: "Blockchain based mobile app game, UI/UX Design, C++, C#, and Unity 3D",
    gradient: ["#245B57", "#004741"],
    url: "https://www.laserchain.io/",
    tech: ["html", "aftereffects", "photoshop"],
  },
  {
    name: "Multidimensional Interactive",
    image: "/projects/mdiio.jpg",
    blurImage: "/projects/blur/mdiio-blur.jpg",
    description: "Built applications for clients from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://mdi.io",
    tech: ["react", "angular", "gsap", "figma"],
  },
  {
    name: "AutoDryer",
    image: "/projects/dryeriq.jpg",
    blurImage: "/projects/blur/dryeriq-blur.jpg",
    description: "Designed UI/UX",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://autodryer.com",
    tech: ["photoshop", "angular", "typescript"],
  }, 
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle: "Developing an enterprise grade blockchain 🔗 solution for the Aerospace Industry ✈️",
    image: "/timeline/get-dynamic.png",
    slideImage: "/timeline/dynamic.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Building solutions for blockchain integration, productivity & performance, ERP consulting for Aerospace Industry 🎯",
    image: "/timeline/aerodynamic-data.png",
    slideImage: "/timeline/aerodynamicdata.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle: "Directed Development all web & video projects as well as oversaw Marketing & SEO / SEM Campaigns. 🚀",
    image: "/timeline/autoovac.svg",
    slideImage: "/timeline/autovac.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AVI CAR CARE <br />UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Lead Design & Development 👨‍💼📈💵💰",
    image: "",
    slideImage: "/timeline/avicarcare.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AUTODRYER <br/> UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle:
      "🥳 Design and development",
    image: "",
    slideImage: "/timeline/autodryer.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Laserchain<br />Community Manager / UI UX Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Spent time in Bali, Malaysia and Hongkong working on LaserChain!",
    image: "",
    slideImage: "/timeline/laserstone2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "X";
