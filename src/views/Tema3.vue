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
      
    .row.justify-content-center.mb-4
      .col-md-5
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='Alimentación')
      .col-md-3
        .crd.clr-paleYellow.align-items-center.p-4
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Comederos. 
            li 
              i.fas.fa-angle-right
              | Bebederos. 
            li 
              i.fas.fa-angle-right
              | Distribución del alimento.

    .row.justify-content-center
      .col-md-5.mb-md-0
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='Alimentación')
      .col-md-3.mb-md-0
        .crd.clr-paleYellow.align-items-center.p-4
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

    #t_3_1.titulo-segundo
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
      .tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/1.png' alt='Gallina')
        h2.text-center 1 - Bandeja o plato
        p.text-center Se utiliza para alimentar animales pequeños en fase de aprendizaje, se recomienda no usar en grupos grandes ya que puede causar peleas.

      .tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/2.png' alt='Caballos')
        h2.text-center 2 - En canoa
        p.text-center Se utiliza para alimentar animales pequeños en fase de aprendizaje, se recomienda no usar en grupos grandes ya que puede causar peleas.

      .tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/3.png' alt='Galpón de pollos')
        h2.text-center 3 - Longitudinales o lineales
        p.text-center Se utilizan para la alimentación de grandes grupos de animales donde se brinda el alimento de manera uniformes para que todos los animales consuman igual dentro de este tipo de comedero puede haber divisiones entre animales para evitar riñas y así segura el consumo de los animales más tímidos.

      .tarjeta.color-rosa.p-4
        .row.justify-content-center.mb-3
          .col-8
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


    #t_3_2.titulo-segundo
      .h4 3.2.	Técnicas de manejo

    

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
