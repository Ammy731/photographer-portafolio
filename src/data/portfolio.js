export const portfolioInfo = {
  /*
   * ======================================================
   * INFORMACIÓN GENERAL DEL FOTÓGRAFO
   * ======================================================
   */

  photographer: {
    name: "YOUR NAME",
    profession: "Sports Photographer",
    location: "Ecuador",
  },

  /*
   * ======================================================
   * HERO
   * ======================================================
   */

  hero: {
    line1: "THE GAME",
    line2: "IN MOTION.",

    description: [
      "Football",
      "Athletes",
      "Portraits",
      "Fitness",
    ],

    image: "/images/hero-football.jpg",
  },

  /*
   * ======================================================
   * SELECTED WORK
   *
   * Esta información alimenta la sección de trabajos
   * destacados de la página principal.
   *
   * Más adelante estos mismos datos podrían venir
   * desde una API o CMS sin cambiar el componente visual.
   * ======================================================
   */

  selectedWork: [
    {
      id: 1,

      number: "01",

      category: "Football",

      title: "Matchday",

      description: "Professional Football",

      year: "2026",

      image: "/images/work/football.jpg",

      /*
       * wide = fotografía horizontal grande
       */
      layout: "wide",
    },

    {
      id: 2,

      number: "02",

      category: "Athletes",

      title: "Player Stories",

      description: "Portraits & Personal Branding",

      year: "2026",

      image: "/images/work/players.jpg",

      /*
       * portrait = fotografía vertical
       */
      layout: "portrait",
    },

    {
      id: 3,

      number: "03",

      category: "Fitness",

      title: "Strength In Motion",

      description: "Fitness & Training",

      year: "2026",

      image: "/images/work/fitness.jpg",

      layout: "medium",
    },

    {
      id: 4,

      number: "04",

      category: "Projects",

      title: "Selected Projects",

      description: "Editorial & Commercial",

      year: "2026",

      image: "/images/work/projects.jpg",

      layout: "wide",
    },
  ],

    /*
   * ======================================================
   * CATEGORÍAS DEL PORTAFOLIO
   * ======================================================
   */

  workCategories: [
    "All",
    "Football",
    "Athletes",
    "Fitness",
    "Portraits",
    "Commercial",
  ],

  /*
   * ======================================================
   * GALERÍA GENERAL
   *
   * Cada fotografía tiene:
   *
   * category  → filtro al que pertenece
   * layout    → tamaño dentro de la composición
   * position  → permite controlar el encuadre
   *
   * Esto nos permite diseñar cada fotografía
   * individualmente sin modificar el componente.
   * ======================================================
   */

  workGallery: [
    {
      id: 1,
      title: "Matchday",
      category: "Football",
      image: "/images/gallery/football-01.jpg",
      layout: "large",
      position: "center",
    },

    {
      id: 2,
      title: "The Player",
      category: "Athletes",
      image: "/images/gallery/player-01.jpg",
      layout: "portrait",
      position: "center",
    },

    {
      id: 3,
      title: "90 Minutes",
      category: "Football",
      image: "/images/gallery/football-02.jpg",
      layout: "medium",
      position: "center",
    },

    {
      id: 4,
      title: "Strength",
      category: "Fitness",
      image: "/images/gallery/fitness-01.jpg",
      layout: "square",
      position: "center",
    },

    {
      id: 5,
      title: "Portrait Study",
      category: "Portraits",
      image: "/images/gallery/portrait-01.jpg",
      layout: "portrait",
      position: "center",
    },

    {
      id: 6,
      title: "Game Emotion",
      category: "Football",
      image: "/images/gallery/football-03.jpg",
      layout: "large",
      position: "center",
    },

    {
      id: 7,
      title: "Performance",
      category: "Commercial",
      image: "/images/gallery/commercial-01.jpg",
      layout: "medium",
      position: "center",
    },

    {
      id: 8,
      title: "Training",
      category: "Fitness",
      image: "/images/gallery/fitness-02.jpg",
      layout: "wide",
      position: "center",
    },
  ],
};


