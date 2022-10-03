<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Especie animal 

    .bg_grad-01
      .row.mb-5(data-aos="fade-up")
        .col-md-12.col-12
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Los sistemas productivos pecuarios se basan en la explotación y aprovechamiento de especies animales de las cuales se obtienen, principalmente, alimentos y materias primas para la industria como leche, huevo, cárnicos, pieles y fibras, entre otros, los cuales se consumen a diario en todos los hogares del mundo.
              br
              p Además de los alimentos y las materias primas, existen sistemas pecuarios enfocados en la obtención de otro tipo de beneficios de los animales, como trabajo (mulares, asnales), recreación (equinos, peces ornamentales) e incluso polinización (apicultura).    
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
        .col-md-10
          p La producción pecuaria ha tenido progresos importantes en los últimos años gracias a la evolución de las tecnologías en materia de:
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec1.svg' alt='Alimentación')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Alimentación
        
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec2.svg' alt='Mejoramiento genético')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Mejoramiento genético

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec3.svg' alt='Equipamiento')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Equipamiento

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec4.svg' alt='Sanidad animal')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Sanidad animal

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec5.svg' alt='Instalaciones')
            .tarjeta.color-1
              .text-black.p-4
                h5.text-center Instalaciones

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-up")
        .col-md-8
          p.text-center Los progresos de la producción pecuaria se evidencian, entre otras cosas, en el aumento de los volúmenes de producción y en el mejoramiento de la calidad de los productos destinados a atender la creciente demanda.

      .row.justify-content-center.align-items-center.pb-5(data-aos="fade-up")
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img1.png' alt='Empresa Industrial')

      .row.justify-content-center.align-items-center(data-aos="fade-up")
        .col-md-12
          p.text-center Las especies animales que se trabajan en los sistemas productivos pecuarios se caracterizan, entre otras cosas, por:

        .row.my-4(data-aos="fade-left")
          .col-md-12
            .tarjeta.fondo-slyder.mb-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    h4 Adaptabilidad
                    p Los sistemas productivos basados en el aprovechamiento animal están adaptados a múltiples condiciones climáticas, geográficas, edáficas y ambientales por lo que estas explotaciones se encuentran casi que en cualquier entorno. Gracias a esta característica es que la producción pecuaria resulta esencial para el empleo y la alimentación de millones de familias en el mundo entero.
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img2.png', alt='Ternero')

                .row.justify-content-center.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    h4 Diversidad
                    p Las especies pecuarias se pueden trabajar bajo diferentes esquemas, los cuales van desde los más tecnificados y avanzados hasta los más básicos y elementales, lo cual de por sí demuestra la amplitud de modelos y la diversidad de montajes por medio de los que se puede ejercer la actividad productiva. 
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img3.png', alt='Galpón de gallinas')

                .row.justify-content-center.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    h4 Rendimientos
                    p Las especies animales que se emplean para la producción pecuaria son fruto de un proceso de selección que se ha llevado a cabo durante miles de años, tomando en cuenta precisamente variables como sus rendimientos y capacidad productiva.  
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img4.png', alt='Chivo')
                
                .row.justify-content-center.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    h4 Domesticación
                    p Otras de las características de las especies animales es la capacidad que poseen para relacionarse con el ser humano y adaptarse al manejo, lo que se ha denominado un proceso de domesticación, el cual es supremamente importante para desarrollar sistemas pecuarios como los que se conocen hoy día. 
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='Animales de granja')

                .row.justify-content-center.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    h4 Diversos usos y subproductos
                    p Las especies que son aprovechadas comercialmente tienen la característica de poseer varios usos, además del principal. Por ejemplo, en la producción bovina existen productos principales, como leche y carne; pero también estos animales proveen otras materias primas como el cuero o la carnaza, lo cual les confiere una connotación especial.
                
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='Materiales')
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1. Etapas de desarrollo

    p.mb-4(data-aos="fade-right") Los diferentes sistemas productivos extraen los recursos de la canasta familiar de granjas especializadas. Estas se especializan en las especies animales bovinas, porcinas, aves (pollo engorde, gallina ponedora), pequeños rumiantes (ovejas y cabras), y equinos. A continuación, se puede ver las características y etapas de desarrollo de estas especies:

    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/03pDoWm6PVo" title="Manejo de las especies pecuarias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2. Técnicas de manejo

    p.mb-4(data-aos="fade-right") La definición de las diferentes técnicas de manejo es un concepto que se utiliza para definir todas las acciones realizadas por los manipuladores de los animales en pro de un buen comportamiento animal y mejor un aspecto productivo, para brindar al animal condiciones óptimas para lograr mejor desempeño del mismo, estas técnicas están fundamentadas en:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
      .col-md-8
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Conocer al animal y sus instintos, reconociendo su hábitat y espacio de confort con el fin de reducir el estrés, la excitación, el agotamiento, entre otros.
          li 
            i.fas.fa-angle-right
            | Aplicar las diferentes medidas de bioseguridad, con la finalidad de conocer y reducir todas las diferentes situaciones de peligro que se puedan presentar tanto para la protección del hombre como del animal.
          li 
            i.fas.fa-angle-right
            | Aplicación de los diferentes conocimientos relacionados a las instalaciones y equipos, utilizados con el fin de mantener relajados y tranquilos a los animales, identificar y retirar las distracciones, para así mejorar las labores realizadas donde se ejecute menos trabajo con mayor rendimiento y obteniendo eficacia en la producción
          li 
            i.fas.fa-angle-right
            | Aplicación de los diferentes métodos de adiestramiento animal, que no ponga en peligro el personal y a las especies animales, desde el momento de su nacimiento hasta la el final de la vida útil productiva facilitando su manejo, conducción y traslado.
          li 
            i.fas.fa-angle-right
            | Aplicación de tratamientos de forma adecuada, que no ponga en riesgo la salud animal ni la humana.    
  
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
