<template>
  <base-section
    id="social"
    space="56"
  >
    <base-info-card
      title="Porciones necesarias"
      subtitle=""
      space="4"
      color="primary"
    />
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
        >
          <v-list two-line>
            <div
              v-for="(receta, index) in recetas"
              :key="index"
            >
              <v-list-item>
                <v-list-item-group>
                  <v-list-item-title class="mb-2">
                    {{ receta.name }}
                  </v-list-item-title>
                  <v-chip
                    color="primary"
                    elevation="5"
                  >
                    <v-icon class="mr-1">
                      mdi-timer
                    </v-icon>
                    {{ receta.porcion }}
                  </v-chip>
                </v-list-item-group>
              </v-list-item>
              <v-divider class="my-2" />
            </div>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img src="@/assets/calorias.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
    data () {
      return {
        recetas: [
          {
            name: ' Pan, cereales, arroz, pasta y patatas',
            porcion: '4-6 raciones/día',
          },
          {
            name: 'Verduras',
            porcion: '2 raciones/día',
          },
          {
            name: 'Frutas',
            porcion: '3 raciones/día',
          },
          {
            name: 'Aceítes',
            porcion: '3-6 raciones/día',
          },
          {
            name: 'Leche, yogur, queso y derivados',
            porcion: '2-4 raciones/día',
          },
          {
            name: 'Carnes magras, huevos, pescado y legumbres',
            porcion: '1-2 raciones/día',
          },
          {
            name: 'Carnes grasas, embutidos y dulces',
            porcion: 'De forma ocasional',
          },
        ],
      }
    },
  }
</script>
