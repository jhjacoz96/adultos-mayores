<template>
  <v-row>
    <v-col
      cols="!2"
      md="6"
    >
      <v-theme-provider dark>
        <base-section
          id="social"
          class="accent title-left"
          space="56"
        >
          <v-container>
            <base-section-heading title="Inforgrafías">
              En esta sección podrás visualizar una serie de infografias referentes a cada especialidad.
            </base-section-heading>
            <v-row>
              <v-col
                md="7"
                class="accent"
              >
                <v-tabs
                  v-model="tab"
                  vertical
                >
                  <v-tab class="accent">
                    Salud física
                  </v-tab>
                  <v-tab class="accent">
                    Cuidados de la piel
                  </v-tab>
                  <v-tab class="accent">
                    salud psicoemocional
                  </v-tab>
                  <v-tab class="accent">
                    salud espiritual
                  </v-tab>
                  <v-tab class="accent">
                    Nutrición
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col class="accent" />
            </v-row>
          </v-container>
        </base-section>
      </v-theme-provider>
    </v-col>
    <v-col
      cols="!2"
      md="5"
    >
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-container fluid>
            <v-img
              src="@/assets/infoSaludFisica.png"
            />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
          <v-img
            src="@/assets/infoCuidadoPiel.png"
          />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-img
              src="@/assets/infoSaludPsicoemocional.png"
            />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-img
              src="@/assets/infoSaludEspiritual.png"
            />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-img
              src="@/assets/infoNutricion.png"
            />
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
    data () {
      return {
        tab: null,
      }
    },
  }
</script>
