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
            title="Aromaterapia"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Esta terapia se centra en emplear diferentes olores para que las personas puedan relajarse es decir se puede encender un incienso o simplemente con los frascos que tienen la esencia.
            </p>
          </div>
          <h1 class="my-2">
            Vainilla:
          </h1>
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Se utiliza esta esencia para la relajación , se muestra que la presión sanguínea y ritmos cardiacos se estabilizan.
            </p>
          </div>
          <h1 class="my-2">
            Menta:
          </h1>
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Usado para la revitalización, debido a que son olores placenteros, los cuales ayudan a que la persona se relaje.
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
              src="https://www.youtube.com/embed/NV3hMdaJt6s"
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
