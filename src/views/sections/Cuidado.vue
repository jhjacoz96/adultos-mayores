<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent"
      space="56"
    >
      <v-container>
        <div>
          <v-alert
            outlined
            dark
          >
            <div class="title">
              EL principal problema que el cuidador puede observar en el adulto mayor :
            </div>
            <div>
              Lo primero que puede aparecer es una sensación de cansancio excesivo y permanente, con
              estado de sobrecarga de trabajo, aumento o disminución de apetito. Si la dedicación es muy
              intensa, el cuidador termina por abandonar el cuidado de sí mismo. La situación puede
              conducir a padecer problemas como úlceras, somatizaciones, dolores articulares, cervicalgias,
              dorsalgias, lumbalgias (dolor a lo largo de la espalda)..
            </div>
          </v-alert>
        </div>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
