<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Instalaciones y alojamiento pecuario
    
    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Para el manejo de los animales y la obtención de sus mejores rendimientos es necesario contar con instalaciones que les ofrezcan las condiciones mínimas de confort, seguridad, protección y tranquilidad que estos requieren e, igualmente, dar al productor la comodidad que necesita para realizar las prácticas de manejo de la explotación productiva. 
    
    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Tanto las instalaciones como los alojamientos en los que permanecen los animales deben ofrecer un entorno seguro tanto para los animales como para las personas que laboran en la unidad productiva, siempre con principios de bienestar animal y la salud de los trabajadores, independientemente de la clase de explotación, de su capacidad. 
    separador


    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1. Tipos

    p.mb-4 Dentro de las instalaciones y alojamientos existen diferentes tipos para cada unidad pecuaria a trabajar dependiendo de las capacidades económicas de cada producción y necesidades de cada animal es importante conocer e identificar las instalaciones que mejor se adapten al sistema pecuario.

    .row.justify-content-center.mb-4
      .col-md-4.align-items-center
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 Los diferentes tipos de instalaciones dependen principalmente de la explotación pecuaria y del recurso de inversión, existen alojamientos tradicionales en los cuales su inversión es mínima y se utilizan elementos propios de los predios pecuarios como lo son guaduas, madera, entre otros para darle un control y cuidado al animal, por otro lado están los alojamientos sistematizados en los cuales su infraestructura es mucho más costosa y se logra un control de las condiciones medioambientales con ayuda de la tecnología, logrando así un mayor bienestar animal y eliminando todas las condiciones de estrés. 
      .col-md-8
        figure
          img(src='@/assets/curso/tema2/img2.jpg', alt='Pollos')

    p.mb-4 Existen también instalaciones que son necesarias y de común denominador para cualquier sistema productivo o explotación pecuaria, como son la bodega de almacenamiento, los silos de almacenamiento de alimento (en caso de necesitarlo), la bodega de almacenamiento de alimento y las áreas de oficinas, a continuación, se puede ver cada una de estas instalaciones:
    
    .row.mb-4
      .col-md-12
        .tarjeta.fondo-slyder.mb-5
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Tradicionales
                p Para este tipo de producción requieren unas instalaciones mucho más sencillas y practicas ya que los animales se alojan en los diferentes potreros, o áreas donde se alimentan y realizan su ciclo productivo durante la gran parte de su vida requiere una menor infraestructura  a comparación de la sistematizada o cerrados, por ende sus costos de producción son mucho menores, Los materiales que se usen en la construcción de deben ser de fácil adquisición y de bajo costo, para minimizar los costos de producción pero que al mismo tiempo ofrezcan larga durabilidad, resistencia y confort al animal especialmente en las zonas donde hay una interacción directa con el animal.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img1.png', alt='Ternero')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversidad
                p Las especies pecuarias se pueden trabajar bajo diferentes esquemas, los cuales van desde los más tecnificados y avanzados hasta los más básicos y elementales, lo cual de por sí demuestra la amplitud de modelos y la diversidad de montajes por medio de los que se puede ejercer la actividad productiva. 
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='Galpón de gallinas')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Rendimientos
                p Las especies animales que se emplean para la producción pecuaria son fruto de un proceso de selección que se ha llevado a cabo durante miles de años, tomando en cuenta precisamente variables como sus rendimientos y capacidad productiva.  
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img1.png', alt='Chivo')
            
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Domesticación
                p Otras de las características de las especies animales es la capacidad que poseen para relacionarse con el ser humano y adaptarse al manejo, lo que se ha denominado un proceso de domesticación, el cual es supremamente importante para desarrollar sistemas pecuarios como los que se conocen hoy día. 
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='Animales de granja')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='Materiales')
            
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='Materiales')
            
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img6.png', alt='Materiales')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img7.png', alt='Materiales')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img8.png', alt='Materiales')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img9.png', alt='Materiales')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img10.png', alt='Materiales')

            .row
              .col-md-6.mb-4.mb-md-0
                h5 Diversos usos y subproductos
                p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img11.png', alt='Materiales')
    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2.	Espacio mínimo vital

    p.mb-3 Es importante para la construcción de las diferentes áreas de producción conocer y reconocer las necesidades de espacio mínimo vital para cada animal, teniendo en cuenta las diferentes fases productivas ya que son factores determinantes del mismo.
    p.mb-5 Se conoce como espacio mínimo vital al espacio mínimo necesario para vivir ya sea un animal o un grupo de animales, se puede medir por unidades de animales por área, buscando no causar estrés en el animal y con un pilar importante para no alterar el animal como son las Buenas Prácticas de Bienestar Animal (ver tabla 1).

    .row.justify-content-center.mb-4
      .col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Espacio mínimo vital por especie
      .col-md-8
        .tabla-a
          table
            thead
              tr
                th.text-center Especie
                th.text-center Densidad
            tbody
              tr
                td.text-center Bovinos (Unidades Gran Ganado)
                td.text-center 0.65 U.G.G. / hectárea (pastoreo) 
              tr
                td.text-center Equinos 
                td.text-center 1 animal por cada 4x4 metros 
              tr
                td.text-center Porcinos 
                td.text-center
                  p 20-30 kg/ 0.30 m2/animal
                  p 30-50 kg /0.40 m2/animal
                  p 50-85 kg /0.55 m2/animal
                  p 85-110 kg/0.65 m2/animal
              tr
                td.text-center Aves ponedoras 
                td.text-center 
                  p Clima frio 6-7 aves / m2
                  p Clima cálido 5 aves/ m2
              tr
                td.text-center Pollos de engorde 
                td.text-center
                  p 1 - 3 días &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50-60 aves/m2
                  p 4 – 6 días &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40-50 aves/m2
                  p 7 – 9 días &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30-40 aves/m2
                  p 10 – 12 días &nbsp; &nbsp; &nbsp; &nbsp; 20-30 aves/m2
                  p 13 – 15 días &nbsp; &nbsp; &nbsp; &nbsp; 10-20 aves/m2
                  p 16 – 19 días &nbsp; &nbsp; &nbsp; &nbsp; 10 aves/m2
                  p 20 días en adelante 8 aves /m2

              tr
                td.text-center Pequeños rumiantes 
                td.text-center 
                  p Cría 3 animales /m2
                  p Adulta 1 animal/ 3-5 metros 
    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h4 2.3.	Mantenimiento

    p.mb-4 El mantenimiento de las instalaciones tiene como objetivo evitar las diferentes averías y fallos, asegurando el funcionamiento ideal y disponibilidad.
    p.mb-4 En las producciones pecuarias, el estado de las instalaciones es fundamental, no solo para que se mantenga la producción en niveles ideales, sino para obtener el mejor beneficio productivo de los animales.}
    p.mb-4 Es importante conocer los tipos de mantenimiento que se deben realizar en las producciones según sus necesidades y condiciones productivas para ser aplicadas:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-3.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/flip1.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Mantenimiento preventivo
              p Este tipo de tareas tiene como objetivo principal reducir todos los riesgos, fallas y posibles daños en las instalaciones, es importante tener en cuenta las programaciones de mantenimiento de cada producción.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/flip2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Mantenimiento correctivo
              p El mantenimiento correctivo consiste en reparar la avería después de producirse, es importante realizarla lo más rápido posible después de que sucede ya que si es una avería que afecte un área productiva importante puede causar retrasos importantes y por ende perdidas económicas considerables.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/flip3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Mantenimiento predictivo
              p La importancia de este tipo de mantenimiento es la recopilación y análisis de datos que permiten realizar estrategias de mantenimiento, si se detectan datos o valores que para su análisis pueden ser raros o de cuidado se puede considerar un mantenimiento preventivo.

    p.mb-2 La programación de mantenimiento de las diferentes instalaciones está condicionada al sistema productivo y al tipo de instalación, allí radica la programación y periodicidad de las diferentes tareas o actividades. 
    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h4 2.4.	Instalaciones según especie y fase de desarrollo	
    
    p.mb-4 Las instalaciones en las explotaciones pecuarias son construidas y desarrolladas para      a brindar las mejores condiciones a las especies pecuarias y las personas que las manejan, debido a esto se realiza en algunos sistemas productivos la separación estructural de cada etapa productiva teniendo en cuenta condiciones especiales requeridas para cada área.   

    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h3.mb-0 Aves de corral 

    .row 
      figure
        img(src='@/assets/curso/tema2/animales1.jpg', alt='Animales de granja')
    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Las instalaciones requeridas para las producciones avícolas dependen del sistema productivo utilizado en el predio ya que un sistema productivo intensivo requiere unas instalaciones mucho más sofisticadas, el alojamiento debe ser un ambiente controlado y duradero ya sea de tipo tradicional o sistematizado. Para la producción de avicultura intensiva es necesario contar con laboratorios (en lo cual no se va a profundizar) y en galpones.

    p.mb-4 Los galpones son la instalación de alojamiento más importante en el sistema pecuario avícola ya que allí es donde se alojan las aves durante todo su ciclo productivo, para la elaboración y construcción de estos se deben tener en cuenta ciertas recomendaciones de localización, orientación y materiales de fabricación para lograr un mayor confort y aprovechamiento del lugar. A continuación, se pueden ver sus características:

    .row.justify-content-center.mb-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Localización")
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/imgslyder.png', alt='Granja')
          .col-md-9.mb-4.mb-md-0
            p Se recomienda que según el tipo de explotación avícula los galpones deben construirse en un terreno con buen drenaje y una corriente natural, donde las corrientes de aire no sean tan fuertes se recomienda aprovechar si hay árboles para así regular la temperatura y utilizarlos de barrera para romper el viento. Debe estar en un lugar de fácil supervisión lejos del ruido y cualquier causal de estrés para el animal lejos de las aguas estancadas o tierras con tendencia a inundarse. 

        .row.align-items-center(titulo="Orientación")
          .col-md-12.mb-md-2
            p La orientación del galpón es importante según la zona en la que se va a construir y las condiciones climáticas de la misma, ya sea para clima frío y templado o para clima cálido.
          .col-md-3.mb-md-2
            figure
              img(src='@/assets/curso/tema2/imgslyder1.png', alt='Orientación para clima frío y templado')
          .col-md-9.mb-md-2
            h5.mb-3 Clima frio y templado:
            p.mb-5 Este clima se considera desde los 15 y 20 grados centígrados donde el eje más largo del galpón se direccione de norte a sur esto para lograr una mayor temperatura provocada por la luz solar que el este permanentemente se posiciona sobre el galpón.
            h5.mb-3 Clima cálido:
            p.mb-5 Las condiciones de clima cálido se presentan a temperaturas mayores de los 20 grados centígrados donde el eje del galpón se debe ubicar de manera de oriente a occidente para así tener periodos de sombra y regular un poco la temperatura.

        .row.align-items-center(titulo="Materiales de fabricación")
          .col-md-12.mb-md-4
            p Los materiales empleados en la construcción de galpones generalmente son estructuras elaboradas con hierro y hormigón o ladrillos en algunas unidades pecuarias se emplean mallas de alambre para ayudar a la eliminación de gases y evaporación del calor. 
            p Los galpones en la actualidad se pueden dividir en dos clases o tipos dependiendo su tecnología aplicada y características estos son: los galpones tradicionales y los galpones mucho más modernos con tecnología para el control y confort medioambiental que son galpones de ambiente controlado.

          .col-md-3.mb-4
            figure
              img(src='@/assets/curso/tema2/imgslyder2.png', alt='Galpón de pollos')
          .col-md-9
            h5 Galpones tradicionales:
            p Son los más comunes y antiguos donde se alojan los animales en ocasiones, solo se cuenta, con medios de aireación por ventiladores, el uso de cortinas para controlar las condiciones ambientales y generar un mejor ambiente para el animal.
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/imgslyder3.png', alt='Galpón con trabajador')
          .col-md-9
            h5 Galpones de ambiente controlado:
            p Son galpones con un sistema tecnológico de regulación e información contando con un sistema controlado de ventilación, refrigeración por evaporación o aspersión de agua para generar un ambiente más fresco, o sistemas de calefacción automática para generar un ambiente más cálido mucho más utilizado en el manejo del pollito. Este también cuenta con sistema de iluminación para brindar al pollo una luz constante así eliminado los factores negativos del fotoperiodo.
            
    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h3.mb-0 Cerdos

    .row.mb-4
      .col-md-12
        figure
          img(src='@/assets/curso/tema2/animales2.jpg', alt='Cerdos')

    p.mb-4 Las instalaciones de los diferentes sistemas productivos porcícolas cuentan con infraestructuras para las diferentes etapas productivas de los animales, estas edificaciones dependen del número y fase productiva que alojen y siempre tendrán en cuenta como mínimo unos aspectos importantes para el manejo animal:    

    .row 
      .col-md-6
        .crd.clr-paleYellow2.p-4.mb-4
          p.mb-0 <b>a)</b> La localización de cada nave en el contexto global de las edificaciones de la granja con objeto de minimizar y facilitar el trasiego de animales dentro y entre naves. 
      .col-md-6
        .crd.clr-paleYellow3.p-4.mb-4
          p.mb-0 <b>b)</b> El volumen y, especialmente, la superficie construida total y útil para los animales, que junto al tipo de suelo, el tamaño de los grupos y a la distribución del utillaje, ha de constituir la base para el control físico y social de los animales.
      .col-12
        .crd.clr-paleYellow4.p-4.mb-4
            .row
              .col-md-5
                p.mb-4 <b>c)</b> Las características propias del edificio que han de permitir el control climático del espacio interior. Entre estas características son especialmente importantes: 
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right
                    | El grado de aislamiento térmico que proporcionan suelos, paredes, cubierta, puertas y ventanas. 
                  li 
                    i.fas.fa-angle-right
                    | El sistema de ventilación elegida y sus mecanismos de control. 
                  li 
                    i.fas.fa-angle-right
                    | Los posibles sistemas de refrigeración y/o calefacción que se puedan instalar.  
              .col-md-7
                figure
                  img(src='@/assets/curso/tema2/img12.jpg', alt='Industria de cerdos')

    p.mb-4 En los sistemas productivos porcícolas de ciclo cerrado, las principales instalaciones son las siguientes: 

    .row.justify-content-center.mb-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Área de gestación")
          .col-md-12.mb-4.mb-md-0
            p.mb-4 Esta área cuenta con una jaula por cerda donde se encontrara la cerda desde el momento de la inseminación hasta su traslado a la sala de maternidad (110 días más o menos), esta jaula deberá se confortable para el animal donde se pueda parar y acostar con facilidad pero evitando que tenga mucho espacio para no provocar lesiones ya que el peso que pueden alcanzar en esta etapa puede ser muy alto, de esta manera también se facilita el manejo frente a la detección de celo y preñez , la alimentación y demás prácticas que son de vital importancia.
          .col-md-3
            figure.mb-4
              img(src='@/assets/curso/tema2/acordeon1.png', alt='Cerdo montando una hembra')
          .col-md-9
            h5 Corral de primerizas:
            p Estructura sin paredes, pero con muros, que faciliten el ingreso del macho para realizar la primera estimulación acelerando el estro en las hembras.
          .col-md-3
            figure.mb-4
              img(src='@/assets/curso/tema2/acordeon2.png', alt='Cerdos')
          .col-md-9
            h5 Corral de verracos:
            p.mb-4 El corral de verracos debe estar lo más cerca de la sala de colecta y esta sala de colecta deberá estar cerca al laboratorio para evitar alteraciones en el semen y lesiones en los reproductores. 
            p.mb-4  Estos corrales deberán ser individuales y deben contar con mínimo 6 metros cuadrados con divisiones de 150 cm para evitar fugas o intentos de fugas ya que su temperamento es fuerte y al sentir la presencia de otro macho puede causar peleas. 
            p.mb-4  Los pisos deben ser consistentes y si protuberancias ya que estas irregularidades pueden causar lesiones o fracturas, las puertas generalmente son de metal reforzado y con tranca para evitar aperturas indeseadas.
          
        .row.align-items-center(titulo="Área de maternidad")
          .col-md-5.mb-md-2
            p.mb-4 En el área de maternidad es donde se comenten la gran mayoría de errores debido a que no tomamos en cuenta las diferencias de temperatura que existe entre la cerda lactante y la cría recién nacida por esta razón la sala de maternidad debe construirse bajo condiciones que brinde confort tanto a las madres como a las crías.
            p.mb-4 Estas instalaciones deben construirse de manera que facilite la limpieza de los animales y de las instalaciones debe tener una ventilación ideal para evitar alteraciones en la producción lechera de la madre y por consiguiente una mala nutrición del lechón. 
            p.mb-2 Como medidas recomendadas para las jaulas tanto de la cerda como de las crías son de 1,80 m de ancho y 2,40 de largo.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/acordeon3.png', alt='cerdos amantando')
          
        .row.align-items-center(titulo="Destete / transición")
          .col-md-5.mb-md-2
            p.mb-4En estas instalaciones ingresan los lechones cuando son separados de sus madres, estos corrales tienen formas rectangulares para alojar de 15 a 20 cerdos con medidas recomendadas de 2 metros de ancho por 4.20 metros de largo.
            p.mb-4 Dentro de esta área se utilizan los cajones de recría los cuales constan de un piso de paja o una cama utilizada brindando unas áreas de reposo de los animales con adecuado aislamiento térmico, libres de corrientes de aire, dando al lechón un lugar de escondite y confort ya que son áreas calientes.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/acordeon4.png', alt='Cerdos jovenes')
          
        .row.align-items-center(titulo="Crecimiento engorde")
          .col-md-5.mb-md-2
            p.mb-4En Este corral es donde permanecen los animales por el mayor periodo de tiempo las áreas de engorde cuentan con condiciones y características especiales donde el corral es un corral más largo que ancho donde se debe pensar en la ventilación de los animales, disponer de un techo, piso de concreto con una pendiente de lavado y desagüe donde son más o menos 5% para facilitar el lavado de los corrales, es importante tener en cuenta determinar las áreas de deyección para así asegurar que los corrales permanezcan limpios y libres de materia fecal.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/acordeon5.png', alt='Corral de cerdos')
          
        .row(titulo="Área de cuarentena")
          .col-md-5.mb-md-2
            p.mb-4En El área de cuarentena es aquel lugar en el predio destinado a aislar los animales ya sea por sospecha o riesgo a ser transmisores o tener una enfermedad, para no afectar el sistema de bioseguridad establecido en la granja. 
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/acordeon6.png', alt='Cerdo en cuarentena')

    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h3.mb-0 Bovinos

    .row.mb-4
      .col-md-12
        figure
          img(src='@/assets/curso/tema2/animales3.jpg', alt='Bovinos')

    p.mb-4 En la ganadería bovina la gran mayoría de producciones de ganadería de carne son de tipo extensivo lo cual requiere unas instalaciones más de tipo tradicional y un poco rudimentarias, siendo más importante las instalaciones necesarias destinadas al cargue y descargue, como también todas aquellas para la práctica, ya sea para realizar actividades sanitarias como vacunaciones, fumigaciones, baños y todo tipo de tareas que estos requieran, mientras que para la producción de leche se requiere tener condiciones e infraestructura ideal para realizar el proceso de extracción de la leche y según el tipo de producción para el alojamiento de las vacas productivas. 
    p.mb-4 En los sistemas productivos bovinos las principales instalaciones son las siguientes:

    h4.mb-4 Instalaciones para la recepción

    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-primario1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En las ganaderías bovinas el transporte de los animales se efectúa por medio de camiones o a pie es importante tener en cuenta en la construcción, adecuar un lugar especial para la recepción o despacho de animales llamado embarcadero, el cual consta de una plataforma que debe tener un pendiente no superior al 8 % para evitar caídas de los animales, y contar con unas barras a los laterales creando un pasillo, también cuentan con unas puertas corredizas para evitar que el ganado se escape y facilitando las labores de arreo y embarque.
    
    h4.mb-4 Corrales de manejo

    p.mb-4  Este corral es un corral diseñado para todas las labores de manejo animal que requieran en el predio pecuario como lo son el descornado, herrado, vacunación, curación, entre otros. Puede ser construido de materiales como madera, hierro, madera plástica entre otros elementos que por su resistencia se pueden usar el cual cuenta de barras de forma horizontal y vertical asegurando que los animales no se escapen.   
    p.mb-4  Este corral debe contar con diferentes áreas las cuales son divididas de la siguiente forma:

    .row.justify-content-center.mb-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Corrales de retención")
          .col-md-5.mb-md-2
            p.mb-4 Son corrales diseñados para separar el ganado en números muchos más fáciles de manejar o en la categoría que deseen ya sea sexo, etapa productiva, lote, etc. Es recomendable que no sobre pase las medidas de 15x15 mts, este debe contar con puertas de salida que conducen al pasillo, callejón.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/1.png', alt='cerdos amantando')
          
        .row.align-items-center(titulo="Pasillo, callejón")
          .col-md-5.mb-md-2
            p.mb-4En Lugar por donde se conduce el ganado para llegar al embudo.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/2.png', alt='Cerdos jovenes')
          
        .row.align-items-center(titulo="Embudo")
          .col-md-5.mb-md-2
            p.mb-4  Mantiene a los animales enfilados y con muy poco ángulo de movilidad, facilitando así su conducción y en algunas situaciones se realizan labores en esta área principalmente labores de vacunación.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/3.png', alt='Corral de cerdos')
          
        .row(titulo="Brete o apretadero")
          .col-md-5.mb-md-2
            p.mb-4En Diseñado para diferentes prácticas de manejo animal, es una forja de tubos de hierro y acero resistente con acabados pulidos para evitar lastimar al animal cuenta con una puerta delantera generalmente son corredizas o por medio de acción de palancas cuyo objetivo es sostener al animal por el cuello así asegundo la cabeza manteniendo fijo al animal, en la parte de atrás cuenta con una puerta corrediza, lateralmente algunas cuentan con fierros móviles para facilitar el trabajo.
            p.mb-4 Existen diseños de apretaderos acondicionados con básculas para pesaje animal.
          .col-md-7.mb-md-2
            figure
              img(src='@/assets/curso/tema2/4.png', alt='Cerdo en cuarentena')

    h4.mb-4 Salas de ordeño 

    p.mb-4  Dentro de las instalaciones para la producción de leche en el ganado bovino y pequeños rumiantes encontramos el corazón de la producción el cual es la sala de ordeño o lugar de ordeño en el cual se realizan todas las labores relacionadas a la recolección de la leche, este lugar debe encontrarse en un sitio de la granja equidistante para evitar largos recorridos de los animales, debe contar con unas entradas y salidas claras, es importante para el sistema productivo identificar la sala de ordeño que más se adecue a las características de la producción dentro de estas encontramos:

    SlyderB.vaca.p-4.mb-5(:datos="datosSlyder")

    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h3.mb-0 Equinos 

    .row.mb-4
      .col-md-12
        figure
          img(src='@/assets/curso/tema2/animales3.jpg', alt='Equinos')

    p.mb-4 Las instalaciones de alojamientos equinos son instalaciones que deben tener en cuenta las características climáticas para realizar la construcción, es así que se recomienda que en zonas de climas fríos su construcción se realice de norte a sur y en zonas de clima cálido de oriente a occidente. El alojamiento debe permitir un espacio adecuado para el animal, sin alterar su zona de confort, así como permitir un adecuado espacio entre los pasillos para permitir el movimiento seguro de los animales y sus cuidadores.

    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-primario1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img4.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Las instalaciones equinas o caballerizas deben ser construidas con materiales fáciles de lavar, resistentes y que no absorban la humedad, se recomienda para el piso de las instalaciones materiales fáciles de limpiar y antideslizante. Los pisos de materiales como asfalto, ladrillo y concreto con materiales que por su durabilidad y el no requerir un mantenimiento constante, son de gran elección para la construcción de estas.

    p.mb-4  Un elemento fundamental de los alojamientos equinos son las camas independientes del material que se elija, debe cumplir con unas condiciones de grosor y limpieza para asegurar que los animales no sufran patologías, las cuales se presentan en la siguiente tabla 2:

    .row.justify-content-center.mb-4
      .col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ventajas y desventajas de los tipos de cama
      .col-md-12
        .tabla-a
          table
            thead
              tr
                th.text-center Tipos de cama
                th.text-center Ventajas 
                th.text-center Desventajas 
            tbody
              tr
                td.text-center  <b>Paja</b>  
                td.text-center
                  p Fácil de consumir 
                  p Económica 
                  p Puede ser consumida por el animal
                td.text-center
                  p Poco absorbente 
                  p Puede contener moho 
                  p Problemas de amoniaco 
              tr
                td.text-center <b>Viruta</b>
                td.text-center
                  p La más caliente 
                  p Muy absorbente
                td.text-center
                  p No pueden consumirla 
                  p Elevado costo  
                  p Polvorienta 
              tr
                td.text-center <b>Aserrín </b>
                td.text-center
                  p Muy económico
                td.text-center 
                  p Polvorienta
                  p Absorbe menos que viruta 
              tr
                td.text-center <b>Papel</b>
                td.text-center 
                  p Limpio 
                  p Nada de polvo
                  p Absorbe
                td.text-center 
                  p Elevado costo 
                  p No deben consumirlo 
                  p Difícil de adquirir 
              tr
                td.text-center <b>Arena</b> 
                td.text-center
                  p Inerte 
                td.text-center
                  p Muy difícil de limpiar 
                  p Muy cara
                  p Fría
              tr
                td.text-center <b>Salvado de arroz</b>
                td.text-center 
                  p Gran capacidad de absorción 
                td.text-center 
                  p La más cara 
                  p No deben consumirla  


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Espina de pescado',
        texto:
          'Estas son las más comunes y tradicionales en los sistemas productivos, estas se ubican de manera contigua y mirándose unas a las otras como su nombre lo indica en espina de pescado logrando que en el centro se realice la función del operario, de esta forma todas las vacas ingresan al ordeño al mismo tiempo y son ordeñadas igual, por ende se debe crear grupos homogéneos de producción.',
        imagen: require('@/assets/curso/tema2/vaca1.jpg'),
      },
      {
        titulo: 'Rotativo',
        texto:
          'Los animales son ingresados a una plataforma circular la cual realiza el ordeño al mismo tiempo que va sacado los animales mientras gira a medida que va girando sale una y entra otra ocupando el lugar de la anterior. Es una de las salas más costosas por el costo de inversión.',
        imagen: require('@/assets/curso/tema2/vaca2.jpg'),
      },
      {
        titulo: 'Tándem',
        texto:
          'Este sistema consta de jaulas individuales para cada animal a ordeñar donde las vacas una está detrás de la otra y cada una tiene entrada y salida independiente, permite el ordeño con cría para estimular mayor producción de leche.',
        imagen: require('@/assets/curso/tema2/vaca3.jpg'),
      },
      {
        titulo: 'Paralelo',
        texto:
          'En este sistema también vemos la entrada y salida de las vacas individualmente la disposición es una al lado de la otra su eficiencia radica en que se puede realizar el suministro de alimento mientras se realiza el ordeño.',
        imagen: require('@/assets/curso/tema2/vaca4.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
