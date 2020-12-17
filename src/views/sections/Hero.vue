<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="CUIDAME COMO TE CUIDÉ" />

          <base-body>
            Desde la cotidianidad de nuestras vidas, existe un constante crecimiento, en el cuál nos detenemos a pensar ¿Como lo han hecho para tenernos donde estamos ahora? ¿Que debemos ahora hacer por ellos? ¿Como? Es por ello, la intención de este sitio web, al partir de aquí descubrirás todo el contenido preparado para tí, un sin fin de razones y respuestas para saber de que se trata, Sí, porqué Ya es Tu TURNO de Cuidarlos como ellos te cuidaron a tí, dudas e inquietudes que podrán ser respondidas de inmediato.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <v-btn
              to="/quienes-somos"
              outlined
              large
            >
              Leer más
            </v-btn>

            <!-- <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
