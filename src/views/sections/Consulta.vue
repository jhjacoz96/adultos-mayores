<template>
  <base-section
    id="social"
    class="text-left"
    space="56"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="5"
        xl="5"
        class="text-center"
      >
        <v-container>
          <base-section-heading
            color="grey lighten-2"
            icon="mdi-comment-processing"
            title="Agenda tu cita"
          />
          <v-autocomplete
            v-model="provincia"
            :items="provincias"
            :filter="provinciaFilter"
            item-text="name"
            item-value="id"
            label="Provincia"
            @change="getProvincias()"
          />
          <v-autocomplete
            v-model="canton"
            :disabled="disabledCanton"
            :items="cantones"
            :filter="cantonFilter"
            item-text="name"
            item-value="id"
            label="Cantón"
            @change="getEspecialidades()"
          />
          <v-autocomplete
            v-model="especialidad"
            :disabled="disabledEsp"
            :items="especialidades"
            :filter="especialidadFilter"
            item-text="name"
            item-value="id"
            label="Especialidades disponibles"
          />
          <v-textarea
            v-model="motivo"
            name="input-7-1"
            label="Motivo de consulta"
          />
          <v-btn
            :disabled="disabledEsp"
            color="accent"
            class="font-weight-bold"
            x-large
          >
            Generar consulta
          </v-btn>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="6"
        xl="6"
      >
        <v-container>
          <v-img
            src="@/assets/medico.svg"
          />
        </v-container>
      </v-col>
    </v-row>
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
        provincia: null,
        especialidad: null,
        canton: null,
        disabledCanton: true,
        disabledEsp: true,
        motivo: '',
        provincias: [
          {
            name: 'AZUAY',
            id: 1,
            canton: [
              {
                name: 'CUENCA',
                id: 1,
                especialidades: [
                  { name: 'SALUD FISICA', id: 1 },
                  { name: 'NUTRICIÓN', id: 2 },
                  { name: 'SALUD ESPIRITUAL', id: 3 },
                ],
              },
              {
                name: 'GIRÓN',
                id: 2,
                especialidades: [
                  { name: 'SALUD PSICEMCIONAL', id: 1 },
                ],
              },
              {
                name: 'GUALACEO',
                id: 3,
                especialidades: [
                  { name: 'SALUD FÍSICA', id: 1 },
                  { name: 'NUTRICIÓN', id: 2 },
                  { name: 'SALUD ESPIRITUAL', id: 3 },
                ],
              },
            ],
          },
          {
            name: 'BOLIVAR',
            id: 2,
            canton: [
              {
                name: 'GUARANDA',
                id: 1,
                especialidades: [
                  { name: 'SALUD FISICA', id: 1 },
                  { name: 'NUTRICIÓN', id: 2 },
                  { name: 'SALUD ESPIRITUAL', id: 3 },
                ],
              },
              {
                name: 'CHILLANES',
                id: 2,
                especialidades: [
                  { name: 'SALUD PSICEMCIONAL', id: 1 },
                ],
              },
              {
                name: 'CHIMBO',
                id: 3,
                especialidades: [
                  { name: 'SALUD FÍSICA', id: 1 },
                  { name: 'NUTRICIÓN', id: 2 },
                  { name: 'SALUD ESPIRITUAL', id: 3 },
                ],
              },
              {
                name: 'SAN MIGUEL',
                id: 4,
                especialidades: [
                  { name: 'SALUD FÍSICA', id: 1 },
                  { name: 'NUTRICIÓN', id: 2 },
                  { name: 'SALUD ESPIRITUAL', id: 3 },
                  { name: 'CUIDADO DE LA PIEL Y PREVENCIÓN DE ACCIDENTES', id: 4 },
                ],
              },
            ],
          },
          {
            name: 'barquismeto',
            id: 2,
            caton: [],
          },
        ],
        cantones: [],
        especialidades: [],
      }
    },
    created () {
      this.getProvincias()
    },
    methods: {
      provinciaFilter (item, queryText, itemText) {
        const text = item.name.toLowerCase()
        const searchText = queryText.toLowerCase()
        return text.indexOf(searchText) > -1
      },
      cantonFilter (item, queryText, itemText) {
        const text = item.name.toLowerCase()
        const searchText = queryText.toLowerCase()
        return text.indexOf(searchText) > -1
      },
      especialidadFilter (item, queryText, itemText) {
        const text = item.name.toLowerCase()
        const searchText = queryText.toLowerCase()
        return text.indexOf(searchText) > -1
      },
      getProvincias () {
        // fetch('../../assets/provincias.json')
        //   .then(res => {
        //     return res.json()
        //   })
        //   .then(res => {
        //     console.log(res)
        //   })
        this.cantones = []
        this.especialidades = []
        this.disabledEsp = true
        this.disabledCanton = true
        if (!this.provincia) {
          this.disabledCanton = true
        } else {
          const resp = this.provincias.find(res => res.id === this.provincia)
          if (Object.prototype.hasOwnProperty.call(resp, 'canton')) {
            this.cantones = [...resp.canton]
          }
          this.disabledCanton = false
        }
      },
      getEspecialidades () {
        this.especialidades = []
        if (!this.canton) this.disabledEsp = true
        const resp = this.cantones.find(res => res.id === this.canton)
        if (Object.prototype.hasOwnProperty.call(resp, 'especialidades')) {
          this.especialidades = [...resp.especialidades]
        }
        this.disabledEsp = false
      },
    },
  }
</script>
