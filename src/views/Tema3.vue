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

    .row.mb-5
      .col-lg-2
        .tarjeta-avatar-b
          .tarjeta.tarjeta--azul
            .p-4
              h2 Comederos
          .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')

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
