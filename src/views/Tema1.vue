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
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec1.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            h4.text-center PANTALLA
            p.text-center Interfaz de salida, lo que quiere decir que la máquina comunica al humano a través del ambiente gráfico para trabajar, por lo general en sistemas POS las pantallas son táctiles, por lo que es también interfaz de entrada, pues el humano le transmite información a la máquina.
      
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec2.svg' alt='AvatarTop')
        .tarjeta.color-2
          .text-black.p-4
            h4.text-center IMPRESORA
            p.text-center Interfaz de salida, pues la máquina transmite o convierte datos en elementos entendible para el humano. Las impresoras en puntos de venta son con rollos especiales e impresión térmica.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec3.svg' alt='AvatarTop')
        .tarjeta.color-3
          .text-black.p-4
            h4.text-center TECLADO
            p.text-center Dispositivo que presenta el conjunto de las teclas con los símbolos para escribir el idioma y otras adicionales para ejecutar comandos a la computadora. Como permite que el humano le ingrese información a la computadora, es un dispositivo de entrada.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec4.svg' alt='AvatarTop')
        .tarjeta.color-1
          .text-black.p-4
            h4.text-center LECTOR CÓDIGO DE BARRA
            p.text-center O escáner es un dispositivo que utiliza un láser para leer un código de barras y entrar información de manera automática al sistema. Por esta razón, igual que el teclado es una interfaz de entrada.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec5.svg' alt='AvatarTop')
        .tarjeta.color-2
          .text-black.p-4
            h4.text-center LECTOR BIOMÉTRICO
            p.text-center Se trata de un sensor de huellas digitales dactilares. Es un dispositivo de entrada, que es capaz de leer, guardar e identificar las huellas dactilares.

      .tarjeta-avatar
        img(src='@/assets/curso/tema4/vec6.svg' alt='AvatarTop')
        .tarjeta.color-3
          .text-black.p-4
            h4.text-center <i>MOUSE</i>
            p.text-center Dispositivo que se maneja con una sola mano y permite dirigir el movimiento del puntero que aparece en pantalla para transmitir diversas órdenes o comandos, por esto es una interfaz de entrada.




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
