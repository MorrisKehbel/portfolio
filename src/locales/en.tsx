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
      scalable applications with thoughtful design, clean code, and strong
      performance. I’m passionate about the fine details, like the natural flow
      of an interface, and the logic working behind the scenes. Whether I’m
      experimenting with new technologies like AI, fine-tuning performance, or
      tackling long late-night coding sessions, I’m all in!
    </>
  ),

  aboutSubText:
    "Currently focused on Next.js, MERN Stack, TypeScript, AI integrations, Flutter/Kotlin apps.",

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

  footerImprint: "Imprint",
  footerPrivacy: "Privacy Policy",

  imprintNotice: () => (
    <>
      <h3 className="mb-2 font-bold">Notice</h3>
      <p>
        This website is a personal portfolio project created for educational and
        self-presentation purposes.
      </p>
      <p>
        The contents of this portfolio were created with great care. However, no
        guarantee is given for the accuracy, completeness, or timeliness of the
        information. All content, design, and code on this website were created
        by the site owner unless otherwise noted. Third-party trademarks and
        logos remain the property of their respective owners.
      </p>
      <p>
        If you have any questions or concerns, you can contact me at any time
        via email or by using the contact form on this website.
      </p>
    </>
  ),

  imprintText1: "Responsible for content pursuant to Section 18 (2) MStV",
  imprintText2: "Address as stated above",
  imprintText3: "Information pursuant to Section 5 DDG (Germany)",
  imprintContact: "Contact",

  privacyText: () => (
    <>
      <div>
        <h3 className="mb-2 font-bold">Contact Form & Email</h3>
        <p>
          When you contact me via the contact form or email, the submitted data
          is processed solely for handling your request. The data is processed
          by Namecheap Inc., partially on servers in the USA, in compliance with
          the EU Standard Contractual Clauses. The legal basis is Art. 6(1)(f)
          GDPR (legitimate interest). Data is deleted when no longer required.
        </p>
      </div>
      <div>
        <h3 className="mb-2 font-bold">Hosting</h3>
        <p>
          This website is hosted by Vercel Inc., USA. Personal data (e.g., IP
          addresses) may be processed there for technical delivery of the
          website. Vercel is certified under the Data Privacy Framework (DPF).
        </p>
      </div>
      <div>
        <h3 className="mb-2 font-bold">External Links</h3>
        <p>
          Links to GitHub or LinkedIn redirect you to the respective platforms.
          Where the respective platform's privacy policy applies.
        </p>
      </div>
      <div>
        <h3 className="mb-2 font-bold">Cookies & Tracking</h3>
        <p>This website does not use cookies, tracking, or analytics tools.</p>
      </div>
      <div>
        <h3 className="mb-2 font-bold">Your Rights</h3>
        <p>
          You have the right to access, correct, delete, restrict processing,
          object, and data portability. You can exercise these rights at any
          time via the contact details in the imprint. You also have the right
          to lodge a complaint with the relevant data protection authority.
        </p>
      </div>
    </>
  ),

  projects: {
    imageTool: {
      title: "Image Tool: Black & White Processing",
      description: "Ruby on Rails, JavaScript, Bootstrap, Chart.js",
      details:
        "A Rails application for black-and-white image processing with drag-and-drop uploads. All uploads are handled temporarily in memory and discarded immediately after processing. For fast and resource-efficient image conversion, libvips is used via the image_processing gem. In addition, the application provides an interactive brightness histogram to visualize processing effects. The interface is fully responsive and allows direct downloads of the processed images. This project reflects my approach to combining performance, clean architecture, and user-focused frontends, even in small, clearly scoped tools.",
    },
    fairRentalPredictor: {
      title: "Machine Learning: Rental Price Prediction",
      description:
        "Next.js, TypeScript, Tailwind, Python (FastAPI), Docker, Scikit-Learn, MLflow, Make",
      details:
        "For my final project in the AI Compact course, I designed and developed an end-to-end machine learning system to predict rental prices based on real estate data. The project covered the full lifecycle, from data cleaning, validation and feature engineering to model training, evaluation, and versioning using MLflow, with performance assessed through metrics including R², MAE, RMSE, and MAPE, complemented by residual analysis and feature importance visualizations. The final solution was deployed via a FastAPI backend, connected to a Next.js frontend enabling real-time predictions for end users. This project reflects my passion for bridging the gap between applied machine learning and full-stack development, turning data-driven models into functional, user-facing applications.",
    },
    bottshackathon2025: {
      title: "Hackathon Project: “BÄR BUDDY”",
      description:
        "React.js, TypeScript, Tailwind, OpenAI API Integration, Framer Motion",
      details:
        "Representing WBS CODING SCHOOL at the 'Battle of the Tech Schools' hackathon, I collaborated in a cross-functional team to build a solution for Berlin Partner. The goal was to help newcomers navigate the local economy and technological resources, connect with others, and integrate more quickly into the city. We designed and prototyped 'BÄR BUDDY', an intelligent, multilingual chatbot driven by up-to-date scraped information on local events and job opportunities, with OpenAI serving as a fallback. The solution also visualizes these real-time insights on an interactive map, alongside a gamified QR-code networking system. After four days of hard work, we secured 3rd place out of 10 teams. A huge thanks to my team, collaborating with you was simply amazing.",
    },
    portfolio: {
      title: "Portfolio Showcase: Personal Website",
      description: "Next.js, TypeScript, Tailwind, Framer Motion",
      details:
        "This is my personal portfolio website, featuring a responsive bento grid system with animated sections, dark/light mode and language switch via Context API, as well as contact form handled directly via Next.js API Routes using Nodemailer. My goal was to create a clear, user-friendly website where all content is available at a glance and visitors can quickly find the information they need.",
    },
    moodsync: {
      title: "Smart Mental Health Tracker: “MoodSync”",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose), OpenAI API Integration",
      details:
        "MoodSync is an AI-powered mental wellness app developed as a collaborative four-week final project. Through daily journaling, the app uses generative AI to provide personalized summaries and actionable recommendations to support healthier habits. Its intuitive dashboard displays these insights and leverages Recharts to visualize weekly activity patterns and monthly mood trends. Users can further interact with an AI chatbot for personalized guidance, supported by a dedicated privacy setting to disable all AI features. This project was a great opportunity to create meaningful user experiences with scalable full-stack logic, highlighting my ability to collaborate in an agile team and deliver a polished end-to-end solution.",
    },
    pokemon: {
      title: "Strategic Online Game: Pokémon Battle Game",
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
