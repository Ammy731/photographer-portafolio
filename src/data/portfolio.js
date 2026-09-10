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
};