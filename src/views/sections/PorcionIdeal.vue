<template>
  <base-section
    id="social"
    space="56"
  >
    <v-container>
      <base-info-card
        title="Porciones ideales"
        subtitle=""
        space="4"
        color="primary"
      />
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
            elevation="5"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="card.img"
            >
              <v-card-title>{{ card.title }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <ul>
                <li
                  v-for="(ing, key) in card.text"
                  :key="key"
                >
                  {{ ing }}
                </li>
              </ul>
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
          title: 'Frutas',
          text: ['1 taza de leche o yogurt.', '1 1/2 onzas de queso natural.', '2 onzas de queso procesado.'],
          img: require('@/assets/frutas.jpg'),
        },
        {
          title: 'Vegetales',
          text: ['Una taza de vegetales crudos, frondosos.', '1/2 taza de otros vegetales cocidos.'],
          img: require('@/assets/vegetales.jpg'),
        },
        {
          title: 'Lácteos',
          text: ['1 taza de leche o yogurt.', '1 1/2 onzas de queso natural.', '2 onzas de queso procesado.'],
          img: require('@/assets/lacteos.jpg'),
        },
        {
          title: 'Cereales y carbohidrátos',
          text: ['Una rebanada de pan, Una onza de cereal listo para comerse', '1/2 taza de cereal cocido, arroz o pasta.'],
          img: require('@/assets/carbohidratos.jpg'),
        },
        {
          title: 'Proteínas animales',
          text: ['2 o 3 onzas de carne sin grasa cocida de res, aves ó pescado.', '1/2 taza de frijoles cocidos, 1 huevo o 2 cucharadas de crema de cacahuate cuentan como una onza de carne.'],
          img: require('@/assets/proteinas.jpg'),
        },
      ],
    }),
  }
</script>
