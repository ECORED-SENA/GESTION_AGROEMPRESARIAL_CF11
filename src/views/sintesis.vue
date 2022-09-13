<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, haga un análisis de la estructura que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes. Además, haga un repaso de los puntos que considere necesario.
    p <b>¡Adelante!</b> 


    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-md-12
        .row.justify-content-center
          .col-md-3
            a.anexo.mb-2(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
