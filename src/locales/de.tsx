export const deMessages = {
  headline: () => (
    <>
      Lass uns digitale
      <br />
      Erlebnisse schaffen, die etwas <strong className="italic">bewegen</strong>
    </>
  ),

  aboutHi: "Moin",

  aboutText: () => (
    <>
      Ich bin <strong>Morris Kehbel</strong> und entwickle skalierbare, moderne
      Webanwendungen, die sauberen Code, Performance und durchdachtes Design
      vereinen. Immer offen für neue Technologien, entwickle ich KI-Features, um
      das Nutzererlebnis zu verbessern.
    </>
  ),

  aboutSubText:
    "Momentan liegt mein Fokus auf Next.js, Server-Aktionen mit KI-Integration, TypeScript, Flutter Apps sowie nutzerfreundlichen und optisch ansprechenden UI/UX-Systemen.",

  contact: "Haben Sie Fragen?",
  contact2: () => (
    <>
      Kontaktieren Sie <strong className="italic">mich</strong>
    </>
  ),
  contactName: "Vorname",
  contactName2: "Nachname",
  contactMail: "E-Mail-Adresse",
  contactCompany: "Firmenname",
  contactMsg: "Deine Nachricht",
  contactError:
    "Es gab ein Problem beim Senden deiner Nachricht. Überprüfe bitte deine Internetverbindung oder versuche es später erneut.",

  contactSnd: "Nachricht senden",
  contactLoading: "Senden...",
  contactSuccess: "Nachricht erfolgreich gesendet!",

  technologies: () => (
    <>
      Expertise <strong className="italic">&</strong> Technologien
    </>
  ),

  techNew: "NEU",

  projectTitle: () => (
    <>
      <strong className="italic">Meine</strong> Projekte
    </>
  ),

  projectSubTitle:
    "Eine Auswahl aktueller Arbeiten, die meine Fähigkeiten und Kreativität präsentieren.",

  projects: {
    portfolio: {
      title: "Persönliches Portfolio: Webpräsenz",
      description:
        "Next.js, TypeScript, Tailwind und Framer Motion animierte Sektionen.",
      details:
        "Dieses Projekt ist meine persönliche Portfolio-Website, entwickelt mit TypeScript und Next.js. Sie verfügt über ein responsives Grid-System mit animierten Sektionen dank Framer Motion, einen Dark/Light Mode sowie Sprachwechsel via Context API und ein Kontaktformular, das serverseitig über Next.js API Routes verarbeitet wird. Ziel war es, eine übersichtliche, benutzerfreundliche Website zu schaffen, auf der alle Inhalte auf einen Blick verfügbar sind und Nutzer schnell zu den gewünschten Informationen gelangen.",
    },
    moodsync: {
      title: "MoodSync: Smarte Web-App für mentales Wohlbefinden",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose) und OpenAI API Integration.",
      details:
        "Eine smarte Web-App für mentale Gesundheit, entwickelt in nur 4 Wochen als Gruppen-Abschlussprojekt im WBS-Trainingsprogramm. Die App nutzt tägliches Journaling und KI, um persönliche Zusammenfassungen und praktische Empfehlungen zu erstellen, die gesunde Gewohnheiten fördern und die Zielerreichung unterstützen. Das übersichtliche Dashboard bietet motivierende Tipps, zeigt wöchentliche Zusammenfassungen nach Kategorien, ermöglicht Emotionstracking im Monatsüberblick und lässt Nutzer mit einem KI-Chatbot für individuelle Unterstützung interagieren. Alles darauf ausgelegt, Balance, Selbstreflexion und mentales Wohlbefinden zu fördern.",
    },
    pokemon: {
      title: "Pokémon Battle Game: Strategisches Online-Spiel",
      description: "React.js, Tailwind, Express.js und MongoDB (mongoose)",
      details:
        "Ein interaktives Pokémon-Kampfspiel, entwickelt als Gruppenprojekt im WBS-Trainingsprogramm. Das Frontend wurde mit React.js (Vite), React Router und Tailwind CSS umgesetzt, das Backend basiert auf Node.js mit Express. MongoDB Atlas mit Mongoose speichert persistente Daten, während die PokeAPI Pokémon-Daten bereitstellt. Spieler können sechs Pokémon für ihr Team auswählen, gegen zufällige Gegner kämpfen und ihren Fortschritt auf dem Leaderboard verfolgen. Eine RESTful API sorgt für die Kommunikation zwischen Frontend und Backend, und durch ein strukturiertes State-Management werden strategische Kämpfe unterstützt.",
    },
    travelagency: {
      title: "Reise Agentur Webseite: Entdecke Reiseziele weltweit",
      description: "React.js, Tailwind, Express.js und PostgreSQL (sequelize)",
      details:
        "Eine Reise-Agentur-Website, die in sehr kurzer Zeit entwickelt wurde, um eine einfache und benutzerfreundliche Reisesuche zu ermöglichen. Nutzer können über ein Suchfeld nach Reisezielen suchen, was sie zu einer Übersichtsseite mit kuratierten Destinationen führt. Alle Standortdaten werden über eine eigene API aus einer PostgreSQL-Datenbank (gehostet auf NeonDB) bereitgestellt. Das Ziel des Projekts war es, einen funktionalen und benutzerfreundlichen Prototypen zu schaffen, der schnellen Zugang zu Reiseinspiration und wichtigen Informationen ermöglicht.",
    },
    shop: {
      title: "Shop Webseite: Online-Shop",
      description: "React.js und Tailwind",
      details:
        "Eine Shop-Webseite mit grundlegenden E-Commerce-Funktionen. Die Produkte werden über die FakeStoreAPI geladen, nach Kategorien sortiert und in einer übersichtlichen Produktgalerie dargestellt. Über die integrierte Suchleiste lassen sich Artikel schnell finden, während Nutzer Produkte direkt in den Warenkorb legen können. Der Warenkorb bietet eine klare Übersicht aller ausgewählten Items mit der Möglichkeit, diese anzupassen oder zu entfernen. Das Projekt entstand in kurzer Zeit als funktionsfähige Demo-Anwendung.",
    },
  },
};
