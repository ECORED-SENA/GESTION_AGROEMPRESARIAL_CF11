<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Recepción de Animales

    #t_5_1.titulo-segundo
      .h4 5.1.	Procedimientos

    #t_5_2.titulo-segundo
      .h4 5.2.	Técnicas de manejo

    #t_5_3.titulo-segundo
      .h4 5.3.	Documentos sanitarios oficiales
      
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
