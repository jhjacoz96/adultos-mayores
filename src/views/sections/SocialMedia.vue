<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <base-icon class="mb-8">
            mdi-instagram
          </base-icon>
          <base-section-heading
            color="transparent"
            title="Instagram"
          />

          <div class="py-4" />

          <v-btn
            class="font-weight-bold"
            color="white"
            href="https://www.facebook.com/Cu%C3%ADdame-como-te-Cuide-104871891512138/?view_public_for=104871891512138"
            light
            min-width="168"
            target="_blank"
            x-large
          >
            Siguenos

            <v-icon right>
              mdi-open-in-new
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <base-icon class="mb-8">
            mdi-facebook
          </base-icon>
          <base-section-heading
            color="transparent"
            title="Facebook"
          />

          <div class="py-4" />

          <v-btn
            class="font-weight-bold"
            color="white"
            href="https://www.instagram.com/cuidamecomotecuide/"
            light
            min-width="168"
            target="_blank"
            x-large
          >
            Siguenos

            <v-icon right>
              mdi-open-in-new
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>º

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
