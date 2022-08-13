<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Equipos e Implementos
    
    p.mb-4 Dentro de las instalaciones se encuentran diferentes tipos de implementos y equipos que ayudan a conformar y estructurar la unidad productiva, donde en ocasiones el animal tiene que hacer un previo acostumbramiento a los mismos. Dentro de las clases de equipos e implementos se ven las siguientes, ver figura 1:

    .row.justify-content-center.mb-4
      .col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Clases de equipos e implementos
      
    .row.justify-content-center.align-items-center.mb-4
      .col-md-5
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='Alimentación')
      .col-md-3
        .crd.clr-amarillo.p-4
          ul.lista-ul--color
            li.mb-3 
              i.fas.fa-angle-right
              | Comederos. 
            li.mb-3 
              i.fas.fa-angle-right
              | Bebederos. 
            li 
              i.fas.fa-angle-right
              | Distribución del alimento.

    .row.justify-content-center.align-items-center
      .col-md-5.mb-md-0
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='Alimentación')
      .col-md-3.mb-md-0
        .crd.clr-rosa.p-4
          ul.lista-ul--color
            li
              i.fas.fa-angle-right
              | Criadoras.
            li 
              i.fas.fa-angle-right
              | Nidales.
            li 
              i.fas.fa-angle-right
              | Ordeñadoras mecánicas.
            li 
              i.fas.fa-angle-right
              | Ventiladores.  
    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h4 3.1.	Funcionamiento

    p.mb-4 Siendo estos equipos utilizados por los operarios para brindar al animal el mejor confort y buenas condiciones para su crecimiento y producción según sea el caso. Los equipos deben ser empleados de manera adecuada según la etapa productiva del animal y su condición física.

    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h3.mb-0 Alimentación

    p.mb-4 Los equipos usados en todos los procedimientos son requeridos para la alimentación animal de los diferentes sistemas productivos. 

    .row.mb-3
      .col-lg-2
        figure
          img.p-2(src='@/assets/curso/tema3/subtitulo.png' alt='comedores')

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 La administración del alimento es fundamental en las producciones pecuarias ya que este suministra los nutrientes necesarios para el crecimiento, desarrollo y producción del animal para asegurar el consumo de dicho alimento. Existen varios tipos de comederos que van desde el más tecnificado, calculando la ración por animal hasta el más simple, que requiere que el operario suministre de forma manual el alimento, los cuales se verán a continuación:
    
    h5.mb-4 Comederos manuales

    p.mb-4 Los comederos manuales como su nombre lo indica, es requerido el suministro del alimento por parte del operario en las diferentes bandejas, canoas o canales de alimentación.
    p.mb-4 Estos comederos pueden ser individuales o colectivos según sea el sistema productivo.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-rosa2.p-4
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/tema3/1.png' alt='Gallina')
        h2.text-center 1 - Bandeja o plato
        p.text-center Se utiliza para alimentar animales pequeños en fase de aprendizaje, se recomienda no usar en grupos grandes ya que puede causar peleas.

      .tarjeta.color-rosa2.p-4
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/tema3/2.png' alt='Caballos')
        h2.text-center 2 - En canoa
        p.text-center Se utiliza para alimentar animales pequeños en fase de aprendizaje, se recomienda no usar en grupos grandes ya que puede causar peleas.

      .tarjeta.color-rosa2.p-4
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/tema3/3.png' alt='Galpón de pollos')
        h2.text-center 3 - Longitudinales o lineales
        p.text-center Se utilizan para la alimentación de grandes grupos de animales donde se brinda el alimento de manera uniformes para que todos los animales consuman igual dentro de este tipo de comedero puede haber divisiones entre animales para evitar riñas y así segura el consumo de los animales más tímidos.

      .tarjeta.color-rosa2.p-4
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/tema3/4.png' alt='Comedero de pollos')
        h2.text-center 4 - Con tolva
        p.text-center Se utiliza para grandes grupos de animales y generalmente en producciones intensivas ya que su funcionamiento es el disponer alimento en la tolva y que por gravedad y consumo de los animales este vaya llenando la bandeja inferior así teniendo una disponibilidad de alimento mucho más constante y permanente.

    h5.mb-4 Comederos Automáticos

    p.mb-4 Este tipo de comedero es mucho más tecnificado ya que no requiere de la mano de obra del cuidador u operario ejecutando mejor el tiempo de este en otras labores necesarias y otorgando al animal mejores criterios de alimentación mucho más uniforme y evitando riñas por el consumo, de esta manera también beneficia al sistema productivo ya que evita desperdicios este tipo de alimentadores es utilizado principalmente en alimentos balanceados en forma de pellet extruder o harinas.

    p.mb-4 <b>Se pueden utilizar de dos maneras dependiendo el sistema productivo y etapa del animal:</b>

    .row.justify-content-center.mb-4 
      .col-md-3
        .crd.clr-paleYellow.align-items-center.p-4
          figure
            img(src='@/assets/curso/tema3/img3.png' alt='AvatarTop')
          h5 1 - Automáticos regulables
          p.text-center Son comederos automáticos que liberan el alimento a determinada hora, o situación programada todo es controlado por una computadora.

      .col-md-3
        .crd.clr-paleYellow.align-items-center.p-4
          figure
            img(src='@/assets/curso/tema3/img4.png' alt='AvatarTop')
          h5 2 - Automáticos de libre alimentación
          p.text-center Comederos en los cuales el animal aprende a liberar el alimento así comiendo cada que el animal tenga hambre o deseos de alimentarse, aplicando así un sistema de alimentación a voluntad del animal.

    .row.mb-3
      .col-lg-2
        figure
          img.p-2(src='@/assets/curso/tema3/subtitulo2.png' alt='Bebederos')

    p.mb-4 Los bebederos son fundamentales para la hidratación de los animales, estos deben estar siempre disponibles para cada animal que lo requiera, ya que la falta de hidratación provoca problemas de deshidratación, golpe de calor, baja en el consumo de alimento, etc., teniendo en cuenta lo anterior es un recurso determinante en el sistema productivo por esta razón no puede faltar. Estos bebederos tienen que estar en condiciones óptimas de limpieza, ubicación y altura, para que los animales dependiendo de la fase de desarrollo puedan acceder con facilidad a este, a continuación, se ven sus variedades:

    .row.align-items-center.mb-5
      .col-md-6
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-linea
              .row.align-items-center(numero="1" titulo="Bebedero de cubeta") 
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema3/1.jpg' alt='Bebedero de agua')
                .col-md-8  
                  p Recipientes de plásticos, requieren una limpieza continua y recambio de agua manual puede ser utilizado para hidratar varios animales al tiempo.

              .row.align-items-center(numero="2" titulo="Distribuidores de agua autocontenida")
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema3/2.jpg' alt='Distribuidores de agua de plastico')
                .col-md-8  
                  p Bebederos de plástico que requieren un llenado manual son muy utilizados en aves, su instalación puede ser colgante, requieren un acostumbramiento del animal.

              .row.align-items-center(numero="3" titulo="Bebederos de campana")
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema3/3.jpg' alt='Bebedero')
                .col-md-8  
                  p Son utilizados en los galpones de aves generalmente porque proporcionan agua de bebida a un grupo numeroso de aves, son fáciles de limpiar y de trasladar, se instalan directamente al suministro de agua.

              .row.align-items-center(numero="4" titulo="Bebederos automáticos (tipo mordida) (niple)") 
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema3/4.jpg' alt='Diferentes bebederos automáticos')
                .col-md-8  
                  p Son bebederos que son automáticos requieren de un acostumbramiento del animal para aprender a beber se requiere de una calibración especial en presión de agua, flujo y altura es recomendable que la presión se aumente a medida que el animal se desarrolla.

              .row.align-items-center(numero="5" titulo="Bebederos de canal") 
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema3/5.jpg' alt='Vacas bebiendo agua')
                .col-md-8  
                  p Son bebederos muy utilizados en ganadería bovina pequeños rumiantes y para hidratar equinos, consta de un canal lleno de agua que puede ser conectado directo al suministro o llenado por los cuidadores.

      .col-md-6
        figure
          img.p-2(src='@/assets/curso/tema3/vacas.jpg' alt='Seis vacas bebiendo agua')

    .titulo-principal1.color-acento-contenido.mb-2
      .titulo-principal1__numero
        span 
      h3 Producción

    p.mb-4  Son todos los equipos utilizados para mejorar los factores productivos asegurando las mejores condiciones al animal, brindándole el mayor bienestar y confort para que exprese todo su potencial productor. Dentro de estos equipos se tienen las criadoras o calentadores, los nidales, ordeñadoras mecánicas, ventiladores, siendo estos los tratados a continuación:

    .row.mb-4
      TabsC.color-primario
        .py-3.py-md-4(titulo="Criadoras")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              p Estas criadoras son resistencias que se calientan contando con una campana para focalizar y direccionar el calor y una lámpara infrarroja (de luz blanca) y generan una fuente de calor, esta debe ser debidamente vigilada para evitar sobrecalentamiento y posibles quemaduras o problemas fotosensibilización, son utilizadas en animales recién nacidos.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='Pollos bebes')

        .py-3.py-md-4(titulo="Nidales")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              p Son utilizados en aves de postura y es allí donde se depositan los huevos, debe de ser cómodos y atractivos para los animales se consideran que sean oscuros para que la gallina lo vea como un lugar seguro y realice la ovoposición, estos nidos pueden ser comunales.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/img6.png', alt='Pollos bebes')

        .py-3.py-md-4(titulo="Ordeñadoras mecánicas")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              p Este equipo permite realizar el ordeño de los animales son muy utilizados en grandes rumiantes como en pequeños, estas máquinas aplican vacío parcial al pezón para lograr extraer la leche, ejerce fuerzas que provoca un masaje en el pezón para aumentar la circulación del mismo evitando congestiones y posibles problemas de mastitis, estos equipos cuentan con un copa de ordeño, pezoneras, bomba de vacío, regulador de vacío, recibidor y bomba para la leche, mangueras de conducción, colector de ordeño, motor, entre otras. Es importante realizar una previa limpieza u desinfección de las diferentes partes para evitar enfermedades o alteraciones en el producto.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/img7.png', alt='Pollos bebes')

        .py-3.py-md-4(titulo="Ventiladores")
          .row.p-4
            .col-md-6.mb-4.mb-md-0
              p En el interior de los diferentes ya sean galpones, cocheras entre otros, se necesita que la temperatura sea la ideal para los animales para dar las mejores condiciones de manejo, la ventilación nos ayuda a regular la temperatura y la humedad en casos de calor extremo, también nos ayuda a la eliminación de los diferentes gases (amoniaco, dióxido de carbono, etc.) que se producen en los sistemas productivos y quedan contenidos en las naves de producción para mantener una ventilación ideal se requiere tener en cuenta los siguientes factores: 
              p • Velocidad del aire para la etapa productiva. 
              p • La renovación de aire.  
              p • Circulación del aire.
            .col-md-6
              figure
                img(src='@/assets/curso/tema3/img8.png', alt='Pollos bebes')
    separador 


    #t_3_2.titulo-segundo.color-acento-contenido
      .h4 3.2.	Técnicas de manejo

    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g1.color-rojo.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/cerdos.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Las diferentes técnicas de manejo son establecidas por el tipo de equipo usado ya que cada equipo dispone de sus técnicas de manejo, para este es importante determinar para cuantos animales está fabricado el equipo, en caso de los comederos hay unas especificaciones para cuantos animales, de esta manera se tendrá que realizar la cuenta de cuantos comederos se necesita para la producción. Es importante en las técnicas de manejo tener en cuenta las condiciones de limpieza y desinfección de los componentes ya que estos están en directo contacto con los animales y pueden ser causantes de la proliferación de agentes infecciosos.
    

</template>

<script>
export default {
  name: 'Tema3',
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
