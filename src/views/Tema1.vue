<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Especie animal 

    .bg_grad-01
      .row.mb-5(data-aos="fade-up")
        .col-md-12.col-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Los sistemas productivos pecuarios se basan en la explotación y aprovechamiento de especies animales de las cuales se obtienen, principalmente, alimentos y materias primas para la industria como leche, huevo, cárnicos, pieles y fibras, entre otros, los cuales se consumen a diario en todos los hogares del mundo.
              br
              p Además de los alimentos y las materias primas, existen sistemas pecuarios enfocados en la obtención de otro tipo de beneficios de los animales, como trabajo (mulares, asnales), recreación (equinos, peces ornamentales) e incluso polinización (apicultura).    

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
        .col-md-10
          p La producción pecuaria ha tenido progresos importantes en los últimos años gracias a la evolución de las tecnologías en materia de:
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec1.svg' alt='Alimentación')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Alimentación
        
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec2.svg' alt='Mejoramiento genético')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Mejoramiento genético

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec3.svg' alt='Equipamiento')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Equipamiento

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec4.svg' alt='Sanidad animal')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Sanidad animal

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec5.svg' alt='Instalaciones')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Instalaciones

      .row.justify-content-center.mb-5
        .col-lg-10
          .crd.clr-paleYellow3.p-4.mb-4
            p.mb-0.text-center Los progresos de la producción pecuaria se evidencian, entre otras cosas, en el aumento de los volúmenes de producción y en el mejoramiento de la calidad de los productos destinados a atender la creciente demanda.                

      .row.justify-content-center.align-items-center(data-aos="fade-up")
        .col-md-12
          p Las especies animales que se trabajan en los sistemas productivos pecuarios se caracterizan, entre otras cosas, por:

      .row.my-4(data-aos="fade-left")
        .col-md-12
          .tarjeta.fondo-slyder.mb-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Adaptabilidad
                  p Los sistemas productivos basados en el aprovechamiento animal están adaptados a múltiples condiciones climáticas, geográficas, edáficas y ambientales por lo que estas explotaciones se encuentran casi que en cualquier entorno. Gracias a esta característica es que la producción pecuaria resulta esencial para el empleo y la alimentación de millones de familias en el mundo entero.
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='Ternero')

              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Diversidad
                  p Las especies pecuarias se pueden trabajar bajo diferentes esquemas, los cuales van desde los más tecnificados y avanzados hasta los más básicos y elementales, lo cual de por sí demuestra la amplitud de modelos y la diversidad de montajes por medio de los que se puede ejercer la actividad productiva. 
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='Galpón de gallinas')

              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Rendimientos
                  p Las especies animales que se emplean para la producción pecuaria son fruto de un proceso de selección que se ha llevado a cabo durante miles de años, tomando en cuenta precisamente variables como sus rendimientos y capacidad productiva.  
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='Chivo')
              
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Domesticación
                  p Otras de las características de las especies animales es la capacidad que poseen para relacionarse con el ser humano y adaptarse al manejo, lo que se ha denominado un proceso de domesticación, el cual es supremamente importante para desarrollar sistemas pecuarios como los que se conocen hoy día. 
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img5.png', alt='Animales de granja')

              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Diversos usos y subproductos
                  p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img6.png', alt='Materiales')
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1 Características de las especies animales pecuarias

    p.mb-5(data-aos="fade-right") Dentro de las especies pecuarias se evidencian diferencias notorias en las características tanto físicas, fisiológicas, reproductivas, nutricionales y comportamentales, las cuales dan unos lineamientos de alimentación, cuidado, alojamiento, y aplicación de técnicas especiales, las cuales buscan un bienestar animal para que el animal este sano, cómodo, libre de estrés, bien alimentado, y buscando una prevención de las enfermedades. Con la búsqueda de que los animales sean eficientes productivamente.

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Bovinos, caprinos y ovinos
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_01.svg", alt="alt").img80

    .row.justify-content-center.mb-4
      .col-xl-6.mb-4.mb-xl-0(data-aos="fade-right")
        p Son animales mamíferos por lo tanto requieren del consumo de leche al momento de nacer, son ungulados (patas con pesuña), su alimentación consta de plantas forrajeras y pastos en ocasiones es necesario la suplementación de minerales los cuales son importantes para su desarrollo productivo. 

        p Los bovinos poseen tres líneas de producción establecidas, las cuales son la leche, la carne, y la mezcla de ambas que sería el doble propósito o producción de carne y leche, estas líneas de producción llevan al ganado bovino a una serie de cambios físicos los cuales por medio de la evolución genética y fenotípica busca dar unas características físicas ideales para la línea productiva deseada generando así razas especializadas para cada una de estas.

        p.mb-0 Las rumiantes productoras de leche, tienen la característica de que todos los nutrientes aportados por la alimentación son destinados para la producción de la misma, debido a que poseen un gran potencial genético ofertando mucha más leche de la que requiere la cría, siendo este factor determinante para el sistema productivo, por otro lado el ganado de carne todos sus nutrientes obtenidos por la alimentación son utilizados para el crecimiento de masa muscular, acumulación de grasa y formación de carne. 

      .col-xl-6.col-md-10(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_02.jpg", alt="alt")   


    p.mb-5(data-aos="fade") #[strong Características físicas bovinos según líneas de producción:]

    .tabla-a.color-primario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(style="width:25%;") Línea productiva 
            th(style="width:50%;") Características
            th(style="width:25%;") Razas
        tbody
          tr
            td.text-center Producción de carne  
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Cuerpo compacto y corto con forma de cuadrado.
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Presencia de una mayor masa muscular.
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Caras cortas con cabezas profundas y frentes anchas. 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Alcanzan pesos muy superiores a los demás. 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Sus ubres no son tan desarrolladas. 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Caderas amplias y muslos grandes.             
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Simmental 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Brangus
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Angus
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Brahaman 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Simbrah 
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Cebu  
          tr
            td.text-center Producción de leche
            td 
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Cuerpo un poco más alargado con forma de triángulo
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Su ubre es mucho más desarrollada y grande se evidencia un tamaño de pezones ideal
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Su ganancia de peso es normal
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Se busca que sus caderas sean anchas de flexibles para dar mayor facilidad en los partos
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Holstein
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Jersey
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Normando
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Gyr
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Pardo suizo         
          tr
            td.text-center Producción doble propósito
            td 
              p Se busca una mezcla de ambas características físicas buscando sacar lo mejor de cada línea genética para así desarrollar un animal encaminado en ambos sistemas productivos 
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Ubres grandes
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Cuerpos musculosos y de muy buena ganancia de peso
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Cuerpo compacto 
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Gyr
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Guzerath
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Harton del valle
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Simental

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Cerdos
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_03.svg", alt="alt").img70
                   

    .row.justify-content-center.mb-4
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        p Animales mamíferos, poligástricos, su alimentación es un poco variada ya que va desde el consumo de plantas hasta el consumo de carne o animales por lo tanto se considera omnívoro, dentro de las líneas de producción de cerdos encontramos líneas principalmente para fines productivos de carne que son llamadas líneas padre las cuales su característica principal es el crecimiento rápido y ganancia de peso a menor tiempo y también encontramos las líneas madres que son todas aquellas que brindan las características de maternidad generalmente utilizadas para procesos reproductivos.

        p Características de línea productiva y raza:
      
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_04.jpg", alt="alt")

    
    .tabla-a.color-primario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(style="width:25%;") Línea productiva 
            th(style="width:50%;") Características
            th(style="width:25%;") Razas
        tbody
          tr
            td.text-center Línea paterna  
            td Se caracteriza por tener una gran conformación en el lomo, en los jamones y una excepcional calidad de canal. Son netamente utilizados para producción de carne.            
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Landrace belga
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Hampshire alemán
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Duroc aleman
          tr
            td.text-center Línea materna 
            td Animales que gracias a sus características como cuidado materno, carácter, producción de leche, número de lechones por parto, conformación corporal, fertilidad y proliferación son seleccionados para cumplir las funciones de reproductoras de las explotaciones porcícolas.           
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Landrace
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Chester white
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Yorkshire

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Equinos
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_06.svg", alt="alt").img70

    .row.justify-content-center(data-aos="fade-right").mb-5
      .col-xl-6.order-2.order-xl-1
        p Animales mamíferos que cuentan con un solo dedo llamado casco, son animales propiamente herbívoros se alimentan de heno, pasto, granos de cebada, algunas hortalizas, avena, soja, maíz, entre otras. 

        p Su sistema digestivo es un poco delicado por ende requiere muchos cuidados alimenticios y en la forma de alimentar ya que es recomendable repartir la ración en pequeñas cantidades pero muchas veces al contrario de alimentar solo con un gran ración, sus usos productivos son principalmente la cría.
      
      .col-xl-6.mb-4.mb-xl-0.order-1.order-xl-2(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_05.jpg", alt="alt")

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Aves de corral
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_07.svg", alt="alt").img50

    .row.justify-content-center.mb-4
      .col-xl-6.order-2.order-xl-1(data-aos="fade-right")
        p Las características de las aves de corral son animales ovíparos ya que su desarrollo embrionario se da en un huevo producido por la hembra que previamente fue fecundado por el macho, son animales omnívoros que se alimentan casi de cualquier clase de alimento, donde por medio de sus picos y patas dotadas con largas uñas buscan su comida, en las condiciones de producción son alimentadas con piensos debidamente elaborados para cumplir con sus necesidades nutricionales, son principalmente criadas por sus huevos y la carne donde se usan razas especializadas para la producción.

        p Características según los tipos y líneas productivas:
      
      .col-xl-6.mb-4.mb-xl-0.order-1.order-xl-2(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_08.jpg", alt="alt")

    .tabla-a.color-primario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th(style="width:25%;") Línea productiva 
            th(style="width:50%;") Características
            th(style="width:25%;") Razas
        tbody
          tr
            td.text-center Carne (pollo de engorde) 
            td Crecimiento veloz, conformación corporal alto, consumos de alimento elevados, para mayor crecimiento y una conversión alimenticia eficiente.
            td
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | ROOS.
                li.mb-2
                  i.fa-li.fa.fa-check
                  | COBB.
          tr
            td.text-center Huevo (gallina ponedora) 
            td Se busca que las gallinas ponedoras tengan alto rendimiento en postura, una conformación de cáscara de huevo fuerte y resistente, que su instinto de maternidad sea marcado.
            td
              p Línea roja (huevo marrón)
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Hi lyne
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Brown
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Isa Brown
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Lohmann Brown

              p Línea blanca (huevo blanco)
              ul.fa-ul
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Hi lyne w36
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Hi lyne w80
                li.mb-2
                  i.fa-li.fa.fa-check
                  | Lohmann             


    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Etapas de desarrollo

    .row.justify-content-center.mb-4
      .col-xl-6.mb-4.mb-xl-0(data-aos="fade-right")
        p En los sistemas productivos animales las etapas de desarrollo son consideradas para evaluar e identificar el crecimiento y desarrollo de los mismos, el cual va relacionado con todos los factores de manejo animal, alimentación, reproducción, madures sexual, medio ambiente entre otros, en los cuales es importante definir intervalos de tiempo, así dando bases para determinar la eficiencia tanto animal como del sistema productivo.

        p Una alta velocidad de crecimiento está asociada no solamente al logro de un peso de faena a una edad temprana, sino también a la aptitud para la reproducción precoz (lo que determina un incremento de la eficiencia productiva). (Bavera, 2005).

        p El crecimiento o desarrollo de los diferentes órganos o tejidos no es en todos igual, ya que unos crecen con más intensidad, esto es llamado crecimiento diferencial, por otra parte encontramos otro concepto llamado alometría donde su principio es el crecimiento relativo a, ejemplo los huesos del cráneo no crecen sin que haya un desarrollo cerebral, a medida que el cerebro se desarrolla estos huesos también crecen y con ellos crece la cabeza del animal.
      .col-xl-6.col-md-10(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_09.jpg", alt="alt")

    p(data-aos="fade-right") Otro ejemplo de crecimiento y desarrollo son las gónadas y el tejido gonadal donde su desarrollo tiene un pico acercándose a la pubertad este acelerado por los procesos hormonales presentando un cambio muy rápido.

    .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Estas etapas de desarrollo marcan las fases de una producción animal debido a que dependiendo el desarrollo y crecimiento del animal se ubican los animales en diferentes etapas del ciclo productivo.

    .row.justify-content-center.mb-4
      .col-xl-6.mb-4.mb-xl-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/t1_10.jpg", alt="alt")
      .col-xl-6(data-aos="fade-left")
        p Dentro de las producciones pecuarias existen diferentes fases por la que los animales pasan dependiendo su crecimiento, desarrollo y conformación física estas fases o periodos son la son tomados desde que el animal nace hasta que está listo para la comercialización o el mercadeo de sus subproductos como es el caso de la leche.

        p Para cada especie animal y producción animal estos conceptos tienden a cambiar un poco pero como base fundamental todos siguen los mismos lineamientos que serían una iniciación, levante y producción. Durante cada ciclo de producción es importante tener en cuenta que los criterios de manejo y alimentación tienen ciertas variaciones las cuales son importantes tener.

    p.mb-5(data-aos="fade-right") A continuación veamos diferentes ciclos productivos:

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Ciclo productivo ganadería de leche
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_11.svg", alt="alt").img50

    p.mb-5(data-aos="fade-right") Estas ganaderías de producción lechera son hatos especializados en la producción de leche utilizando razas bovinas como el Holstein jersey entre otras, su sistema productivo solo se enfoca en el inicio, levante pre-parto y producción de hembras, adoptando las siguientes fases de producción:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Fase de inicio")
        .row.justify-content-center.px-5
          .col-xl-6.mb-4.mb-xl-0
            p Esta fase va del nacimiento del animal hasta más o menos los 6 meses de la ternera, donde el animal las primeras 24 a 48 horas debe ser alimentado con calostro producido por la leche de su madre, en esta fase el desarrollo del componente digestivo es fundamental donde hay un desarrollo del rumen ya que las terneras recién nacidas funcionan como monogástricas, donde su estómago funcional es el abomaso, a medida de que el animal va creciendo e inicia el consumo de sólidos este va desarrollando el rumen y retículo donde el rumen cuanta con un 25 %, el retículo un 5%, el omaso un 10% y el abomaso un 60% que a diferencia de su periodo final de desarrollo y conformación este termina en 80% rumen, 5% retículo 8% omaso y 7 % abomaso, así la ternera ya puede realizar los procesos de fermentación ruminal y captar todos los nutrientes y energía que brindan los forrajes.

            p.mb-0 Este proceso toma un tiempo más o menos de 2 a 3 semanas de edad.
        
          .col-xl-6.col-md-10           
            figure
              img(src="@/assets/curso/tema1/t1_12.png", alt="alt")

      .py-3.py-md-4(titulo="Fase de levante")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Este periodo inicia después de realizarse el destete de los animales, estos animales oscilan entre más o menos los 150 a 200 kg de peso vivo y una edad promedio entre los 8 meses y el año de edad. En esta fase los animales alcanzan la madurez sexual y en las vacas lecheras se toma hasta más o menos los 26 y 29 meses de edad.
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_13.png", alt="alt")

      .py-3.py-md-4(titulo="Fase de producción")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Esta fase inicia cuando la novilla o las vacas productivas alcanzan su primer parto o se encuentran preñadas, iniciando su fase de producción lechera con un completo desarrollo de la glándula mamaria y una novilla lista para gestar una cría.
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_14.png", alt="alt")

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Ciclo productivo ganadería de carne
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_15.svg", alt="alt").img70

    p.mb-5(data-aos="fade-right") La ganadería especializada en la ganancia de carne es un sistema en el cual se utilizan razas con alto potencial genético para la ganancia de peso mucho más rápido y una conformación muscular mucho más desarrollada con el objetivo de alcanzar pesos de venta en un corto tiempo.

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Fase de inicio")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Esta fase no tiene gran diferencia a la ganadería de leche, ya que el ternero posee las mismas características físicas y requiere el mismo cuidado.           
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_16.png", alt="alt")

      .py-3.py-md-4(titulo="Fase de levante")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Esta fase va generalmente hasta los 24 meses en hembras y 20 meses en machos, es una fase de producción donde se debe aprovechar el pico de crecimiento de los animales.

            p Estos animales en la fase de levante requieren para una ganancia de 600 gramos al día se debe suministrar de proteína 601 gramos y altos niveles de calcio para su desarrollo osteomuscular, y un porcentaje más o menos del 2 % de su peso vivo en materia seca.          
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_17.png", alt="alt")

      .py-3.py-md-4(titulo="Fase de ceba o engorde")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p El objetivo de la ceba es alcanzar en un período de tiempo ideal de 30 meses un peso promedio de 480 kilogramos de peso vivo del animal, esta etapa se suministra grandes cantidades de alimento y se completa el desarrollo del animal frente a su estructura corporal.          
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_18.png", alt="alt")

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Ciclo productivo de la gallina ponedora
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_15A.svg", alt="alt").img70

    p.mb-5(data-aos="fade-right") La vida de la gallina ponedora se puede dividir en tres etapas:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Etapa de cría")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Comienza en la semana cero de vida del ave hasta la semana número cinco, esta etapa es la más crítica y delicada, se debe tener en cuenta aspectos para evitar que las aves contraigan enfermedades virales y bacteriológicas, se debe tener precaución como alimentación correcta (en las primeras dos horas de vida se debe suministrar solo agua a voluntad), cuidados por cambio del ambiente, aseo correcto, entre otros. 

            p Cuando la pollita sale del cascarón se vacuna inmediatamente contra la enfermedad de NewCastle y Viruela aviar.           
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_19.png", alt="alt")

      .py-3.py-md-4(titulo="Etapa de levante")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Esta etapa comienza el día uno, de la semana nueve de vida las pollitas y finaliza en la semana número 18, en este momento se debe enfocar en el desarrollo óseo y muscular sin grasa acumulada en el ave, esto se logra mediante una adecuada alimentación.

            p Se debe tener agua fresca y a voluntad para una forma de regulación de temperatura natural. 

            p En esta etapa las pollas se vacunan en dos ocasiones más contra la enfermedad de NewCastle, dos vacunas contra coriza aviar y dos contra cólera aviar.           
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_20.png", alt="alt")

      .py-3.py-md-4(titulo="Etapa de producción")
        .row.justify-content-center.px-5
          .col-xl-6.mb-4.mb-xl-0
            p Tiene una duración aproximada de 14 a 18 meses de vida del ave, en esta etapa se esperan resultados óptimos basados en los cuidados anteriores y la genética elegida, con una postura de excelente calidad y constancia, las aves deben llegar a este momento con una actitud despierta y con buena condición corporal.

            p Se espera la primera postura de cada polla entre los 5 a 6 meses de edad alcanzado la mayor producción alrededor de la semana 54 de vida alcanzando un 85% de producción a partir de este momento las aves comienzan una reducción lenta en la postura.

            p “En la actualidad muchos laboratorios encargados de investigaciones genéticas de aves destinadas a una producción de huevo comercial han logrado mejorar el linaje, aumentando el potencial genético de las gallinas con la finalidad de obtener mayor productividad de huevos con una mejor calidad. Mediante estos estudios se ha logrado aumentar la madurez sexual en las aves pudiendo así adelantar 1 o 2 días la etapa de puesta en una generación de pollas, lo que implica uno o dos días de producción adelantada” (Poultry line, 2019).           
        
          .col-xl-6.col-md-10            
            figure
              img(src="@/assets/curso/tema1/t1_21.png", alt="alt")

    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Ciclo productivo del pollo de engorde
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_22.svg", alt="alt").img70

    p.mb-5(data-aos="fade-right") El ciclo productivo del pollo de engorde es mucho más corto que las aves destinadas a postura, el ciclo de los pollos tiene una duración aproximada de 42 a 50 días aproximadamente y se divide en cuatro etapas:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Preinicio")
        .row.justify-content-center.px-5
          .col-xl-6.mb-4.mb-xl-0
            p Se habla de preinicio en la parte más crítica y delicada de la vida del pollito, va desde la salida de cascarón del pollito hasta el día 9 aproximadamente; es donde se debe prestar más atención para que en las siguientes etapas se pueda obtener un pollito vigoroso con excelente salud. 

            p Antes de la llegada del pollito se deben de prender criadoras con unas 8 horas de anticipación aproximadamente con el fin de recibir el pollito a una temperatura de 32 grados Celsius, se debe recibir con agua fresca y alimento a disposición además se debe tener 23 horas de iluminación; tanto temperatura como iluminación irán disminuyendo día a día paulatinamente.

            p En esta fase el pollito tiene desarrollo en sistema óseo, vascular e inmune.           
        
          .col-xl-6.col-lg-10            
            figure
              img(src="@/assets/curso/tema1/t1_23.png", alt="alt")

      .py-3.py-md-4(titulo="Inicio")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p En esta etapa el pollito cambia el tipo de alimento, pasa de un alimento en su mayoría pulverizado a un alimento más denso y tiene una duración aproximada de 11 a 12 días, en esta fase hay desarrollo esquelético para un buen soporte de masa muscular en los siguientes días.
            p Se debe ir aumentando el espacio lentamente en la medida que el pollo va creciendo y aumentando el sistema de ventilación.           
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_26.png", alt="alt")

      .py-3.py-md-4(titulo="Engorde")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p En esta etapa se da una transición del alimento de iniciación al de engorde, esta etapa tiene una duración de 12 días aproximadamente, existe un cambio en la textura y en la densidad nutricional; en este momento se puede observar un crecimiento acelerado del ave. 

            p Además, se debe estimular el pollo para una buena ingesta de alimento y con esto lograr un desempeño biológico óptimo de la línea genética seleccionada y es de suma importancia el suministro de una densidad nutricional óptima con un consumo de agua adecuada que nos puede servir de indicador de consumo de alimento por ave, en esta instancia se requiere que el pollo tenga un buen acceso a los aminoácidos y energía que requiere su rápido crecimiento.           
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_24.png", alt="alt")

      .py-3.py-md-4(titulo="Finalización")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p Esta es la última etapa de vida del pollito antes de ser enviado a planta de beneficio, en esta etapa se busca optimizar el rendimiento del ave en la que se pueda tener un índice de conversión alimenticia alto logrando el peso que se quiere obtener al momento del sacrificio. 

            p El pollo presenta mayor consumo de alimento en esta etapa debido a que requiere mayor cantidad. 

            p Se debe tener cuidados básicos cuando el pollo ya se encuentra en esta etapa para evitar infartos por falta de ventilación o mala manipulación, observar el estado de la cama a diario para evitar quemadura de pechuga y pododermatitis.          
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_25.png", alt="alt")


    .row.mb-4(data-aos="fade-right")
      .col-auto
        .cstmH4
          .row.align-items-center
            .col-auto
              h4.text-white.mb-0 Ciclo productivo de la producción porcina
            .col-auto
              figure
                img(src="@/assets/curso/tema1/t1_27.svg", alt="alt").img70

    p(data-aos="fade-right") Según las diferentes etapas de desarrollo del cerdo, las granjas porcinas comerciales dividen su sistema productivo en etapas dependiendo el crecimiento del animal y sus características de desarrollo, en las cuales también se evidencian las fases de inicio, levante y ceba donde el objetivo general es producir carne de cerdo bajo estándares de calidad. 

    p(data-aos="fade-right") Para entender el ciclo productivo de la producción porcina se debe conocer las características básicas tanto de la hembra como del macho:

    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Hembras")
        .row.px-5
          .col-xl-4.mb-4.mb-lg-0
            p La reproducción de las hembras y el alcance de la madurez sexual están muy condicionados a la presencia de los machos en los sistemas de explotación ya que estimulan la hembra de manera natural logrando así acelerar los procesos de madurez. 

            p Las características sexuales están también muy determinadas al medio ambiente y condiciones físicas del animal.          
        
          .col-xl-8         
            .tabla-a.color-primario.mb-5 
              table
                thead
                  tr
                    th(style="width:50%;")  Características                    
                    th(style="width:30%;") Razas
                tbody
                  tr
                    td Madurez sexual
                    td 5 - 5 1 /2 meses
                  tr
                    td Madurez reproductiva
                    td 7 - 8 meses de edad
                  tr
                    td Duración del calor o celo
                    td 24 - 48 horas
                  tr
                    td Longitud del ciclo estral
                    td 18 - 21 días
                  tr
                    td Aparición del calor después del destete
                    td 3 - 8 días

      .py-3.py-md-4(titulo="Machos")
        .row.px-5
          .col-lg-6.mb-4.mb-lg-0
            p La madurez sexual de los cerdos reproductores es un proceso que se da de manera gradual donde se evidencian casos desde los 5 meses un cerdo puede servir la hembra pero no es muy recomendable ya que muchas veces su desarrollo no es completo y no ha logrado su maduración, es aconsejable que se empiece a realizar a partir de los 7 a 8 meses de edad con un peso promedio de 110 a 120 kg.
            p Sus 3 fases son:   

            p.mb-0 #[strong Iniciación:]
            p El proceso de iniciación va desde el destete del animal, donde se empieza a desarrollar todo el componente digestivo ya que el animal por primera vez empieza a recibir alimentación por medio de alimentos balanceados o pellets, esta etapa va hasta los 20 kilogramos.

            p.mb-0 #[strong Levante:]
            p El levante de los cerdos se da desde los 20 kilogramos hasta los 45 kilos, haciendo un proceso de transición entre la iniciación y la ceba  

            p.mb-0 #[strong Ceba o engorde:]
            p La ceba o engorde se da desde los 45 kilos hasta los 90 - 110 kg que es el peso final comercial, se realiza bajo conceptos de alimentación y cuidado animal.    
        
          .col-lg-6            
            figure
              img(src="@/assets/curso/tema1/t1_28.png", alt="alt")

    separador

      
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Técnicas de manejo

    p.mb-4(data-aos="fade-right") La definición de las diferentes técnicas de manejo es un concepto que se utiliza para definir todas las acciones realizadas por los manipuladores de los animales en pro de un buen comportamiento animal y mejor un aspecto productivo, para brindar al animal condiciones óptimas para lograr mejor desempeño del mismo, estas técnicas están fundamentadas en:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-4.col-10.order-2.order-xl-1
        figure.mb-4
          img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
      .col-lg-8.order-1.order-xl-2.mb-4.mb-xl-4
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Conocer al animal y sus instintos, reconociendo su hábitat y espacio de confort con el fin de reducir el estrés, la excitación, el agotamiento, entre otros.
          li 
            i.fas.fa-angle-right
            | Aplicar las diferentes medidas de bioseguridad, con la finalidad de conocer y reducir todas las diferentes situaciones de peligro que se puedan presentar tanto para la protección del hombre como del animal.
          li 
            i.fas.fa-angle-right
            | Aplicación de los diferentes conocimientos relacionados a las instalaciones y equipos, utilizados con el fin de mantener relajados y tranquilos a los animales, identificar y retirar las distracciones, para así mejorar las labores realizadas donde se ejecute menos trabajo con mayor rendimiento y obteniendo eficacia en la producción
          li 
            i.fas.fa-angle-right
            | Aplicación de los diferentes métodos de adiestramiento animal, que no ponga en peligro el personal y a las especies animales, desde el momento de su nacimiento hasta la el final de la vida útil productiva facilitando su manejo, conducción y traslado.
          li 
            i.fas.fa-angle-right
            | Aplicación de tratamientos de forma adecuada, que no ponga en riesgo la salud animal ni la humana.   

  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
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
