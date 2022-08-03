<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Equipos e Implementos
    
    #t_4_1.titulo-segundo
      .h4 4.1.	Principios

    #t_4_2.titulo-segundo
      .h4 4.2.	Comportamiento Animal	

    #t_4_3.titulo-segundo
      .h4 4.3.	Prácticas de bienestar animal


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
