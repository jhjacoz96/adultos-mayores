<template>
  <base-section id="Tipos-de-adulto-mayor">
    <base-section-heading title="Rutina recomendada para adultos mayores">
      Si el adulto mayor no ha estado activo, puede comenzar lentamente y trabajar hasta su meta.
      La cantidad de ejercicio que necesita depende de su edad y salud.
    </base-section-heading>

    <v-container>
      <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.check ? 'mdi-check': 'mdi-star'"
          fill-dot
        >
          <v-card
            :key="i"
            :color="item.color"
            dark
          >
            <v-card-title class="title">
              <v-slide-y-transition>
                <v-checkbox
                  v-model="item.check"
                  :color="item.check && 'blue accent-1' || 'primary'"
                />
              </v-slide-y-transition>
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <p>{{ item.body }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      items: [
        {
          color: 'accent',
          icon: 'mdi-star',
          check: false,
          title: 'Paso 1',
          body: 'Use una pesa liviana la primera semana, y luego gradualmente vaya agregando más peso. Comenzar el programa de ejercicios usando pesas que son demasiado pesadas puede causarle lesiones.',
        },
        {
          color: 'accent',
          icon: 'mdi-book-variant',
          title: 'Paso 2',
          check: false,
          body: 'Agregue más peso gradualmente. Necesita desafiar a sus músculos para alcanzar el máximo beneficio de los ejercicios de fortalecimiento. Vea la sección de Progreso presentada abajo.',
        },
        {
          color: 'accent',
          icon: 'mdi-airballoon',
          title: 'Paso 3',
          check: false,
          body: 'Levantar o empujar las pesas debe sentirse entre difícil y muy difícil. No debe sentirse muy, muy difícil. Si no puede levantar o empujar una pesa 8 veces seguidas, significa que es demasiado pesada. Reduzca la cantidad de peso.',
        },
        {
          color: 'accent',
          icon: 'mdi-buffer',
          title: 'Paso 4',
          check: false,
          body: 'Tome 3 segundos para levantar o empujar una pesa a la altura o lugar deseado. Mantenga la posición por 1 segundo, y tome otros 3 segundos para regresar a la posición inicial. No deje caer la pesa bruscamente; es muy importante bajarla o moverla lentamente.',
        },
        {
          color: 'accent',
          icon: 'mdi-buffer',
          title: 'Paso 5',
          check: false,
          body: 'Tome 3 segundos para levantar o empujar una pesa a la altura o lugar deseado. Mantenga la posición por 1 segundo, y tome otros 3 segundos para regresar a la posición inicial. No deje caer la pesa bruscamente; es muy importante bajarla o moverla lentamente.',
        },
      ],
    }),
  }
</script>
