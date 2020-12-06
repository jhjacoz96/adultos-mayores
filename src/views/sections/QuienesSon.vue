<template>
  <base-section
    id="contact-us"
    space="36"
  >
    <base-section-heading title="Adultos mayores y el covid-19" />
    <v-row justify="center">
      <v-col
        cols="!2"
        md="5"
      >
        <v-img src="@/assets/covid-19.jpg" />
      </v-col>
      <v-col
        cols="!2"
        md="5"
      >
        <div
          id="yt"
          align="center"
        >
          <iframe
            :class="responsive"
            :width="ancho"
            :height="alto"
            :src="url + video"
            :frameborder="borde"
            :allowfullscreen="pcompleta"
          />
        </div>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionNews',
    provide: {
      heading: { align: 'center' },
    },
    data () {
      return {
        responsive: 'embed-responsive-item',
        ancho: '100%',
        alto: '400',
        url: 'https://www.youtube.com/embed/',
        video: 'blM2in3X4VM',
        borde: '0',
        pcompleta: null,
      }
    },

  }
</script>
