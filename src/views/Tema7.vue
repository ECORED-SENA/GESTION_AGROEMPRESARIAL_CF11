<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1  Gestación
    
    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 La gestación es un proceso fisiológico de los animales donde la hembra inicia un proceso de desarrollo, conformación y maduración embrionaria la cual se produce por la fecundación del óvulo con el espermatozoide. <br><br/> La gestación de los animales varía dependiendo de la especie a continuación se explicarán los tiempos de gestación para cada especie animal (ver tabla 3).

    .row.justify-content-center.mb-4
      .col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Gestación por especie
      .col-md-8
        .tabla-b
          table
            thead
              tr
                th.text-center.text-white Especie
                th.text-center.text-white Tiempo de duración
            tbody
              tr
                td.text-center Bovino 
                td.text-center 283 días
              tr
                td.text-center Caprino
                td.text-center 150 días
              tr
                td.text-center Porcino
                td.text-center 3 meses, 3 semanas, 3 días.
              tr
                td.text-center Equino
                td.text-center 11-12 meses
              tr
                td.text-center Ovino
                td.text-center 152 días

    p.mb-4 Para la identificación y seguimiento de la preñez se debe tener claro, los tiempos y periodos de presentación del celo animal, ya que si se hay una repetición de celo quiere decir que el animal no se encuentra preñado o en gestación. 
    p.mb-4 Presentación de celo en las especies pecuarias (ver tabla 4):

    .row.justify-content-center.mb-5
      .col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Periodo de presentación de celo
      .col-md-8
        .tabla-b
          table
            thead
              tr
                th.text-center.text-white Especie
                th.text-center.text-white Periodo de presentación
            tbody
              tr
                td.text-center Bovinos 
                td.text-center Cada  21 días
              tr
                td.text-center Equinos 
                td.text-center 18 - 20 días 
              tr
                td.text-center Porcinos 
                td.text-center 2 a 7 días después del destete.
              tr
                td.text-center Caprinos 
                td.text-center 18 a 22 días 
              tr
                td.text-center Ovinos
                td.text-center 18 a 22 días 

    p.mb-5 Existen métodos para diagnosticar la preñez de los animales, donde se puede separar dos grandes grupos, el primer grupo de métodos es el más práctico y utilizado y es por medio del sentir u observar, y el otro método se basa en marcadores químicos hormonales que tiene un animal gestante.

    .row.justify-content-center.mb-4
      .col-md-5
        h5.text-center Métodos para el diagnóstico y seguimiento de la gestación:

    .row.mb-4
      .col-md-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar1
            img(src='@/assets/curso/tema7/1.png' alt='AvatarTop')
            .tarjeta.color-rosa6.p-2
              h5.text-center La ausencia de celo
              p.text-center Si el celo no se repite quiere decir que el animal está preñado.

          .tarjeta-avatar1
            img(src='@/assets/curso/tema7/2.png' alt='AvatarTop')
            .tarjeta.color-rosa6.p-2
              h5.text-center Palpación
              p.text-center Se utiliza para detectar y realizar seguimiento de la preñez.

          .tarjeta-avatar1
            img(src='@/assets/curso/tema7/3.png' alt='AvatarTop')
            .tarjeta.color-rosa6.p-2
              h5.text-center Progesterona en leche
              p.text-center Estas pruebas son útiles para realizar seguimiento a animales con problemas de preñez, al momento de la monta o inseminación los niveles deben estar bajos y después de 18 a 21 días estas deben aumentar.

          .tarjeta-avatar1
            img(src='@/assets/curso/tema7/4.png' alt='AvatarTop')
            .tarjeta.color-rosa6.p-2
              h5.text-center Crecimiento fetal
              p.text-center Si bien es un método de diagnóstico muy tardío, se puede utilizar como signo de diagnóstico. Teniendo en cuenta que la gran parte del crecimiento fetal se da en los últimos meses.

          .tarjeta-avatar1
            img(src='@/assets/curso/tema7/5.png' alt='AvatarTop')
            .tarjeta.color-rosa6.p-2
              h5.text-center Análisis de progesterona en sangre
              p.text-center Los análisis de sangre son métodos muy utilizados en granjas o predios muy tecnificados en este se evidencia los niveles de progesterona en sangre los cuales en caso de una preñez tienen que aumentar y permanecer elevados.

    P.mb-4 Los cuidados que se les deben dar a las hembras en estado de gestación son de vital importancia para garantizar un parto ideal y el nacimiento de animales en perfectas condiciones, el objetivo de la gran mayoría de explotaciones es la cría de animales para su posterior engorde, se debe considerar realizar unos cuidados especiales a las madres donde los factores nutricionales, confort animal, manejo sanitario, y tiempos de descanso son determinantes para lograr el objetivo final. Estos cuidados son:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-5
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-primario
              .row.align-items-center(numero="1" titulo="Alimentación") 
                .col-md-12
                  p El alimento ofrecido al animal en estado de gestación tiene que cumplir con los requerimientos nutricionales exigidos tanto por la madre como por el feto en estado de desarrollo, este alimento tiene que ser de calidad y en cantidad suficiente para evitar la desnutrición del animal y futuros problemas en el parto, es importante también realizar una suplementación con minerales para así evitar problemas de hipocalcemia deficiencias de fosforo entre otros problemas por deficiencia de minerales.

              .row.align-items-center(numero="2" titulo="Sanidad")
                .col-md-12
                  p Es importante que el animal este al día en todo su plan sanitario para así estar en plenas condiciones, es importante también tener en cuenta la desparasitación antes del parto para evitar enfermedades durante y después del parto.

              .row.align-items-center(numero="3" titulo="Espacio adecuado")
                .col-md-12
                  p Es importante ofrecer el espacio adecuado a los animales para evitar situaciones de estrés por confinamiento, también elegir un lugar plano donde el aminal no tenga riesgos de caídas o deslices.

              .row.align-items-center(numero="4" titulo="Tiempo de descanso") 
                .col-md-12
                  p Procurar que el animal en su último tercio de gestación no realice actividades de producción, ni traslados, procurar que el animal permanezca tranquilo y sin condiciones de estrés. 

      .col-md-6
        figure
          img.p-2(src='@/assets/curso/tema7/img2.jpg' alt='Vaca')


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
