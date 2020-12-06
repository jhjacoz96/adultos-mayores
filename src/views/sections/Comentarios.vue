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
                  three-line
                >
                  <v-list-item>
                    <v-list-item-avatar :color="colorRandom()">
                      <span class="white--text headline">{{ item.nombre | primeraLetra }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.nombre" />
                      <v-list-item-subtitle
                        class="mb-2"
                        v-text="item.fecha"
                      />
                      <v-list-item-subtitle v-text="item.comentario" />
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
                  v-if="item.comentarios != null"
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
                        v-text="item.comentarios.fecha"
                      />
                      <v-list-item-subtitle v-text="item.comentarios.comentario" />
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

          <v-text-field label="Nombre" />

          <v-text-field label="Correo" />

          <base-textarea
            class="mb-6"
            label="Ingrese su comentario..."
          />
          <base-btn
            color="accent"
            href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
            outlined
            target="_blank"
          >
            Enviar
          </base-btn>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
    filters: {
      primeraLetra (value) {
        return value.trim().charAt(0).toUpperCase()
      },
    },
    data () {
      return {
        comentarios: [
          { id: 1, nombre: 'Jhon', fecha: 'Hace 2 dias', comentario: 'Quiero mucha información' },
          { id: 2, nombre: 'Maria', fecha: 'Hace 2 dias', comentario: '¿Cómo deben comer los' },
          { id: 3, nombre: 'Saul', fecha: 'Hace 2 dias', comentario: '¿Cuales son las especialidades?' },
          { id: 4, nombre: 'karla', fecha: 'Hace 2 dias', comentario: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos laboriosam culpa illum quibusdam eum alias ea iusto nemo optio quas. Ipsum ab tempora facilis odio sed quidem fuga excepturi.' },
          { id: 5, nombre: 'karla', fecha: 'Hace 2 dias', comentario: 'Comentario de prueba' },
          {
            id: 6,
            nombre: 'karla',
            fecha: 'Hace 2 dias',
            comentario: 'Comentario de prueba',
            comentarios: {
              id: 1,
              comentario: 'HOLa',
              fecha: 'Hace 3 dias',
            },
          },
          { id: 7, nombre: 'Jhon', fecha: 'Hace 2 dias', comentario: 'Quiero mucha información' },
        ],
      }
    },
    methods: {
      colorRandom () {
        var colors = ['blue', 'red', 'green']
        const i = Math.floor(Math.random() * (colors.length))
        const mycolor = colors[i]
        return mycolor
      },
    },
  }
</script>
