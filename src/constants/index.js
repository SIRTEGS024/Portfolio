import project1 from "../assets/projects/inventory-port.png";
import project2 from "../assets/projects/convex-port.png";
import project3 from "../assets/projects/t-shop-port1.png";
import project4 from "../assets/projects/port-port.png";

export const HERO_CONTENT = `I am a dedicated full-stack developer with a strong ability to build scalable and efficient web applications. With 3 years of hands-on experience, I have developed expertise in front-end technologies like React, Next.js, and TypeScript, as well as back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to apply my skills to develop innovative solutions that enhance business operations and create seamless user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient and user-friendly web applications. With 3 years of professional experience, I have worked with technologies like TypeScript, React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I hold a Bachelor's degree in Computer Engineering from the University of Benin, where I developed a strong foundation in problem-solving and software development. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies and continuously improving my skills.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Adroitsoft",
    description: `As a Full Stack Developer at Adriodsoft since January 2022, I have contributed to the development of various applications, including a school management system, an inventory management dashboard, an e-commerce platform, and a Slack-like real-time communication app. I worked on both frontend and backend components, utilizing technologies like Next.js, TypeScript, Node.js, PostgreSQL, AWS, and Convex to enhance performance and user experience. Additionally, I provided technical training in a bootcamp, mentoring aspiring developers in full-stack technologies, and conducted client onboarding sessions to ensure seamless adoption of our systems. I also optimized database performance and deployed scalable cloud solutions to improve system efficiency and reliability.`,
    technologies: ["React.js", "Typescript", "Next.js", "Node.js","Tailwind.css"],
  },
];

export const PROJECTS = [
  {
    title: "T-Shop - E-Commerce Website",
    image: project3,
    description:
      "T-Shop is a full-stack e-commerce platform built with MongoDB, Redis, Stripe, JWT, and React, offering a secure and seamless shopping experience. It features user authentication with JWT (access and refresh tokens), product and category management, a shopping cart, and checkout with Stripe integration. Users can apply coupon codes, while admins can manage orders, track sales through an analytics dashboard, and oversee the platform. Redis caching enhances performance, and Tailwind CSS ensures a modern UI. With a focus on security, scalability, and full-stack deployment, T-Shop delivers a robust and efficient online shopping solution.",
    technologies: ["React", "Node.js", "Express", "Tailwind.css"],
    url: "https://t-shop-y62s.onrender.com/",
    readme: "https://github.com/SIRTEGS024/T-shop"
  },
  {
    title: "Metrack – Fullstack Real-Time Slack Clone",
    image: project2,
    description:
      "Metrack is a fullstack real-time messaging platform inspired by Slack. It supports workspaces, channels, 1:1 conversations, threaded discussions, reactions, and role-based access control. Users can send messages, upload images, edit or delete messages, and manage user roles—all powered by Convex for real-time updates.",
    technologies: ["Next.js", "Convex", "Typescript", "Tailwind.css"],
    url: "https://metrack-git-main-sirtegs024s-projects.vercel.app",
    readme: "https://github.com/SIRTEGS024/METRACK"
  },
  {
    title: "Tegstock - Full Stack Inventory Management Dashboard",
    image: project1,
    description:
      "Tegstock is a full-stack inventory management dashboard designed for seamless inventory tracking, built with Next.js, Redux, Node.js, and AWS. The frontend features a responsive UI styled with Tailwind CSS, utilizing Material UI Data Grid for data handling, Redux Toolkit for state management, and Recharts for data visualization. The backend, powered by Node.js, Express, and Prisma, integrates PostgreSQL for structured data storage. Hosted on AWS, it leverages RDS for database management, EC2 for backend hosting, API Gateway for secure endpoints, Amplify for frontend deployment, and S3 for storage. Key features include real-time inventory tracking, advanced search and filtering, supplier management,and analytics, ensuring a scalable and efficient cloud-based solution.",
    technologies: ["Next.js", "Typescript", "Node.js", "Tailwind.css"],
    url: "https://main.d1exwyzl9jqwbo.amplifyapp.com",
    readme: "https://github.com/SIRTEGS024/TEGSTOCK-INVENTORY-MANAGEMENT"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, built with React and styled using Tailwind CSS, with animations powered by Framer Motion.",
    technologies: ["React", "Tailwind.css", "Framer Motion"],
    url: "",
    readme: ""
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria.",
  phoneNo: "+2348105642986",
  email: "kesienametitiri024@gmail.com",
};
