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
            title="Úlceras"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              las úlceras de decúbito también se denominan escaras de decúbito y se pueden
              formar cuando los músculos y el tejido blando presionan contra una superficie como una silla o una cama. Esta presión corta el suministro de sangre a esa zona y esto puede llevar a que el tejido cutáneo muera.
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="5"
        >
          <v-img src="@/assets/ulcera.jpg" />
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
