<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
        >
          <base-section-heading title="Salud mental de las personas mayores" />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Tienen un impacto positivo tanto en las personas mayores como en sus cuidadores, desde luego los mismos deben aplicarse por un profesional especializado en el ámbito.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              La salud mental incluye nuestro bienestar emocional, psicológico y social. Afecta la forma en que pensamos, sentimos y actuamos cuando enfrentamos la vida. También ayuda a determinar cómo manejamos el estrés, nos relacionamos con los demás y tomamos decisiones. La salud mental es importante en todas las etapas de la vida, incluso a medida que envejecemos.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Muchos adultos mayores corren el riesgo de tener problemas de salud mental. Pero esto no significa que los problemas de salud mental sean una parte normal del envejecimiento. Los estudios muestran que la mayoría de las personas mayores se sienten satisfechas con sus vidas, a pesar de que pueden tener más enfermedades o problemas físicos.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Sin embargo, los cambios importantes en la vida a veces pueden provocar molestias, estrés o tristeza. Estos cambios pueden incluir la muerte de un ser querido, la jubilación o el tratamiento de una enfermedad grave. Muchas personas mayores eventualmente se adaptan a los cambios, pero algunas pueden tener más problemas para adaptarse. Esto puede ponerlos en riesgo de enfermedades mentales como la depresión y la ansiedad.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Es importante reconocer y tratar las enfermedades mentales en los adultos mayores. Estas afecciones no solo causan sufrimiento mental. También pueden dificultar el manejo de otros problemas de salud, lo que es especialmente cierto si se trata de problemas crónicos de salud.
            </p>
          </div>
          <div
            id="yt"
            align="center"
          >
            <iframe
              class="rembed-responsive-item"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/eWXwEnSCAgs"
              frameborder="0"
              :allowfullscreen="pcompleta"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img src="@/assets/infografia-saludmental.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
    data () {
      return {
        pcompleta: null,
      }
    },
  }
</script>
