export default {
  global: {
    componenteFormativo: 'Manejo de las especies pecuarias',
    descripcionCurso:
      'Este componente aborda aspectos relacionados con      exigencias del mercado de alimentos y materias primas, que obligan a empresas agropecuarias a desarrollar procesos altamente eficientes, enfocados en la calidad y bienestar para las personas. Se afianzará en cómo, mediante un manejo animal basado en buenas prácticas pecuarias, se alcanzan altos estándares de eficiencia para obtener productos más competitivos, inocuos y diferenciados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Especie animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas de desarrollo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de manejo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instalaciones y alojamiento pecuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Espacio mínimo vital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mantenimiento',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Instalaciones según especie y fase de desarrollo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Equipos e Implementos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Funcionamiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de manejo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bienestar Animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Principios',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Comportamiento Animal',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Prácticas de bienestar animal',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Recepción de Animales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Procedimientos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Documentos sanitarios oficiales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Prácticas de manejo animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Protocolos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Programación',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Procedimientos técnicos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Gestación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Lactación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bavera, G.: Bocco, O.;, Beguet, H.; y Petryna, A. (2005). Crecimiento, desarrollo y precocidad. Cursos de Producción Bovina de Carne, FAV UNRC.',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/exterior/05-crecimiento_desarrollo_y_precocidad.pdf',
    },
    {
      referencia:
        'Fortín, A.; Perdomo, J. (2009). Determinación de la calidad del calostro bovino a partir de la densidad y de la concentración de IgG y del número de partos de la vaca y su efecto en el desarrollo de los terneros hasta los 30 días de edad.',
      link: 'https://bdigital.zamorano.edu/bitstream/11036/430/1/T2884.pdf',
    },
    {
      referencia:
        'Goicochea, J. (2016), Descorné zootécnico y quirúrgico en bovinos.',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/cria/206-Descorne.pdf',
    },
    {
      referencia:
        'Instituto colombiano agropecuario (2021). Resolución No 090464, definiciones.',
      link:
        'https://www.ica.gov.co/getattachment/74c359e3-9201-4db9-849f-98ab5a9e2d0b/2021R90464.aspx',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2021). Código de los animales terrestres, Capítulo 7.1.',
      link:
        'https://www.oie.int/es/que-hacemos/sanidad-y-bienestar-animal/bienestar-animal/',
    },
    {
      referencia: 'Poultrylife. (2019). Gallinas Ponedoras.',
      link:
        'https://poultrylife.com/gallinas-ponedoras/ciclo-de-vida-de-las-gallinas-ponedoras/',
    },
    {
      referencia:
        'SENASA (2015). Manual de bienestar animal, un enfoque práctico para el buen manejo de especies domésticas durante su tenencia, producción, concentración, transporte y faena.',
      link:
        'http://www.senasa.gob.ar/sites/default/files/ARBOL_SENASA/ANIMAL/BOVINOS_BUBALINOS/INDUSTRIA/ESTABL_IND/BIENESTAR/manual_de_bienestar_animal_especies_domesticas_-_senasa_-_version_1-2015.pdf',
    },
    {
      referencia: 'UAB (s.f.) Manejo y producción de porcino.',
      link:
        'http://llotjadevic.org/redaccio/arxius/imatgesbutlleti/manual porcino final.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cartílago',
      significado:
        'Tejido firme y flexible carente vasos sanguíneos que brinda apoyo en muchas partes del cuerpo, está en tráquea, bronquios, oído externo entre otros.',
    },
    {
      termino: 'Cauterización',
      significado:
        'Destrucción de tejido con instrumento caliente, corriente eléctrica o sustancia cáustica.',
    },
    {
      termino: 'Fecundación',
      significado:
        'Es la unión de espermatozoide con óvulo para el futuro inicio de una cría. La célula formada de esta unión dará el desarrollo a una embriogénesis. Este proceso se realiza en el interior del cuerpo de la hembra.',
    },
    {
      termino: 'Fosas Nasales',
      significado:
        'Las fosas nasales son dos cavidades óseas separadas por un delgado tabique nasal sagital, comunicadas con el exterior por los orificios nasales o narinas, y situadas por encima de la cavidad bucal.',
    },
    {
      termino: 'Glándula mamaria',
      significado:
        'Órgano glandular formado de tejido conjuntivo, grasa y tejido mamario que produce leche.',
    },
    {
      termino: 'Inflamación',
      significado:
        'Proceso por el cual se genera enrojecimiento, hinchazón (aumento de tamaño), dolor o sensación de calor en un área del cuerpo. Es una reacción de este para protegerse de las lesiones, las enfermedades o la irritación de los tejidos.',
    },
    {
      termino: 'Inmunoglobulinas',
      significado:
        'Proteínas de vital importancia para vida que circulan en el torrente sanguíneo y realizan una amplia variedad de funciones entre las principales está la contribución al sistema inmune.',
    },
    {
      termino: 'Malformación',
      significado:
        'Alteraciones anatómicas congénitas que ocurre en la etapa intrauterina que pueden ser sistémicas, orgánicas o extremidades.',
    },
    {
      termino: 'Parto',
      significado:
        'Expulsión del feto con membranas fetales después de cumplir el tiempo de gestación que garantiza el desarrollo completo del feto.',
    },
    {
      termino: 'Precoz',
      significado:
        'Que ocurre o sucede antes de tiempo que se considera habitual o necesario.',
    },
    {
      termino: 'Rudimento',
      significado:
        'Desarrollo imperfecto o primitivo de algo y hace referencia a los primeros trabajos de una disciplina.',
    },
    {
      termino: 'Unidad de gran ganado (UGG)',
      significado:
        'Es un equivalente de medición para manejar las cargas animales en los potreros bovinos una unidad gran ganado equivale a 450 kg, y se recomienda que por hectárea la carga sea de 0.65 U.G.G.',
    },
    {
      termino: 'Zona vulvar',
      significado:
        'Zona externa del órgano reproductivo de la hembra se compone de labios menores y mayores.',
    },
  ],
  complementario: [
    {
      tema: 'Características',
      referencia:
        'TvAgro, Ángel, J. (2016). Mejores Razas Bovinas Productoras de Leche en Colombia. [Video] YouTube. ',
      tipo: 'Video complementario',
      link: 'https://www.youtube.com/watch?v=O776f8snC00',
    },
    {
      tema: 'Instalaciones y alojamiento pecuario',
      referencia:
        'Facultad de medicina veterinaria y zootecnia –UNAM. (2016). Instalaciones y estructuras ganaderas. [Video] YouTube.',
      tipo: 'Video complementario',
      link: 'https://www.youtube.com/watch?v=aRCAt4se8PA',
    },
    {
      tema: 'Equipos e implementos',
      referencia:
        'Agrovícola yauyo´s. (2020).Cómo equipar tu galpón de pollos-gallinas para el máximo rendimiento. [Video] YouTube. ',
      tipo: 'Video complementario',
      link: 'https://www.youtube.com/watch?v=R4L1WISl0TA',
    },
    {
      tema: 'Bienestar animal',
      referencia:
        'OIE. (2021). Código sanitario para animales terrestres, Bienestar animal.',
      tipo: 'Documento de apoyo ',
      link:
        'https://www.oie.int/es/que-hacemos/normas/codigos-y-manuales/acceso-en-linea-al-codigo-terrestre/?id=169&L=1&htmfile=titre_1.7.htm',
    },
    {
      tema: 'Recepción de animales',
      referencia:
        'Central ganadera. (2020). Proceso de Recepción de Porcinos y Garantía de Bienestar Animal Central Ganadera S.A. [Video] YouTube.',
      tipo: 'Video de apoyo',
      link: 'https://www.youtube.com/watch?v=4jPbNllYtLg',
    },
    {
      tema: 'Prácticas de manejo animal',
      referencia:
        'Instituto nacional de carnes. (2020). Protocolo Buenas Prácticas de manejo animal. Versión 6. ',
      tipo: 'Documento de apoyo ',
      link:
        'https://www.inac.uy/innovaportal/file/11637/1/protocolo-inac-ba-bovino---predio-1.pdf',
    },
    {
      tema: 'Lactación',
      referencia:
        'Facultad veterinaria Universidad de Zaragoza España. (2018). Parto y manejo del lechón recién nacido. [Video] YouTube.',
      tipo: 'Video complementario',
      link: 'https://www.youtube.com/watch?v=6yXTlLWj_Fg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja, Espinal Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander, Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital, Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital, Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edison Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gomez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
