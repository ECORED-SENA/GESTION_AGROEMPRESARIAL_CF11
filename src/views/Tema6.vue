<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1  Prácticas de manejo animal
    
    #t_6_1.titulo-segundo
      .h4 6.1.	Protocolos

    #t_6_2.titulo-segundo
      .h4 6.2.	Programación
    
    #t_6_3.titulo-segundo
      .h4 6.3.	Procedimientos técnicos

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
