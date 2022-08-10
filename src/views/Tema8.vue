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
          .col-md-12
            p.mb-4 Está compuesta por 4 cuartos completamente independientes, dos delanteros y dos traseros. Los cuartos traseros tienen mayor capacidad de producción hasta aproximadamente el 60% y un 40% los cuartos delanteros; estos cuartos están separados por tejido conectivo no definido y los cuartos derechos e izquierdos están separados por un ligamento suspensorio medio. No existe la posibilidad de compartir leche de un cuarto a otro, existe la probabilidad de intercambio sanguíneo. Posición inguinal. 
            p Cada cuarto finaliza en un pezón que tiene una longitud aproximada de 7 a 8cm, estos pezones están constituidos por 4 capas: Epidermis, dermis, músculo y endotelio.
          .col-md-12
            figure
              img(src='@/assets/curso/tema8/1.jpg', alt='Granja')
          

        .row.align-items-center(titulo="Glándula mamaria de la yegua")
          .col-md-7
            p.mb-4 La yegua posee dos glándulas mamarias que al igual que en la vaca están separadas y no hay intercambio de leche solo de flujo sanguíneo; las glándulas son completamente independientes, el pezón de la yegua es en forma de cilindro y suele ser más pigmentada.
            p Posee dos ligamentos suspensorios que son lateral (mayor soporte de la glándula) y medial; la ubre tiene una capa delgada de piel con escaso pelo. Posición inguinal.

          .col-md-5
            figure
              img(src='@/assets/curso/tema8/2.jpg', alt='Orientación para clima frío y templado')
          
        .row.align-items-center(titulo="Glándula mamaria en cerdas")
          .col-md-7
            p.mb-4 Se encuentran formando dos líneas paralelas sobre la pared ventral del cuerpo es decir de posición toracolumbar.
            p Se unen al cuerpo por medio de tejido adiposo y conectivo por medio de la fascia. Son 2 pares de glándulas torácicas, cuatro ventrales y un par inguinal para un total de 12 a 14 glándulas. Cada pezón está compuesto por una glándula y cada pezón tiene dos salidas al exterior. 

          .col-md-5
            figure
              img(src='@/assets/curso/tema8/3.jpg', alt='Orientación para clima frío y templado')
        
        .row.align-items-center.justify-content-center(titulo="Duración de la lactancia")
          .col-md-12 
            p Es el tiempo aproximado que se espera que un animal tenga de producción de leche, se debe tener en cuenta la raza y condiciones ambientales.
          .col-md-8
            .tabla-a
              table
                thead
                  tr
                    th.text-center Animal
                    th.text-center Duración
                tbody
                  tr
                    td.text-center Vaca
                    td.text-center 305 días
                  tr
                    td.text-center Yegua
                    td.text-center 11 - 12 meses
                  tr
                    td.text-center Oveja
                    td.text-center 6 - 7 meses
                  tr
                    td.text-center Cabra
                    td.text-center 7 - 8 meses (sistema intensivo)
                  tr
                    td.text-center Cerda
                    td.text-center 21 a 28 días

    .titulo-principal1.color-acento-contenido.mb-2
      .titulo-principal1__numero
        span 
      h3 Anomalías de las glándulas mamarias

    p.mb-4 Se pueden agrupar en secciones por el tipo de anomalía y origen, como se ve a continuación:

    SlyderB.vaca.p-4.mb-5(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Malformaciones',
        texto:
          'Las malformaciones se pueden producir en diferentes partes de la glándula mamaria, pezón, conductos, esfínteres, entre otros. <br></br>Pezones supernumerarios: común en cerdas.<br></br>Polimastia: mayor número de glándulas mamarias.<br></br>Ausencia de pezón (Atelia).',
        imagen: require('@/assets/curso/tema8/tetas1.jpg'),
      },
      {
        titulo: 'Alteraciones (tamaño y estructura)',
        texto:
          'Hiperplasia mamaria<br></br>Crecimiento descontrolado de células dentro de la glándula mamaria.<br></br>Quistes<br></br>Sáculos que son llenados por presencia de líquido debido a una salida secretora obstruida.<br></br>Inflamación<br></br>La inflamación de la glándula mamaria es la afección más común en animales, existen de diferentes tipos por el origen que tenga, entre los más comunes están:<br></br>Tumores<br></br>De origen conectivo y origen epitelial como adenomas y carcinomas.<br></br>edema y endurecimiento, se observan cambios físicos en la leche.',
        imagen: require('@/assets/curso/tema8/tetas2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Mastitis aguda<br></br>Más frecuente después del parto y se puede presentar en cualquier momento, puede deberse a un comienzo de algo crónico, se pueden evidenciar cambios físicos en la leche. Puede causar a la hembra fiebre y anorexia.<br></br>Mastitis crónica<br></br>En ocasiones es debido a mastitis agudas no tratadas correctamente, se puede observar edema y endurecimiento, se observan cambios físicos en la leche.<br></br>Mastitis granulomatosa<br></br>Se evidencia como tejido conectivo fibroso y puede ser a causa de diferentes bacterias como Staphilococcus aureus, Actinobacillus lignierensii y amitis micóticas Aspergillus fumigatus.',
        imagen: require('@/assets/curso/tema8/tetas3.jpg'),
      },
      {
        titulo: 'Trastornos circulatorios',
        texto:
          'Edema<br></br>Empieza siendo fisiológico y puede volverse patológico, causando un endurecimiento irreversible de la ubre, obstruyendo ductos principales para la segregación de la leche.<br></br>Hemorragia<br></br>Pueden ser superficiales o profundas, en las superficiales son hematomas generados por golpes pequeños o petequias que se suelen desvanecer con el paso de los días, las hemorragias profundas se dan por traumatismos severos y son difíciles de controlar.',
        imagen: require('@/assets/curso/tema8/tetas4.jpg'),
      },
    ],
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
