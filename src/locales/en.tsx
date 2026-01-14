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
      I’m <strong>Morris</strong>, and I love turning ideas into modern,
      scalable web applications with thoughtful design, clean code, and strong
      performance. I’m passionate about the fine details, like the natural flow
      of an interface, and the logic working behind the scenes. Whether I’m
      experimenting with new technologies like AI, fine-tuning performance, or
      tackling long late-night coding sessions, I’m all in!
    </>
  ),

  aboutSubText:
    "Currently focused on Next.js, Server Actions with AI integration, TypeScript, Flutter apps and accessible UI systems.",

  contact: "Have some questions?",
  contact2: () => (
    <>
      Contact <strong className="italic">me</strong>
    </>
  ),
  contactName: "First Name",
  contactName2: "Last Name",
  contactMail: "Email Address",
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
    fairRentalPredictor: {
      title: "Machine Learning: Rental Price Prediction",
      description:
        "Next.js, TypeScript, Tailwind, Python (FastAPI), Docker, Scikit-Learn, MLflow, Make",
      details:
        "For my final project in the AI Compact course, I designed and developed an end-to-end machine learning system to predict rental prices based on real estate data. The project encompassed the entire lifecycle: from data cleaning and validation to feature engineering of key attributes like location and amenities. Multiple models were trained, evaluated, and versioned (Champion-Challenger setup) using MLflow, with performance assessed through metrics including R², MAE, RMSE, and MAPE, complemented by residual analysis and feature importance visualizations. The final solution was deployed via a FastAPI backend, connected to a Next.js frontend, enabling real-time predictions for end users. This project reflects my passion for bridging the gap between applied machine learning and full-stack development, turning data-driven models into functional, user-facing applications.",
    },
    bottshackathon2025: {
      title: "Hackathon Project: “BÄR BUDDY”",
      description:
        "React.js, TypeScript, Tailwind, OpenAI API Integration, Framer Motion",
      details:
        "As part of the “Battle of the Tech Schools” hackathon, I had the opportunity to represent WBS Coding School as a web developer. The challenge was issued by Berlin Partner: many newcomers in Berlin face difficulties accessing economic opportunities. The goal was to create a digital solution that helps newcomers discover local economic and technological resources, connect with others, and integrate more quickly into the city. Our team (3x Data Science, 1x UI/UX, 1x Web Dev) designed and prototyped “BÄR BUDDY”, an all-in-one chatbot that can be integrated into websites. The project's core features include an intelligent, multilingual chat that provides up-to-date information on local events, job opportunities, and German language courses in Berlin. The data is sourced from web scraping, with OpenAI integration as a fallback for additional responses. An interactive map offers recommendations, while a separate signup/signin system with a QR code concept enables easy networking between companies and users. After four days of hard work, we secured 3rd place out of 10 teams. A huge thanks to my team, collaborating with you was simply amazing.",
    },
    portfolio: {
      title: "Portfolio Showcase: Personal Website",
      description: "Next.js, TypeScript, Tailwind, Framer Motion",
      details:
        "This is my personal portfolio website, featuring a responsive bento grid system with animated sections, dark/light mode and language switch via Context API, as well as contact form handled directly via Next.js API Routes using Nodemailer. My goal was to create a clear, user-friendly website where all content is available at a glance and visitors can quickly find the information they need.",
    },
    moodsync: {
      title: "MoodSync: Smart Mental Health Web App",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose), OpenAI API Integration",
      details:
        "A smart mental wellness web app built in just 4 weeks as a final group project for the WBS training program. Through daily journaling, the app uses AI to generate personalized summaries and actionable recommendations to support healthier habits and goal achievement. Its intuitive dashboard not only offers motivational tips and recommendations for daily tasks, but also lets users view a summary of activities by category over the past week, track their mood with monthly overviews, and interact with an AI chatbot for personalized guidance. All designed to explore solutions that promote balance, self-awareness, and meaningful mental well-being. This project was a great opportunity to experiment with AI, design an intuitive dashboard, and learn about creating meaningful user experiences.",
    },
    pokemon: {
      title: "Pokémon Battle Game: Strategic Online Game",
      description: "React.js, Tailwind, Express.js, MongoDB (mongoose)",
      details:
        "An interactive Pokémon battle game developed as a group project in the WBS training program. You can pick six Pokémon for your team, battle random opponents, and track your progress on a leaderboard. We used a RESTful API with MongoDB to handle user authentication and leaderboard data, PokeAPI for the Pokémon data and a structured state management to support strategic gameplay. Building this game was super fun and taught me a lot about full-stack development and coordinating complex game logic.",
    },
    travelagency: {
      title: "Travel Agency Website: Explore Destinations",
      description: "React.js, Tailwind, Express.js, PostgreSQL (sequelize)",
      details:
        "This project was a short-term prototype to showcase a clean and intuitive travel browsing experience. You can search for destinations and view curated travel locations on an overview page. All location data is served via a custom API connected to a PostgreSQL database on NeonDB. It was fun to build a functional prototype with focus on making exploring travel inspiration simple and enjoyable.",
    },
    shop: {
      title: "Online Store: E-Commerce Web App",
      description: "React.js, Tailwind",
      details:
        "I built this shop website as a short demo project to explore core e-commerce interactions. Products are fetched from the FakeStoreAPI, sorted into categories, and displayed in a clean product gallery. You can search for items, add them to a shopping cart, and adjust or remove selections. This project was a fun way to practice building a functional prototype of an online store, focusing on user-friendly features and clear layouts.",
    },
  },
};
