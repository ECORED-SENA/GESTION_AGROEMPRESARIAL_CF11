<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Bienestar Animal

    .row.mb-4(data-aos="fade-up")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando se habla de bienestar animal se refiere a las buenas condiciones en las que un animal está en su entorno como estado de salud, disponibilidad de alimento y agua en buen estado para el consumo, seguridad y lugar donde pueda expresar abiertamente su comportamiento natural evitando el dolor y el miedo, acceso a medicina preventiva y curativa.
    separador
    
    .bg_grad-04
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        .h2 4.1.	Principios

      p.mb-4(data-aos="fade-left") Los animales deben ser tratados con respeto y forma compasiva, entre los aspectos del bienestar animal se encuentra la muerte digna en el momento que corresponda y que sea estrictamente necesario terminar con el sufrimiento del animal. 
      p.mb-4(data-aos="fade-right") Entre los principios básicos de bienestar animal siempre se habla de la regla de las “cinco libertades”

      .row.mb-4(data-aos="fade-up")
        .col-md-12
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/1.png' alt='AvatarTop')
              .tarjeta.color-rosa3.p-4
                p.text-center <b>Libre de hambre, sed y malnutrición</b>

            .tarjeta-avatar
              img(src='@/assets/curso/tema4/2.png' alt='AvatarTop')
              .tarjeta.color-rosa3.p-4
                p.text-center <b>Libre de temor y angustia</b>

            .tarjeta-avatar
              img(src='@/assets/curso/tema4/3.png' alt='AvatarTop')
              .tarjeta.color-rosa3.p-4
                p.text-center <b>Libre de incomodidades como molestias físicas y térmicas</b>

            .tarjeta-avatar
              img(src='@/assets/curso/tema4/4.png' alt='AvatarTop')
              .tarjeta.color-rosa3.p-4
                p.text-center <b>Libre de dolor y enfermedad</b>

            .tarjeta-avatar
              img(src='@/assets/curso/tema4/5.png' alt='AvatarTop')
              .tarjeta.color-rosa3.p-4
                p.text-center <b>Libre expresión en comportamiento animal natural</b>

      p.mb-4(data-aos="fade-left") Todo animal que cumpla una función deportiva, trabajo, producción, investigación, entre otros, debe tener garantía de buena salud y condición corporal además de comodidades básicas de vida y eso debe ser un deber ético de las personas que se hacen cargo del animal. 

      .row.mb-4(data-aos="fade-right")
        .col-lg-12
          .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
            p.mb-0 En cuanto al bienestar de los animales acuáticos, la OIE formula recomendaciones relativas a los peces de cultivo (excepto para las especies ornamentales) e insta a “recurrir a métodos de manipulación que sean apropiados a las características biológicas del animal, así como un entorno adaptado a sus necesidades” (OMS, 2021).
      separador

      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        .h2 4.2.	Comportamiento Animal	

      p.mb-4(data-aos="fade-right") Los animales deben ser tratados con respeto y forma compasiva, entre los aspectos del bienestar animal se encuentra la muerte digna en el momento que corresponda y que sea estrictamente necesario terminar con el sufrimiento del animal. 
      p.mb-4(data-aos="fade-left") Entre los principios básicos de bienestar animal siempre se habla de la regla de las “cinco libertades”:

      .row.mb-4(data-aos="fade-up")
        .col-md-12.col-12
          .bloque-texto-g1.color-rojo.p-3.p-sm-4.p-md-5
            .bloque-texto-g1__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema4/cabras.jpg')})`}"
            )
            .bloque-texto-g1__texto.p-4
              p El comportamiento animal está basado en la genética y las condiciones ambientales de cada uno de los animales. El comportamiento instintivo está muy pocamente relacionado con aprendizajes o vivencias del animal, este comportamiento se considera que está asociado a la genética y estos son los comportamientos naturales de cada especie (parto, succión de pezón para obtención de leche, comportamiento reproductivo, entre otros); por otro lado están los comportamientos basados en las vivencias y el entorno del animal, estos aprendizajes son esenciales en la primera etapa de vida ya que usualmente se aprende de los padres o de la manada.
      
      p.mb-4(data-aos="fade-right") A continuación, se puede ver un poco más al respecto:

      figure.mb-5(data-aos="fade-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      .h2 4.3.	Prácticas de bienestar animal

    .row.mb-4(data-aos="fade-up")
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 En la actualidad las personas que consumen alguna fuente de origen animal están demostrando una preferencia por alimentos producidos con un máximo respeto hacia los animales, en donde se garantice que cada animal lleve una vida con calidad, motivo por el cual las granjas de explotación pecuarias se han visto obligadas a cambiar sus prácticas de manejo de animales, actualizando sus métodos de manera que sean éticos y con respeto hacia los animales, para un beneficio de mayor productividad e inclusión en un mercado moderno que exige diferentes condiciones a los que se traían de años atrás.

    p.mb-4(data-aos="fade-right") Muchos de los animales domésticos que se utilizan para una explotación pecuaria son considerados animales de presa (bovinos, cerdos, équidos aves, caprinos, ovinos y lagomorfos) por lo que su comportamiento puede ser de fuga y hay que tener en cuenta algunas recomendaciones generales:

    .row.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Evitar los acercamientos bruscos de personas conocidas y desconocidas por el animal.
          li 
            i.fas.fa-angle-right
            | Evitar colocar objetos extraños cerca del animal sin antes hacer interacción previa objeto-animal para su acertado reconocimiento y evitar reacciones que puedan afectar al animal y las personas. 
          li 
            i.fas.fa-angle-right
            | Controlar los ruidos sorpresivos a los que los animales no se encuentren adaptados en su cotidianidad. 
          li 
            i.fas.fa-angle-right
            | Evitar en máxima medida golpes directos e indirectos hacia los animales, se debe tener una manipulación adecuada y eficiente que permita manejo tranquilo en cada explotación.
          li 
            i.fas.fa-angle-right
            | Manejo adecuado de iluminación y corrientes de aire que puedan generar un cambio en el comportamiento animal, afección a salud y por tanto al bienestar (especial cuidado en explotación avícola y porcícola).
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/1.jpg', alt='Niño en una granja alimentando una cabra')

    p.mb-4(data-aos="fade-right") La zona de fuga hace referencia al punto de equilibrio o balance y el punto ciego, el conocimiento de esto facilita el entendimiento del desplazamiento de los animales. El punto de equilibrio hace referencia a una línea imaginaria a la altura de la cruz de los animales, permite analizar la dirección de movimiento del animal dependiendo del lado en el cual se invada la zona de fuga; si las personas se acercan por detrás del punto de equilibro el animal avanza y si se hace el acercamiento desde el frente del punto de equilibrio el animal retrocede. El punto ciego se encuentra detrás de la cola del animal, se debe evitar que en el momento de una posible manipulación los operarios se posicionen en este lugar para intentar mover el animal desde este punto porque no funciona y puede generar accidentes dentro de las granjas. 
    
    .row.mb-2(data-aos="fade-right")
      .linearoja

    .bg_grad-05
      .row.align-items-center.mb-4(data-aos="fade-left")
        .col-md-6
          figure.mb-4
            img(src='@/assets/curso/tema4/2.jpg', alt='Rebaño de ovejas')

        .col-md-6
          p.mb-4 <b>Cuando se requiera el desplazamiento de animales domésticos de presa, se deben tener en cuenta unas recomendaciones:</b>
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Todo el camino debe estar despejado.
            li 
              i.fas.fa-angle-right
              |	Evitar sombras que puedan asustar los animales. 
            li 
              i.fas.fa-angle-right
              |	Se debe dirigir a los animales con calma y en silencio, de requerir ruidos deben ser leves y con voz suave para no alterar y generar nerviosismo.
            li 
              i.fas.fa-angle-right
              |	Los animales deben tener libertad y se debe respetar el tiempo de cada uno, permitir que avancen siguiendo a otros con calma y a un paso normal. 
            li 
              i.fas.fa-angle-right
              |	No se debe presionar a los animales que vienen en la parte de atrás de la manada, según las características de comportamiento animal, en esta posición avanzan animales viejos, muy jóvenes y animales enfermos por lo que si se genera presión los animales no avanzarán por el contrario se presentará un retroceso.

        .row.align-items-center.mb-4
          .col-md-6
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                |	Muchos animales como los bovinos no avanzarán si ven un callejón sin salida, aparte de esto se rehusarán a caminar si existe poca iluminación en el camino.
              li 
                i.fas.fa-angle-right
                |	Los animales no deben ser manipulados por personal agresivo.
              li 
                i.fas.fa-angle-right
                |	No agredir a los animales, no halar la cola, extremidades o cabeza.
              li 
                i.fas.fa-angle-right
                |	Evitar la presencia de otros animales como los perros que no estén entrenados debidamente y caballos. 
              li 
                i.fas.fa-angle-right
                |	El uso de tábano eléctrico está restringido en animales como bovinos y cerdos adultos (solo debe ser aplicado en los cuartos traseros del animal cuando sea estrictamente necesario) y no es apropiado el uso en animales como equinos, caprinos, ovinos y animales jóvenes. 
      
          .col-md-6
            figure
              img(src='@/assets/curso/tema4/3.jpg', alt='Animales de granja')

      .row.mb-4(data-aos="fade-up")
        .col-lg-12
          .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
            p.mb-0 La garantía de un buen trato hacia los animales desde el primer momento que pisen la granja de explotación pecuaria no solo es beneficioso para el animal y la producción si no para un manejo fácil y seguro a través de su vida y sus años productivos, ya que los animales recuerdan experiencias atemorizantes o que les ocasionan dolor y desarrollan comportamientos defensivos para evitarlo. 

      p.mb-4(data-aos="fade-right") Se debe actualizar y sensibilizar al personal que esté directamente implicado en el manejo de los animales, de esta manera se garantiza un trato adecuado hacia ellos; además se debe mantener en buen estado las instalaciones de manera que sean apropiadas para una adecuada estadía de los animales y un correcto desarrollo del animal que pueda garantizar su bienestar óptimo dentro de la granja. 

</template>

<script>
export default {
  name: 'Tema4',
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
