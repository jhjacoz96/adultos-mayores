<template>
  <section :id="id">
    <v-row no-gutters>
      <v-col cols="12">
        <component
          :is="`section-${section}`"
          v-for="section in sections"
          :key="section"
        />
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn
        fab
        dark
        fixed
        color="primary"
        bottom
        right
        large
        :to="{name: 'Ayuda'}"
      >
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-fab-transition>
  </section>
</template>

<script>
  export default {
    name: 'BaseView',

    props: {
      id: {
        type: String,
        default: 'view',
      },
    },

    data: () => ({ sections: [] }),
  }
</script>
