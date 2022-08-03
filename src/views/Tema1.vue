<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Especie animal 

    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los sistemas productivos pecuarios se basan en la explotación y aprovechamiento de especies animales de las cuales se obtienen, principalmente, alimentos y materias primas para la industria como leche, huevo, cárnicos, pieles y fibras, entre otros, los cuales se consumen a diario en todos los hogares del mundo.
            br
            p Además de los alimentos y las materias primas, existen sistemas pecuarios enfocados en la obtención de otro tipo de beneficios de los animales, como trabajo (mulares, asnales), recreación (equinos, peces ornamentales) e incluso polinización (apicultura).    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        p La producción pecuaria ha tenido progresos importantes en los últimos años gracias a la evolución de las tecnologías en materia de:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/vec1.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            p.text-center Alimentación
      
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/vec2.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            p.text-center Mejoramiento genético

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/vec3.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            p.text-center Equipamiento

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/vec4.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            p.text-center Sanidad animal

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/vec5.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            p.text-center Instalaciones

    #t_1_1.titulo-segundo
      .h4 1.1. Características

    #t_1_2.titulo-segundo
      .h4 1.2.	Etapas de desarrollo

    #t_1_3.titulo-segundo
      .h4 1.3.	Técnicas de manejo


  
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
