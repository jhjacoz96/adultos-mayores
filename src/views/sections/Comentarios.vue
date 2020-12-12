<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-comment-processing"
      title="Comentarios"
    />
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            title="Todos los comentarios"
            pace="6"
          />
          <!-- <v-sheet
                        elevation="1"
                        rounded
                    >

                    </v-sheet> -->
          <div
            v-for="(item, index) in comentarios"
            :key="index"
          >
            <div
              class="mb-3"
            >
              <v-sheet
                elevation="5"
                rounded
              >
                <v-list
                  three
                  line
                >
                  <v-list-item>
                    <v-list-item-avatar :color="colorRandom">
                      <span class="white--text headline">{{ item.nombre | primeraLetra }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.nombre }}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="mb-2"
                      >
                        {{ item.fecha | moment('dddd, MMMM Do YYYY') }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-text="item.descripcion" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
              <v-sheet
                rounded
                elevation="5"
                class="mt-3 ml-5"
              >
                <v-list
                  v-if="item.respuesta"
                  three
                  line
                >
                  <v-list-item>
                    <v-list-item-avatar color="blue">
                      <span class="white--text headline">A</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="mb-1">
                        <v-chip
                          color="blue"
                          text-color="white"
                        >
                          Administrador
                        </v-chip>
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="mb-2"
                      >
                        {{ item.respuesta.fecha | moment('dddd, MMMM Do YYYY') }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-text="item.respuesta.descripcion" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </div>
            <v-divider
              v-if="(index+1) < comentarios.length"
              class="my-3"
            />
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
          xl="6"
        >
          <base-info-card
            title="Comente aquí"
            subtitle="Los comentarios son públicos y son respondidos por especialistas"
            space="4"
            color="primary"
          />
          <v-form>
            <v-text-field
              v-model="comentario.nombre"
              label="Nombre"
            />

            <v-text-field
              v-model="comentario.titulo"
              label="Titulo"
            />

            <base-textarea
              v-model="comentario.descripcion"
              class="mb-6"
              label="Ingrese su comentario..."
            />
          </v-form>
          <v-btn
            color="primary"
            large
            @click.prevent="comentar()"
          >
            Enviar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'SectionKeepInTouch',
    filters: {
      primeraLetra (value) {
        return value.trim().charAt(0).toUpperCase()
      },
    },
    data () {
      return {
        comentario: {
          nombre: '',
          titulo: '',
          descripcion: '',
        },
        nombre: '',
        titulo: '',
        descripcion: '',
      }
    },
    computed: {
      ...mapState(['comentarios']),
      colorRandom () {
        var colors = ['blue', 'red', 'green']
        const i = Math.floor(Math.random() * (colors.length))
        const mycolor = colors[i]
        return mycolor
      },
    },
    created () {
      this.getComentarios()
    },
    methods: {
      ...mapActions(['getComentarios']),
      ...mapActions(['postComentario']),

      comentar () {
        const formData = new FormData()
        formData.append('nombre', this.nombre)
        formData.append('titulo', this.titulo)
        formData.append('descripcion', this.descripcion)
        this.postComentario(this.comentario)
      },
    },
  }
</script>
