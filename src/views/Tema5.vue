<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Recepción de Animales

    p.mb-4(data-aos="fade-right") Los procesos de recepción de animales en las producciones pecuarias es el momento en el que llegan al predio los animales nuevos siendo estos requeridos, ya que existen producciones especialmente la ganadera donde se recepcionan animales juveniles para realizar el proceso de ceba, o cuando se realiza un cambio de reproductor en el predio, la llegada de animales nuevos entre otros aspectos es de gran importancia para la continuidad del ciclo productivo.

    .row.mb-4(data-aos="fade-up")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La introducción de animales nuevos debe hacerse bajo serias medidas de bioseguridad, ya que cerca del 90% de la entrada de enfermedades es a causa del ingreso de animales nuevos al establecimiento. Por ende, se recomienda que el nivel de bioseguridad y cuidados de la granja de origen sea superior a la granja receptora y evitar la adquisición de animales nuevos en gran medida.
    
    .bg_grad-06
      separador 

      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        .h2 5.1.	Procedimientos

      p.mb-4(data-aos="fade-left") Al ingresar los animales nuevos se deben tener claros los protocolos de bioseguridad de cada producción, para así, proceder al descargue de los animales en el área de cuarentena dispuesta por el predio, para allí realizar el aislamiento y vigilancia de los mismos en busca de sintomatología. No menos importante se debe respetar el periodo de aclimatación de los animales nuevos, logrando que el nivel de estrés y alteración del sistema inmune se regule para evitar muertes repentinas o enfermedades. Se pueden ver algunos procedimientos a seguir:

      .row.mb-4(data-aos="fade-up") 
        .col-md-12
          .crd.clr-paleYellow5.p-4.mb-4
            .row.align-items-center.justify-content-center.mb-4 
              .col-lg-4.col-12
                .titulo-principal1.color-acento-contenido.mb-3
                  .titulo-principal1__numero.p-1
                    h5.text-white.text-center Solicitud de documentos sanitarios vigentes
                p Revisión de la documentación.
              .col-lg-1.col-4
                figure
                  img(src='@/assets/curso/tema5/documentos.png', alt='Niño en una granja alimentando una cabra')
            
            .row.justify-content-center
              .col-md-10  
                .lineamarilla

            .row.align-items-center.justify-content-center.mb-4
              .col-md-5.col-6
                figure.mb-4
                  img(src='@/assets/curso/tema5/carro1.png', alt='Niño en una granja alimentando una cabra')
              .col-md-5
                .titulo-principal1.color-acento-contenido.mb-3
                  .titulo-principal1__numero
                    h5.p-1.mb-1.text-white.text-center Verificación del medio de transporte y condición animal
                p Se realiza una verificación visual de las condiciones en la que fueron transportados los animales evaluando conjuntamente a los animales para descartar muertes, laceraciones, heridas, entre otras injurias causadas en el viaje.

            .row.justify-content-center
              .col-md-10  
                .lineamarilla

            .row.align-items-center.justify-content-center.mb-4
              .col-md-5
                .titulo-principal1.color-acento-contenido.mb-3
                  .titulo-principal1__numero
                    h5.p-1.mb-1.text-white.text-center Descargue de los animales
                p.mb-4 Este proceso debe realizarse de manera calmada y tranquila por parte de los operarios para evitar que los animales entren en pánico o estrés y puedan sufrir lesiones, se recomienda que se realice a través de plataformas especiales para el descargue y cargue de animales las cuales deben contar con superficies antideslizante con un inclinación menor a 20 grados, se debe asegurar que la entrada la salida del camión hacia la rampa quede bien alineada y a una distancia cercana para evitar fracturas de miembros por parte de los animales. 
                p.mb-4 Es importante realizar un conteo para asegurar que coincidan los animales descargados con los adquiridos o citados en la documentación. 

              .col-md-5.col-10
                figure
                  img(src='@/assets/curso/tema5/carro2.png', alt='Niño en una granja alimentando una cabra')
      separador

      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        .h2 5.2.	Documentos sanitarios oficiales

      p.mb-4(data-aos="fade-left") Documentos sanitarios oficiales para realizar el transporte de animales vivos con destino ya sea al matadero u otros predios pecuarios, es importante conocerlos ya que al momento de la recepción se deben revisar y verificar su validez, estos son:

      .tarjeta.bg1.p-4.mb-5(data-aos="fade-down")
        PasosB.color-acento-botones
          .row.align-items-center(titulo="").p-4
            .col-lg-7
              h4 1. Registro de usuario ante el sistema de identificación
              p Son todas aquellas personas naturales o jurídicas a quienes van dirigidos los productos, bienes o servicios que se encuentren registrados ante el ICA.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/1.png' alt='Hombres primitivos con un mamut').mb-4

          .row.align-items-center(titulo="").p-4
            .col-lg-7
              h4 2. Guía Sanitaria de Movilización Interna (GSMI)
              p Es un instrumento de control sanitario por medio del cual el ICA autoriza la movilización de animales, teniendo en cuenta condiciones sanitarias favorables en un momento específico, tanto en el lugar de origen como en el de destino de los animales o de los productos que se van a movilizar. Estas condiciones dan la base para la autorización o no de la movilización y permiten al ICA intervenir de manera oportuna para prevenir la difusión de enfermedades y la ocurrencia de epidemias (<b>ICA, 2021</b>).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/2.png' alt='Hombres primitivos con un mamut').mb-4

          .row.align-items-center(titulo="").p-4
            .col-lg-7
              h4 3. Registro Único de Vacunación (RUV)
              p Documento que ampara la vacunación de las enfermedades de control oficial en Colombia, para las especies: bovina, bufalina, porcina, équida y las demás que disponga el ICA (<b>ICA, 2021</b>).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/3.png' alt='Hombres primitivos con un mamut').mb-4

          .row.align-items-center(titulo="").p-4
            .col-lg-7
              h4 4. Registro Único de Identificación (RUI)
              p Documento que ampara la identificación de los animales en las zonas declaradas libres y en proceso de Erradicación de Peste Porcina clásica en Colombia según la normativa vigente (<b>ICA, 2021</b>).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/4.png' alt='Hombres primitivos con un mamut').mb-4

        

</template>

<script>
export default {
  name: 'Tema5',
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
