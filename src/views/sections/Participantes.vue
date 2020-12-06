<template>
  <base-section
    id="affiliates"
    class="grey lighten-4"
    space="36"
  >
    <v-container>
      <base-section-heading title="Universidades" />
      <v-slide-group>
        <template v-for="(uni, index) in unis">
          <v-slide-item
            :key="index"
            class="align-self-center"
          >
            <base-img
              :src="require(`@/assets/${uni}`)"
              color="grey"
              contain
              height="90"
              width="128"
            />
          </v-slide-item>
          <v-responsive
            v-if="index < 3"
            :key="`divider-${index}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>
<script>
  export default {
    name: 'SectionAffiliates',
    data () {
      return {
        unis: ['uni-1.jpg', 'uni-2.png', 'uni-3.jpg'],
      }
    },
  }
</script>
