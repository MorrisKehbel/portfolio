export const enMessages = {
  headline: () => (
    <>
      Let’s build digital
      <br />
      experiences that <em className="italic">matter</em>
    </>
  ),
  contact: () => <>Have some questions?</>,
  contact2: () => (
    <>
      Contact <em className="italic">me</em>
    </>
  ),
  contactName: "First Name",
  contactName2: "Last Name",
  contactMail: "E-Mail Address",
  contactCompany: "Company Name",
  contactMsg: "Your Message",
  contactError:
    "There was a problem sending your message. Please check your internet connection or try again later.",

  contactSnd: "Send Message",
  contactLoading: "Sending...",
  contactSuccess: "Message sent successfully!",

  technologies: () => (
    <>
      <em className="italic">Core</em> Technologies
    </>
  ),

  techNew: "NEW",

  projectTitle: "My Projects",

  projectSubTitle:
    "A selection of recent work showcasing my skills and creativity.",

  projects: {
    portfolio: {
      title: "Personal Portfolio: Web Showcase",
      description:
        "Next.js, TypeScript, Tailwind and Framer Motion animated sections.",
      details:
        "This project is my personal portfolio website, built with TypeScript and Next.js. It features a responsive grid system with animated sections using Framer Motion, a dark/light mode and language switch via Context API, as well as a contact form powered by Next.js API Routes for server-side handling. The goal was to create a clear, user-friendly website where all content is available at a glance and users can quickly access the information they need.",
    },
    moodsync: {
      title: "MoodSync: Smart Mental Wellness Web App",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose) and OpenAI API Integration.",
      details:
        "A smart mental wellness web app built in just 4 weeks as a final group project for the WBS training program. Through daily journaling, the app uses AI to generate personalized summaries and actionable recommendations that support healthier habits and goal achievement. Its intuitive dashboard not only offers motivational tips and recommendations for daily tasks, but also lets users view a summary of activities by category over the past week, track their mood with monthly overviews, and interact with an AI chatbot for personalized guidance. All designed to promote balance, self-awareness, and meaningful mental well-being.",
    },
    pokemon: {
      title: "Pokémon Battle Game: Strategic Online Game",
      description: "React.js, Tailwind, Express.js and MongoDB (mongoose)",
      details:
        "An interactive Pokémon battle game developed as a group project in the WBS training program. The frontend was built with React.js (Vite), React Router, and Tailwind CSS, while the backend uses Node.js with Express. MongoDB Atlas with Mongoose handles persistent data, and Pokémon data is provided via the PokeAPI. Players can select six Pokémon for their team, battle random opponents, and track their progress on the leaderboard. A RESTful API ensures communication between frontend and backend, and structured state management supports strategic battles.",
    },
  },
};
