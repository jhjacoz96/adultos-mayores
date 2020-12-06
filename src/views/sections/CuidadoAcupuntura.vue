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
            icon="mdi-alert"
          >
            <div>
              La acupuntura sólo puede ser empleada por personas que estén certificadas en la misma para evitar cualquier efecto no deseado.
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
