<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-human-handsup"
      title="Cuidados y actividades físicas"
    />
    <v-container>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="card.img"
            >
              <v-card-title>{{ card.title }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{ card.text }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Actividades de resistencia',
          text: 'Ó aeróbicas, aumentan la respiración y la frecuencia cardíaca. Algunos ejemplos son las caminatas o correr, bailar, nadar y andar en bicicleta.',
          img: require('@/assets/resistencia.jpg'),
        },
        {
          title: 'Ejercicios de fuerza',
          text: 'Estos fortalecen los músculos con ayuda de Levantamiento de pesas o usar bandas elásticas.',
          img: require('@/assets/fuerza.jpg'),
        },
        {
          title: 'Ejercicios de flexibilidad y equilibrio',
          text: 'Estiran los músculos y pueden ayudar a que su cuerpo permanezca relajado. Mientras que los de equilibrio ayudan a prevenir caídas.',
          img: require('@/assets/flexibilidad.jpg'),
        },
      ],
    }),
  }
</script>
