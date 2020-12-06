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
            title="Masajes"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              El masaje es una de las mejores técnicas de relajación para no prestar atención al dolor, consiste en frotar o masajear las capas superiores de las músculos, especialmente el masaje debe ser suave.
            </p>
          </div>
          <h1 class="my-2">
            Beneficios:
          </h1>
          <div>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Mejorar el sueño
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Reducir la tensión
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Relajación muscular
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Reducir el dolor.
                </p>
              </li>
            </ul>
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
              src="https://www.youtube.com/embed/PR0iZ4F6mbU"
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
