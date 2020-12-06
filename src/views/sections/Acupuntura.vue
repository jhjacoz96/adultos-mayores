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
          <base-info-card
            title="Acupupuntura"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Tienen un impacto positivo tanto en las personas mayores como en sus cuidadores, desde luego los mismos deben aplicarse por un profesional especializado en el ámbito.
            </p>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              El objetivo de los mismos es reducir el dolor e incluso el nivel de estrés al que está sometido una persona.
            </p>
          </div>
          <h1 class="my-2">
            Beneficios:
          </h1>
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
          <div
            id="yt"
            align="center"
          >
            <iframe
              class="embed-responsive-item"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/9i3uf0gQIWQ"
              frameborder="0"
              :allowfullscreen="allowfullscreen"
            />
          </div>
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
        allowfullscreen: null,
      }
    },
  }
</script>
