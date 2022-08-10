<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1  Equipos e Implementos
    
    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 Los mamíferos son animales vertebrados cuya característica más marcada es la provisión de leche hacia sus crías, por medio de esta generan una protección para las crías ayudando a su supervivencia. En la lactancia se pasan nutrientes e inmunidad de la madre a la cría, inicia inmediatamente ocurre el nacimiento hasta que las crías sean capaces de conseguir su alimento por cuenta propia.

    p.mb-4 En cuanto la cría va creciendo, los componentes requeridos en la leche van cambiando de acuerdo con las necesidades; la cantidad de lactosa presente en la leche va disminuyendo gradualmente y van aumentando ácidos grasos y proteínas. La duración de la lactancia es propia de cada especie.
   
    .titulo-principal1.color-acento-contenido.mb-2
      .titulo-principal1__numero
        span 
      h3 La anatomía de la glándula mamaria es diferente entre especies

    p.mb-4 El número de glándulas y los pezones no son iguales en la vaca, la yegua y cerda. Sin embargo, la anatomía microscópica es muy similar en todas las especies. La glándula mamaria en todas las especies se da desde la etapa fetal:

    .row.justify-content-center.mb-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Glándula mamaria rumiantes")
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/imgslyder.png', alt='Granja')
          .col-md-9.mb-4.mb-md-0
            p Se recomienda que según el tipo de explotación avícula los galpones deben construirse en un terreno con buen drenaje y una corriente natural, donde las corrientes de aire no sean tan fuertes se recomienda aprovechar si hay árboles para así regular la temperatura y utilizarlos de barrera para romper el viento. Debe estar en un lugar de fácil supervisión lejos del ruido y cualquier causal de estrés para el animal lejos de las aguas estancadas o tierras con tendencia a inundarse. 

        .row.align-items-center(titulo="Glándula mamaria de la yegua")
          .col-md-12.mb-md-2
            p La orientación del galpón es importante según la zona en la que se va a construir y las condiciones climáticas de la misma, ya sea para clima frío y templado o para clima cálido.
          .col-md-3.mb-md-2
            figure
              img(src='@/assets/curso/tema2/imgslyder1.png', alt='Orientación para clima frío y templado')
          .col-md-9.mb-md-2
            h5.mb-3 Clima frio y templado:
            p.mb-5 Este clima se considera desde los 15 y 20 grados centígrados donde el eje más largo del galpón se direccione de norte a sur esto para lograr una mayor temperatura provocada por la luz solar que el este permanentemente se posiciona sobre el galpón.
            h5.mb-3 Clima cálido:
            p.mb-5 Las condiciones de clima cálido se presentan a temperaturas mayores de los 20 grados centígrados donde el eje del galpón se debe ubicar de manera de oriente a occidente para así tener periodos de sombra y regular un poco la temperatura.

        .row.align-items-center(titulo="Glándula mamaria en cerdas")
          .col-md-12.mb-md-4
            p Los materiales empleados en la construcción de galpones generalmente son estructuras elaboradas con hierro y hormigón o ladrillos en algunas unidades pecuarias se emplean mallas de alambre para ayudar a la eliminación de gases y evaporación del calor. 
            p Los galpones en la actualidad se pueden dividir en dos clases o tipos dependiendo su tecnología aplicada y características estos son: los galpones tradicionales y los galpones mucho más modernos con tecnología para el control y confort medioambiental que son galpones de ambiente controlado.

          .col-md-3.mb-4
            figure
              img(src='@/assets/curso/tema2/imgslyder2.png', alt='Galpón de pollos')
          .col-md-9
            h5 Galpones tradicionales:
            p Son los más comunes y antiguos donde se alojan los animales en ocasiones, solo se cuenta, con medios de aireación por ventiladores, el uso de cortinas para controlar las condiciones ambientales y generar un mejor ambiente para el animal.
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/imgslyder3.png', alt='Galpón con trabajador')
          .col-md-9
            h5 Galpones de ambiente controlado:
            p Son galpones con un sistema tecnológico de regulación e información contando con un sistema controlado de ventilación, refrigeración por evaporación o aspersión de agua para generar un ambiente más fresco, o sistemas de calefacción automática para generar un ambiente más cálido mucho más utilizado en el manejo del pollito. Este también cuenta con sistema de iluminación para brindar al pollo una luz constante así eliminado los factores negativos del fotoperiodo.
        
        .row.align-items-center(titulo="Duración de la lactancia")      




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
