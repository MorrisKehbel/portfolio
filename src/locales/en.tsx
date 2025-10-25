export const enMessages = {
  headline: () => (
    <>
      Let’s build digital
      <br />
      experiences that <strong className="italic">matter</strong>
    </>
  ),

  aboutHi: "Hey",
  aboutText: () => (
    <>
      I’m <strong>Morris Kehbel</strong> and I develop modern, scalable web
      applications that combine clean code, performance, and thoughtful design.
      Always learning and exploring new technologies and implementing AI
      features to enhance user experiences.
    </>
  ),

  aboutSubText:
    "Currently focused on Next.js, server actions with AI integration, TypeScript, Flutter Apps and accessible UI systems.",

  contact: "Have some questions?",
  contact2: () => (
    <>
      Contact <strong className="italic">me</strong>
    </>
  ),
  contactName: "First Name",
  contactName2: "Last Name",
  contactMail: "E-Mail Address",
  contactCompany: "Company Name",
  contactMsg: "Your Message",
  contactError:
    "There was a problem sending your message. Please check your internet connection or try again later.",
  contactError2: "Please enter a valid email and message.",
  contactErrorEmail: "Please enter a valid email address.",
  contactErrorMsg: "Please enter a message.",

  contactSnd: "Send Message",
  contactLoading: "Sending...",
  contactSuccess: "Message sent successfully!",

  technologies: () => (
    <>
      Skills <em className="italic font-bold">&</em> Technologies
    </>
  ),

  techNew: "NEW",

  projectTitle: () => (
    <>
      <strong className="italic">My</strong> Projects
    </>
  ),

  projectSubTitle:
    "A selection of recent work showcasing my skills and creativity.",

  projects: {
    bottshackathon2025: {
      title: "Hackathon Project: “BÄR BUDDY” – Battle of the Tech Schools 2025",
      description:
        "React.js, TypeScript, Tailwind und Framer Motion animierte Sektionen.",
      details:
        "As part of the “Battle of the Tech Schools” hackathon, I had the opportunity to represent WBS Coding School as a web developer. The challenge was issued by Berlin Partner: many newcomers in Berlin face difficulties accessing economic opportunities. The goal was to create a digital solution that helps newcomers discover local economic and technological resources, connect with others, and integrate more quickly into the city. Our team (3x Data Science, 1x UI/UX, 1x Web Dev) developed “BÄR BUDDY”, an all-in-one chatbot that can be integrated into websites. The project's core features included an intelligent, multilingual chat that displays local events, job offers, and programs from scraped data sources (with OpenAI integration as a fallback), an interactive map with personalized recommendations and a signup/signin system with a QR code concept for easy networking between companies and users. After four days of hard work, we secured 3rd place out of 10 teams. A huge thanks to my team, collaborating with you was simply amazing.",
    },
    portfolio: {
      title: "Personal Portfolio: Web Showcase",
      description:
        "Next.js, TypeScript, Tailwind and Framer Motion animated sections.",
      details:
        "This project is my personal portfolio website, built with Next.js and TypeScript. It features a responsive grid system with animated sections using Framer Motion, a dark/light mode and language switch via Context API, as well as a contact form powered by Next.js API Routes for server-side handling. The goal was to create a clear, user-friendly website where all content is available at a glance and users can quickly access the information they need.",
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
    travelagency: {
      title: "Travel Agency Website: Explore Destinations Worldwide",
      description: "React.js, Tailwind, Express.js and PostgreSQL (sequelize)",
      details:
        "A travel agency website built in a very short timeframe to showcase a clean and intuitive travel browsing experience. Users can search for destinations via a search field, which leads them to an overview page with curated travel locations. All location data is served from a custom API connected to a PostgreSQL database hosted on NeonDB. The goal of the project was to create a functional, user-friendly prototype that delivers quick access to travel inspiration and essential information.",
    },
    shop: {
      title: "Shop Website: Online Store",
      description: "React.js and Tailwind",
      details:
        "A shop website with essential e-commerce features. Products are fetched from the FakeStoreAPI, sorted into categories, and displayed in a clear product gallery. The integrated search bar allows users to quickly find items, while products can be added directly to the shopping cart. The cart provides an organized overview of all selected items with options to adjust or remove them. The project was created in a short time as a demo application.",
    },
  },
};
