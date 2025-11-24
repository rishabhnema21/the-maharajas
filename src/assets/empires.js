const empires = [
  {
    id: "magadha",
    name: "The Magadha Empire",
    date: "600–300 B.C",
    theme_color: "#B91C1C",
    accent_color: "#F87171",
    thumbnail: "magadha.jpg",
    images: ["ashoka.png"],
    highlighted: [
      "Magadha",
      "Bimbisara",
      "Ajatashatru",
      "Chandragupta",
      "Ashoka",
      "Pataliputra",
    ],
    short_desc:
      "The earliest powerhouse of ancient India — where alliances, ambition, and warfare forged the first great stride toward empire. Magadha was not merely a kingdom — it was the birthplace of power, philosophy, and rulers who would alter the destiny of the subcontinent.",
    long_desc: [
      "Rising from the fertile Gangetic plains, Magadha became a center of innovation, trade, and military might.",
      "Under rulers like Bimbisara and Ajatashatru, the empire expanded through strategy, diplomacy, and fierce battlefield dominance.",
      "With the rise of Pataliputra, Magadha transformed into a political nucleus — a foundation upon which future empires like the Mauryans would stand.",
    ],
    capital: "Rajagriha → Pataliputra",
    notable_rulers: ["Bimbisara", "Ajatashatru", "Mahapadma Nanda"],
    peak: "Under Ajatashatru and the Nanda Dynasty",
  },

  {
    id: "mauryan",
    name: "The Mauryan Empire",
    date: "322–185 B.C",
    theme_color: "#704214",
    accent_color: "#E8B86D",
    thumbnail: "mauryan.jpg",
    images: ["chantakya.png", "ashoka.png"],
    highlighted: [
      "Mauryan",
      "Maurya",
      "Chandragupta",
      "Chanakya",
      "Ashoka",
      "Bindusara",
      "Megasthenes",
    ],
    short_desc:
      "The first true empire of the Indian subcontinent — disciplined, strategic, and unprecedented in scale. From royal courts to distant provinces, the Mauryan rule shaped law, governance, warfare, and global diplomacy with unmatched brilliance.",
    long_desc: [
      "Forged by the will of Chandragupta and the intellect of Chanakya, the Mauryan Empire introduced centralized administration and a structured economy.",
      "Bindusara expanded the empire further, making it one of the most influential realms of its age.",
      "Ashoka transformed Mauryan rule from conquest to conscience — spreading Buddhism across continents through edicts carved in eternal stone.",
    ],
    capital: "Pataliputra",
    notable_rulers: ["Chandragupta Maurya", "Bindusara", "Ashoka"],
    peak: "Reign of Emperor Ashoka",
  },

  {
    id: "gupta",
    name: "The Gupta Empire",
    date: "320–550 A.D",
    theme_color: "#C58500",
    accent_color: "#FFE082",
    thumbnail: "guptas.jpg",
    images: ["samudragupta.png"],
    highlighted: [
      "Guptas",
      "Gupta",
      "Samudragupta",
      "Chandragupta II",
      "Kalidasa",
      "Nalanda",
    ],
    short_desc:
      "An era of refinement, philosophy, and excellence — the Guptas ushered a golden age where mathematics, literature, astronomy, and art flourished, changing the intellectual landscape of the world forever.",
    long_desc: [
      "The Gupta rule brought stability, prosperity, and cultural evolution across regions.",
      "Samudragupta’s campaigns strengthened the empire, while Chandragupta II expanded influence through both diplomacy and strength.",
      "Thinkers like Aryabhata and poets like Kalidasa flourished, shaping India’s eternal cultural identity.",
    ],
    capital: "Pataliputra → Ujjain",
    notable_rulers: ["Samudragupta", "Chandragupta II", "Kumaragupta"],
    peak: "Gupta Golden Age",
  },

  {
    id: "chola",
    name: "The Chola Empire",
    date: "300 B.C–1279 A.D",
    theme_color: "#CC7722",
    accent_color: "#FFCC8A",
    thumbnail: "chola.jpg",
    images: ["rajendra.png"],
    image_pos: "object-center",
    highlighted: [
      "Chola",
      "Cholas",
      "Rajendra",
      "Rajendra Chola",
      "Rajaraja",
      "Tamilakam",
      "Thanjavur",
    ],
    short_desc:
      "A maritime and architectural marvel — the Cholas built temples like mountains, fleets like nations, and administration that shaped southern India for centuries with dignity, power, and cultural identity.",
    long_desc: [
      "Under Rajaraja I and Rajendra Chola I, the empire expanded across oceans reaching Sri Lanka, Maldives, and Southeast Asia.",
      "The Brihadeeswarar Temple stands as a monumental testimony to Chola genius.",
      "Their naval dominance spread Tamil culture across Asia, influencing language, art, worship, and trade for generations.",
    ],
    capital: "Thanjavur",
    notable_rulers: ["Rajaraja Chola I", "Rajendra Chola I"],
    peak: "Under Rajendra Chola I",
  },

  {
    id: "delhi_sultanate",
    name: "The Delhi Sultanate",
    date: "1206–1526 A.D",
    theme_color: "#1C4C47",
    accent_color: "#4ADEB8",
    thumbnail: "delhisultan.jpg",
    images: ["qutub.jpg"],
    image_pos: "object-center",
    highlighted: [
      "Delhi Sultanate",
      "Qutb al-Din Aibak",
      "Alauddin Khilji",
      "Tughlaq",
      "Lodi",
      "Slave Dynasty",
    ],
    short_desc:
      "A turbulent yet transformative era — marked by conquest, administration, and cultural fusion. The Delhi Sultanate reshaped politics, warfare, architecture, and societal dynamics across northern India.",
    long_desc: [
      "It began with the Slave Dynasty and expanded through Khilji and Tughlaq ambitions.",
      "Alauddin Khilji’s reforms strengthened military control and revenue systems.",
      "Architectural marvels like Qutub Minar emerged alongside a fusion of Persian, Turkic, and Indian influences.",
    ],
    capital: "Delhi",
    notable_rulers: ["Alauddin Khilji", "Muhammad bin Tughlaq", "Ibrahim Lodi"],
    peak: "Under Alauddin Khilji",
  },

  {
  id: "rajputana",
  name: "The Rajputana",
  date: "700–1600 A.D",
  theme_color: "#C2410C", // deep royal saffron / sandstone warrior tone
  accent_color: "#FACC15", // gold-like highlight for royalty & heraldry
  thumbnail: "chittorgarh.jpg",
  images: ["rajput-warrior.png"],
  highlighted: [
    "Rajputana",
    "Mewar",
    "Marwar",
    "Sisodia",
    "Rathore",
    "Prithviraj Chauhan",
    "Maharana Pratap",
    "Chittorgarh"
  ],
  short_desc:
    "A land of warriors, honor, and unbreakable pride — Rajputana stood not merely as a kingdom, but as a legacy of courage, sacrifice, and royal splendor. From Mewar to Marwar, their forts, loyalty, and immortal valor shaped the very idea of resistance and Rajadharma.",
  long_desc: [
    "Rajputana was a constellation of powerful warrior clans — bound by codes of honor, dynastic rivalries, and fierce loyalty to land and lineage.",
    "Mewar emerged as the heart of Rajput resistance, with rulers like Prithviraj Chauhan and Maharana Pratap becoming eternal symbols of bravery.",
    "From the desert citadel of Jaisalmer to the towering Chittorgarh, their architecture stood as living statements of war, devotion, and sovereignty."
  ],
  capital: "No single capital — major centers included Chittorgarh, Ajmer, Jodhpur, and Jaipur",
  notable_rulers: [
    "Prithviraj Chauhan",
    "Maharana Pratap",
    "Rana Sanga",
    "Rao Jodha",
    "Rani Padmavati (legendary)"
  ],
  peak: "Under leaders like Rana Sanga and Maharana Pratap — during Mughal confrontation era"
},


  {
    id: "mughal",
    name: "The Mughal Empire",
    date: "1526–1857 A.D",
    theme_color: "#04bf30",
    accent_color: "#017d1e",
    thumbnail: "taj.jpg",
    images: ["akbar.png", "shahjahan.png"],
    image_pos: "object-bottom",
    highlighted: [
      "Mughal",
      "Mughals",
      "Akbar",
      "Babur",
      "Shah Jahan",
      "Aurangzeb",
      "grandeur",
      "Taj Mahal",
    ],
    short_desc:
      "A dynasty of grandeur, refinement, and imperial ambition — where art, architecture, governance, and culture flourished, defining the visual and political identity of medieval India.",
    long_desc: [
      "Founded by Babur, strengthened by Humayun, and glorified under Akbar through tolerant governance and administrative reforms.",
      "Jahangir patronized art, while Shah Jahan immortalized love in marble — the Taj Mahal.",
      "Aurangzeb expanded territory to its peak, though internal strain followed.",
    ],
    capital: "Agra → Delhi → Lahore (temporary)",
    notable_rulers: ["Akbar", "Shah Jahan", "Aurangzeb"],
    peak: "Under Shah Jahan & Aurangzeb",
  },

  {
    id: "maratha",
    name: "The Maratha Empire",
    date: "1674–1818 A.D",
    theme_color: "#E65100",
    accent_color: "#FFA726",
    thumbnail: "maratha.jpg",
    images: ["shivaji.png"],
    image_pos: "object-top",
    highlighted: [
      "Maratha",
      "Shivaji",
      "Peshwas",
      "Bajirao",
      "Swaraj",
      "Raigad",
    ],
    short_desc:
      "A symbol of resilience and Swaraj — born from hills, forts, and unyielding spirit. The Maratha Empire challenged massive rule and shaped the final turning point of Indian sovereignty before colonial rule.",
    long_desc: [
      "Founded by Chhatrapati Shivaji Maharaj, the empire prioritized military innovation, swift cavalry, and strategic fort warfare.",
      "Under the Peshwas, the Marathas dominated vast regions of the subcontinent.",
      "Bajirao I led campaigns undefeated, establishing Maratha supremacy across northern India.",
    ],
    capital: "Raigad → Pune",
    notable_rulers: [
      "Chhatrapati Shivaji Maharaj",
      "Sambhaji",
      "Peshwa Bajirao I",
    ],
    peak: "Under Peshwa Bajirao I",
  },
];


export default empires
