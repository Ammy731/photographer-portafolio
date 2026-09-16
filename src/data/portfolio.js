export const portfolioInfo = {
  /*
   * ======================================================
   * INFORMACIÓN GENERAL
   * ======================================================
   *
   * Este archivo concentra el contenido principal
   * del portafolio.
   *
   * De esta manera podemos cambiar textos,
   * fotografías y proyectos sin modificar
   * directamente los componentes visuales.
   * ======================================================
   */

  photographer: {
    name: "CDAVID",
    profession: "Fotógrafo deportivo y creador de contenido",
    location: "Cuenca, Ecuador",
  },

  /*
   * ======================================================
   * HERO
   * ======================================================
   */

  hero: {
    /*
     * Conservamos la identidad actual del hero.
     * Es una frase corta y relacionada directamente
     * con su especialidad principal: el deporte.
     */

    line1: "EL JUEGO",
    line2: "EN MOVIMIENTO.",

    /*
     * Áreas principales.
     *
     * No utilizamos Fitness como categoría principal,
     * ya que esos trabajos forman parte de colaboraciones
     * con marcas.
     */

    description: [
      "Fútbol",
      "Deportistas",
      "Marcas",
      "Contenido audiovisual",
    ],

    /*
     * FOTOGRAFÍA TEMPORAL
     *
     * Más adelante sustituiremos esta imagen
     * por la fotografía definitiva del hero.
     */

    image: "/images/hero-football.jpg",
  },

  /*
   * ======================================================
   * TRABAJOS DESTACADOS DE HOME
   * ======================================================
   *
   * IMPORTANTE:
   *
   * Las fotografías que estamos usando actualmente
   * son provisionales.
   *
   * La estructura y el orden sí representan
   * la dirección definitiva del portafolio.
   * ======================================================
   */

  selectedWork: [
    {
      id: 1,
      number: "01",

      category: "Fútbol",

      title: "Día de partido",

      description:
        "Cobertura deportiva",

      year: "2026",

      /*
       * Imagen temporal.
       */
      image: "/images/work/football.jpg",

      layout: "wide",
    },

    {
      id: 2,
      number: "02",

      category: "Deportistas",

      title: "Jugadores",

      description:
        "Sesiones · Marca personal · Contenido",

      year: "2026",

      /*
       * Imagen temporal.
       */
      image: "/images/work/players.jpg",

      layout: "portrait",
    },

    {
      id: 3,
      number: "03",

      category: "Marcas",

      title: "Contenido de marca",

      description:
        "Fotografía · Video · Redes sociales",

      year: "2026",

      /*
       * Esta fotografía actualmente pertenece
       * a un trabajo fitness, pero la consideramos
       * temporal hasta seleccionar la definitiva.
       */
      image: "/images/work/fitness.jpg",

      layout: "medium",
    },

    {
      id: 4,
      number: "04",

      category: "Comercial",

      title: "Proyectos comerciales",

      description:
        "Publicidad · Negocios · Contenido",

      year: "2026",

      /*
       * Imagen temporal.
       */
      image: "/images/work/projects.jpg",

      layout: "wide",
    },
  ],

    /*
   * ======================================================
   * PROYECTOS Y COLABORACIONES DESTACADAS
   * ======================================================
   *
   * Las imágenes utilizadas durante el desarrollo
   * son temporales.
   *
   * Más adelante se reemplazarán por fotografías
   * definitivas de cada proyecto.
   * ======================================================
   */

  featuredProjects: [
    {
      id: 1,
      number: "01",

      title: "Cuenca Jrs",

      subtitle:
        "Fotografía · Contenido · Community Management",

      type: "Club de fútbol",

      image: "/images/work/football.jpg",
    },

    {
      id: 2,
      number: "02",

      title: "LigaPro",

      subtitle:
        "Cobertura de fútbol profesional",

      type: "Fútbol profesional",

      image: "/images/gallery/football-03.jpg",
    },

    {
      id: 3,
      number: "03",

      title: "Jugadores",

      subtitle:
        "Sesiones · Marca personal · Contenido",

      type: "Deportistas",

      image: "/images/work/players.jpg",
    },

    {
      id: 4,
      number: "04",

      title: "Marcas",

      subtitle:
        "Campañas · Fotografía · Video · Redes",

      type: "Colaboraciones",

      image: "/images/work/fitness.jpg",
    },

    {
      id: 5,
      number: "05",

      title: "Comercial",

      subtitle:
        "Publicidad · Negocios · Contenido",

      type: "Proyectos independientes",

      image: "/images/work/projects.jpg",
    },
  ],

  /*
   * ======================================================
   * FILTROS DEL PORTAFOLIO
   * ======================================================
   *
   * Ordenados según la importancia real
   * dentro del trabajo del fotógrafo.
   * ======================================================
   */

  workCategories: [
    "Todos",
    "Fútbol",
    "Deportistas",
    "Marcas",
    "Comercial",
  ],

  /*
   * ======================================================
   * GALERÍA
   * ======================================================
   *
   * ATENCIÓN:
   *
   * Estas fotografías todavía NO constituyen
   * la selección final.
   *
   * Las clasificamos provisionalmente para poder
   * desarrollar y probar la interfaz.
   *
   * Más adelante realizaremos una curaduría real
   * fotografía por fotografía.
   * ======================================================
   */

  workGallery: [
    {
      id: 1,

      title: "Día de partido",

      category: "Fútbol",

      image:
        "/images/gallery/football-01.jpg",

      layout: "large",

      position: "center",
    },

    {
      id: 2,

      title: "Jugador",

      category: "Deportistas",

      image:
        "/images/gallery/player-01.jpg",

      layout: "portrait",

      position: "center",
    },

    {
      id: 3,

      title: "Partido",

      category: "Fútbol",

      image:
        "/images/gallery/football-02.jpg",

      layout: "medium",

      position: "center",
    },

    {
      id: 4,

      /*
       * Actualmente utilizamos una fotografía
       * de gimnasio para representar Marcas.
       *
       * Más adelante colocaremos la marca real
       * y la fotografía definitiva.
       */

      title: "Campaña de marca",

      category: "Marcas",

      image:
        "/images/gallery/fitness-01.jpg",

      layout: "square",

      position: "center",
    },

    {
      id: 5,

      /*
       * Aunque visualmente sea un retrato,
       * conceptualmente pertenece al trabajo
       * realizado con deportistas.
       */

      title: "Sesión de jugador",

      category: "Deportistas",

      image:
        "/images/gallery/portrait-01.jpg",

      layout: "portrait",

      position: "center",
    },

    {
      id: 6,

      title: "Juego",

      category: "Fútbol",

      image:
        "/images/gallery/football-03.jpg",

      layout: "large",

      position: "center",
    },

    {
      id: 7,

      title: "Proyecto comercial",

      category: "Comercial",

      image:
        "/images/gallery/commercial-01.jpg",

      layout: "medium",

      position: "center",
    },

    {
      id: 8,

      /*
       * Segunda fotografía provisional
       * asociada a una colaboración de marca.
       */

      title: "Contenido de marca",

      category: "Marcas",

      image:
        "/images/gallery/fitness-02.jpg",

      layout: "wide",

      position: "center",
    },
  ],
};