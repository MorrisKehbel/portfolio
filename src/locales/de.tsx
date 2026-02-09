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
    "Aktuell fokussiere ich mich auf Next.js, MERN Stack, TypeScript, KI-Integrationen, Flutter/Kotlin-Apps.",

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

  footerImprint: "Impressum",
  footerPrivacy: "Datenschutz",

  imprintNotice: () => (
    <>
      <strong>Hinweis</strong>
      <br />
      <p className="mt-2">
        Diese Website ist ein persönliches Portfolio-Projekt, das zu Bildungs-
        und Selbstdarstellungszwecken erstellt wurde.
        <br />
        <br />
        Die Inhalte dieses Portfolios wurden mit größter Sorgfalt erstellt. Für
        die Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr
        übernommen werden. Alle Inhalte, Designs und der Code dieser Website
        wurden vom Betreiber erstellt, sofern nicht anders angegeben. Marken und
        Logos Dritter bleiben Eigentum ihrer jeweiligen Inhaber.
        <br />
        <br />
        Bei Fragen oder Anliegen können Sie mich jederzeit per E-Mail
        kontaktieren oder das Kontaktformular auf dieser Website nutzen.
      </p>
    </>
  ),

  imprintText1: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
  imprintText2: "Anschrift wie oben",
  imprintText3: "Angaben gemäß § 5 Digitale-Dienste-Gesetz",
  imprintContact: "Kontakt",

  privacyText: () => (
    <>
      <strong className="my-2">Kontaktformular & E-Mail</strong>
      <br />
      <p className="mt-2">
        Wenn Sie mich über das Kontaktformular oder per E-Mail kontaktieren,
        werden die von Ihnen eingegebenen Daten ausschließlich zur Bearbeitung
        Ihrer Anfrage verarbeitet. Die Daten werden über Namecheap Inc.,
        übertragen, teilweise auf Servern in den USA, unter Einhaltung der
        EU-Standardvertragsklauseln. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald sie
        für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind.
      </p>
      <br />
      <strong className="my-2">Hosting</strong>
      <br />
      <p className="mt-2">
        Diese Website wird bei Vercel Inc., USA, gehostet. Technisch notwendige
        Daten (z. B. IP-Adressen) können dort zur Bereitstellung der Website
        verarbeitet werden. Vercel ist nach dem Data Privacy Framework (DPF)
        zertifiziert.
      </p>
      <br />
      <strong className="my-2">Externe Links</strong>
      <br />
      <p className="mt-2">
        Links zu GitHub oder LinkedIn leiten Sie zu den jeweiligen Plattformen
        weiter. Dort gelten die Datenschutzbestimmungen des jeweiligen
        Anbieters.
      </p>
      <br />
      <strong className="my-2">Cookies & Tracking</strong>
      <br />
      <p className="mt-2">
        Diese Website verwendet keine Cookies oder Drittanbieter-Tracking-Tools.
      </p>
      <br />
      <strong className="my-2">Ihre Rechte</strong>
      <br />
      <p className="mt-2">
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Widerspruch und Datenübertragbarkeit. Wenden Sie sich
        hierzu jederzeit an die im Impressum angegebenen Kontaktdaten. Zudem
        steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzbehörde
        zu.
      </p>
    </>
  ),

  projects: {
    imageTool: {
      title: "Bildverarbeitungstool: Schwarz-Weiß-Filter",
      description: "Ruby on Rails, JavaScript, Bootstrap, Chart.js",
      details:
        "Eine Rails-Anwendung zur Schwarz-Weiß-Konvertierung von Bildern per Drag & Drop. Alle Uploads werden nur temporär im Arbeitsspeicher verarbeitet und anschließend verworfen. Für eine schnelle und ressourcenschonende Verarbeitung kommt libvips zum Einsatz, angebunden über das image_processing-Gem. Ergänzend bietet die Anwendung eine interaktive Helligkeitsvisualisierung in Form eines Histogramms. Das Interface ist vollständig responsive und ermöglicht den direkten Download der verarbeiteten Bilder. Das Projekt zeigt meinen Ansatz, Performance, saubere Architektur und nutzerzentrierte Frontends auch bei klar fokussierten Tools miteinander zu verbinden.",
    },
    fairRentalPredictor: {
      title: "Machine Learning: Mietpreisprognose",
      description:
        "Next.js, TypeScript, Tailwind, Python (FastAPI), Docker, Scikit-Learn, MLflow, Make",
      details:
        "Als Abschlussprojekt im KI Kompakt Kurs entwickelte ich ein End-to-End ML-System zur Mietpreisvorhersage. Das Projekt deckte den gesamten Lebenszyklus ab, von Data Cleaning, Validierung und Feature Engineering bis hin zu Modelltraining, Evaluierung und Versionierung mittels MLflow. Die Performance wurde anhand von Metriken wie R², MAE, RMSE und MAPE bewertet und durch Residuenanalysen sowie Feature-Importance-Visualisierungen ergänzt. Die finale Lösung wurde über ein FastAPI-Backend bereitgestellt und mit einem Next.js-Frontend für Echtzeit-Vorhersagen verbunden. Dieses Projekt spiegelt meine Leidenschaft wieder, die Lücke zwischen angewandtem Machine Learning und Full-Stack-Entwicklung zu schließen und datengestützte Modelle in funktionale, nutzerorientierte Anwendungen zu verwandeln.",
    },
    bottshackathon2025: {
      title: "Hackathon Projekt: “BÄR BUDDY”",
      description:
        "React.js, TypeScript, Tailwind, OpenAI API Integration, Framer Motion",
      details:
        "Als Vertreter der WBS CODING SCHOOL beim Hackathon „Battle of the Tech Schools“ entwickelte ich in einem vielfältigen Team eine Lösung für Berlin Partner. Ziel war es, Newcomern den Zugang zu lokalen wirtschaftlichen und technologischen Angeboten zu erleichtern, sie zu vernetzen und ihre Integration in die Stadt zu beschleunigen. Wir entwickelten den Prototypen „BÄR BUDDY“, einen intelligenten, multilingualen Chatbot, der auf aktuellen gescrapten Daten zu lokalen Events und Jobangeboten basiert, wobei OpenAI als Fallback dient. Die Lösung visualisiert diese Echtzeit-Daten zudem auf einer interaktiven Karte, ergänzt durch ein QR-Code-System, das Vernetzung spielerisch fördert. Nach vier Tagen harter Arbeit sicherten wir uns den 3. Platz von 10 Teams. Ein großes Dankeschön an mein Team, die Zusammenarbeit war einfach großartig.",
    },
    portfolio: {
      title: "Portfolio-Übersicht: Persönliche Website",
      description: "Next.js, TypeScript, Tailwind, Framer Motion",
      details:
        "Das ist meine persönliche Portfolio-Website mit einem animierten Bento-Grid-System, einem Dark/Light-Modus und Sprachwechsel via Context API. Das Kontaktformular läuft direkt über Next.js API Routes mit Nodemailer. Ich wollte eine übersichtliche Website bauen, auf der man alle Inhalte auf einen Blick sieht und Besucher schnell die benötigten Infos finden können.",
    },
    moodsync: {
      title: "Tracker für mentale Gesundheit: “MoodSync”",
      description:
        "React.js, Tailwind, Express.js, MongoDB (mongoose), OpenAI API Integration",
      details:
        "MoodSync ist eine KI-gestützte Web-App für mentale Gesundheit, die als vierwöchiges Abschlussprojekt im Team entwickelt wurde. Basierend auf täglichen Tagebucheinträgen nutzt die App generative KI für personalisierte Zusammenfassungen und praktische Empfehlungen, die gesunde Gewohnheiten fördern sollen. Das intuitive Dashboard bereitet diese Insights visuell auf und nutzt Recharts zur Darstellung wöchentlicher Aktivitätsmuster und monatlicher Stimmungstrends. Ergänzend bietet ein AI-Chatbot individuelles Coaching, wobei sich alle KI-Funktionen über eine Einstellung komplett deaktivieren lassen. Dieses Projekt zeigt meine Fähigkeit, in einem agilen Team sinnvolle Nutzererlebnisse mit skalierbarer Full-Stack-Logik zu verbinden und eine professionelle End-to-End-Lösung bereitzustellen.",
    },
    pokemon: {
      title: "Strategisches Online-Spiel: Pokémon Battle Game",
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
