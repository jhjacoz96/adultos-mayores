<template>
  <base-section id="Tipos-de-adulto-mayor">
    <base-section-heading title="Bienvenido al administrador">
      Usted como administrador podrá ver todos los comentarios realizados por los usuarios y darle una respuesta inmediata.
      También podrá ver todas las citas solicitadas por los usuarios.
    </base-section-heading>

    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="accent"
              centered
              dark
              icons-and-text
            >
              <v-tabs-slider />

              <v-tab href="#tab-1">
                Citas
                <v-icon>mdi-account-box</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Comentarios
                <v-icon>mdi-comment-processing</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <v-card flat>
                  <v-card-title>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Buscar"
                      single-line
                      hide-details
                    />
                  </v-card-title>
                  <v-data-table
                    :headers="headers"
                    :items="citas"
                    :search="search"
                  />
                </v-card>
              </v-tab-item>
              <v-tab-item value="tab-2">
                <v-card flat>
                  <v-card-title>
                    <v-text-field
                      v-model="search1"
                      append-icon="mdi-magnify"
                      label="Buscar"
                      single-line
                      hide-details
                    />
                  </v-card-title>
                  <v-data-table
                    :headers="headers1"
                    :items="comentarios"
                    :search="search1"
                  >
                    <template v-slot:item.fecha="{ item }">
                      {{ item.fecha | moment("dddd, MMMM Do YYYY") }}
                    </template>
                    <template v-slot:item.respuesta="{ item }">
                      <v-btn
                        v-if="!item.respuesta"
                        color="primary"
                        icon
                        @click="detailComentrio(item)"
                      >
                        <v-icon>
                          mdi-comment-processing
                        </v-icon>
                      </v-btn>
                    </template>
                  </v-data-table>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">
            Responder comentario
          </v-card-title>

          <v-card-text>
            <v-list two-line>
              <v-list-item>
                <v-list-item-title v-text="`Comentario:`" />
                <v-list-item-subtitle v-text="viewItem.descripcion" />
              </v-list-item>
            </v-list>
            <v-text-field
              v-model="respuesta"
              label="Respuesta"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="secondary"
              text
              @click="dialog = false"
            >
              Cerrar
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="responder()"
            >
              Responder
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </base-section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'SectionThemeFeatures',
    data () {
      return {
        respuesta: '',
        tab: null,
        search: '',
        search1: '',
        dialog: false,
        viewIndex: -1,
        viewItem: {},
        headers: [
          {
            text: 'Nombres y apellidos',
            align: 'center',
            value: 'nombre',
          },
          {
            text: 'Provincia',
            align: 'center',
            value: 'provincia',
          },
          {
            text: 'Cantón',
            align: 'center',
            value: 'canton',
          },
          {
            text: 'Especialidad',
            align: 'center',
            value: 'especialidad',
          },
          {
            text: 'Descripción',
            align: 'center',
            filterable: false,
            value: 'descripcion',
          },
        ],
        headers1: [
          {
            text: 'Nombre',
            align: 'center',
            value: 'nombre',
          },
          {
            text: 'Titulo',
            align: 'center',
            value: 'titulo',
          },
          {
            text: 'Descripción',
            align: 'center',
            filterable: false,
            value: 'descripcion',
          },
          {
            text: 'Fecha',
            align: 'center',
            value: 'fecha',
          },
          {
            text: 'Responder',
            align: 'center',
            value: 'respuesta',
            sortable: false,
          },
        ],
      }
    },
    computed: {
      ...mapState(['citas', 'comentarios']),
    },
    created () {
      this.getCitas()
      this.getComentarios()
    },
    methods: {
      ...mapActions(['getCitas', 'getComentarios', 'modificarCita']),
      detailComentrio (item) {
        this.viewIndex = this.comentarios.indexOf(item)
        this.viewItem = Object.assign({}, item)
        this.dialog = true
      },
      responder () {
        var payload = {
          comentario: this.viewItem,
          respuesta: this.respuesta,
        }
        this.modificarCita(payload)
        this.dialog = false
        this.respuesta = ''
      },
    },
  }
</script>
