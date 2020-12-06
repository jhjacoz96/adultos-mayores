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
          <base-section-heading title="Terapia alternativa" />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Tienen un impacto positivo tanto en las personas mayores como en sus cuidadores, desde luego los mismos deben aplicarse por un profesional especializado en el ámbito.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              El objetivo de los mismos es reducir el dolor e incluso el nivel de estrés al que está sometido una persona.
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img src="@/assets/terapia-alternativa.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>
