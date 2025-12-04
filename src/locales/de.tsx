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
      Ich bin <strong>Morris</strong> und liebe es, Ideen in moderne,
      skalierbare Webanwendungen mit durchdachtem Design, sauberem Code und
      starker Performance umzusetzen. Besonders wichtig sind mir dabei die
      feinen Details, wie den natürlichen Flow einer Oberfläche, und in der
      Logik im Hintergrund. Ob beim Experimentieren mit neuen Technologien wie
      KI, beim Performance-Tuning oder in langen nächtlichen Coding-Sessions,
      ich bin dabei!
    </>
  ),

  aboutSubText:
    "Aktuell fokussiere ich mich auf Next.js, Server Actions mit KI, TypeScript, Flutter-Apps und zugängliche UI-Systeme.",

  contact: "Noch Fragen?",
  contact2: () => (
    <>
      Kontaktiere <strong className="italic">mich</strong>
    </>
  ),
  contactName: "Vorname",
  contactName2: "Nachname",
  contactMail: "E-Mail-Adresse",
  contactCompany: "Firmenname",
  contactMsg: "Deine Nachricht",
  contactError:
    "Es gab ein Problem beim Senden deiner Nachricht. Überprüfe bitte deine Internetverbindung oder versuche es später erneut.",
  contactError2: "Bitte gültige E-Mail und Nachricht eingeben.",
  contactErrorEmail: "Bitte gültige E-Mail-Adresse eingeben.",
  contactErrorMsg: "Bitte Nachricht eingeben.",

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
    bottshackathon2025: {
      title: "Hackathon Projekt: “BÄR BUDDY”",
      description:
        "React.js, TypeScript, Tailwind, OpenAI API Integration, Framer Motion",
      details:
        "Als Teil des Hackathons „Battle of the Tech Schools“ durfte ich die WBS Coding School als Webentwickler vertreten. Die Aufgabe kam von Berlin Partner: Viele Neuankömmlinge in Berlin haben Schwierigkeiten, Zugang zu wirtschaftlichen Chancen zu finden. Gesucht war eine digitale Lösung, die Newcomern hilft, lokale wirtschaftliche und technologische Angebote zu entdecken, sich zu vernetzen und sich schneller einzuleben. Unser Team (3x Data Science, 1x UI/UX, 1x Web Dev) entwickelte „BÄR BUDDY“, einen All-in-One Chatbot, der auf Webseiten integriert werden kann. Die Hauptfunktionen des Projekts umfassten einen intelligenten, multilingualen Chat, der lokale Events, Jobangebote und Deutschkurse aus gescrapten Daten bereitstellt, mit einer OpenAI-Integration als Fallback. Eine interaktive Karte liefert Empfehlungen, während ein Signup-/Signin-System mit QR-Code-Konzept die Vernetzung zwischen Unternehmen und Nutzer*innen erleichtert. Nach vier Tagen harter Arbeit sicherten wir uns den 3. Platz von 10 Teams. Ein großes Dankeschön an mein Team, die Zusammenarbeit war einfach großartig.",
    },
    portfolio: {
      title: "Portfolio-Übersicht: Persönliche Website",
      description: "Next.js, TypeScript, Tailwind, Framer Motion",
      details:
        "Das ist meine persönliche Portfolio-Website mit einem animierten Bento-Grid-System, einem Dark/Light-Modus und Sprachwechsel via Context API. Das Kontaktformular läuft direkt über Next.js API Routes mit Nodemailer. Ich wollte eine übersichtliche Website bauen, auf der man alle Inhalte auf einen Blick sieht und Besucher schnell die benötigten Infos finden können.",
    },
    moodsync: {
      title: "MoodSync: Smarte Web-App für mentale Gesundheit",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose), OpenAI API Integration",
      details:
        "Eine smarte Web-App für mentale Gesundheit, entwickelt in nur 4 Wochen als Gruppen-Abschlussprojekt im WBS-Trainingsprogramm. Die App nutzt tägliches Journaling und KI, um persönliche Zusammenfassungen und praktische Empfehlungen zu erstellen, die gesunde Gewohnheiten fördern und die Zielerreichung unterstützen. Das übersichtliche Dashboard bietet motivierende Tipps, zeigt wöchentliche Zusammenfassungen nach Kategorien, ermöglicht Emotionstracking im Monatsüberblick und lässt Nutzer mit einem KI-Chatbot für individuelle Unterstützung interagieren. Alles darauf ausgelegt, Balance, Selbstreflexion und mentales Wohlbefinden zu fördern. Das Projekt war eine super Gelegenheit, mit KI zu experimentieren, ein intuitives Dashboard zu entwerfen und mehr über die Gestaltung sinnvoller Benutzererfahrungen zu lernen.",
    },
    pokemon: {
      title: "Pokémon Battle Game: Strategisches Online-Spiel",
      description: "React.js, Tailwind, Express.js, MongoDB (mongoose)",
      details:
        "Als Gruppenprojekt bei WBS haben wir ein interaktives Pokémon-Battle-Game entwickelt. Du kannst ein Team aus sechs Pokémon zusammenstellen, gegen zufällige Gegner kämpfen und deinen Fortschritt auf einem Leaderboard verfolgen. Wir haben eine RESTful API mit MongoDB zur Verwaltung von Benutzern und Leaderboard-Daten genutzt, Pokémon-Daten von der PokeAPI eingebunden und ein strukturiertes State-Management implementiert, damit die Kämpfe strategisch bleiben. Die Entwicklung dieses Spiels hat mir nicht nur viel Spaß gemacht, sondern mir auch wertvolle Erfahrungen in der Full-Stack-Entwicklung und in der Koordination komplexer Spielelogik vermittelt.",
    },
    travelagency: {
      title: "Reise Agentur Webseite: Entdecke Reiseziele",
      description: "React.js, Tailwind, Express.js, PostgreSQL (sequelize)",
      details:
        "Dieses Projekt ist ein in kurzer Zeit entwickelter Prototyp, der ein übersichtliches und intuitives Browsing-Erlebnis für Reisen bietet. Du kannst nach Reisezielen suchen und dir auf einer Übersichtsseite zusammengestellte Orte ansehen. Alle Standortdaten kommen von einer selbst entwickelten API, die mit einer PostgreSQL-Datenbank auf NeonDB verbunden ist.",
    },
    shop: {
      title: "Online-Shop: E-Commerce Web App",
      description: "React.js, Tailwind",
      details:
        "Ich habe diesen Shop als kleines Demo-Projekt gebaut, um die Funktionen eines Online-Shops auszuprobieren. Die Produkte werden aus der FakeStoreAPI abgerufen, nach Kategorien sortiert und in einer übersichtlichen Produktgalerie angezeigt. Mithilfe der Suchfunktion kannst du die gewünschten Artikel schnell finden und sie direkt in den Warenkorb legen. Dort hast du die Möglichkeit, sie anzupassen oder zu entfernen. Das Projekt war eine gute Gelegenheit, den Aufbau eines funktionsfähigen Prototyps eines Online-Shops zu bauen und gleichzeitig an benutzerfreundlichen Features und klaren Layouts zu üben.",
    },
  },
};
