export const deMessages = {
  headline: () => (
    <>
      Lass uns digitale
      <br />
      Erlebnisse schaffen, die etwas <em className="italic">bewegen</em>
    </>
  ),

  aboutHi: "Moin",

  aboutText: () => (
    <>
      Ich bin <strong className="text-xl">Morris Kehbel</strong> und entwickle
      gerne skalierbare, moderne Webanwendungen, die sauberen Code, Performance
      und durchdachtes Design vereinen. Stets neugierig, lerne ich neue
      Technologien und erstelle KI-Features, um das Nutzererlebnis zu
      verbessern.
    </>
  ),

  aboutSubText:
    "Momentan liegt mein Fokus auf Next.js, Server-Aktionen mit KI-Integration, TypeScript sowie nutzerfreundlichen und optisch ansprechenden UI/UX-Systemen.",

  contact: () => <>Haben Sie Fragen?</>,
  contact2: () => (
    <>
      Kontaktieren Sie <em className="italic">mich</em>
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
      <em className="italic">Kern</em> Technologien
    </>
  ),

  techNew: "NEU",

  projectTitle: "Meine Projekte",

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
  },
};
