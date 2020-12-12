<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="11"
        md="10"
      >
        <v-card>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-img src="@/assets/login.svg" />
            </v-col>
            <v-col
              cols="12"
              md="5"
            >
              <v-alert
                dense
                border="left"
                type="warning"
              >
                Solamente podrás autenticarte como <strong>administrador</strong>.
              </v-alert>
              <v-card-text class="mt-6">
                <h1 class="text-center display-2">
                  Iniciar sesión
                </h1>
                <h4 class="text-center">
                  Ingrese sus credenciales
                </h4>
              </v-card-text>
              <v-card-text>
                <v-form
                  ref="form1"
                  v-model="valid1"
                  lazy-validation
                >
                  <v-text-field
                    v-model="usuario.username"
                    label="Usuario"
                    filled
                    prepend-icon="mdi-account"
                    type="text"
                    color="primary"
                  />
                  <v-text-field
                    id="password"
                    v-model="usuario.password"
                    filled
                    label="Password"
                    prepend-icon="mdi-lock"
                    :type="show ? 'text' : 'password'"
                    color="primary"
                    :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="show = !show"
                  />
                </v-form>
              </v-card-text>
              <div class="text-center mt-3">
                <v-btn
                  :disabled="usuario.username === '' || usuario.password === ''"
                  color="primary"
                  large
                  @click="login()"
                >
                  Iniciar sesión
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        usuario: {
          username: '',
          password: '',
        },
        valid1: false,
        show: false,
        usernameRules: [v => !!v || 'El username es requerido'],
        rules: {
          required: v => !!v || 'La contraseña es requerida',
          min: v => (v || '').length >= 8 || 'Mínimo debe ser de 8 caracteres',
        },
      }
    },
    computed: {
      ...mapState(['credenciales']),
    },
    methods: {
      ...mapMutations(['alert', 'LOGIN']),
      login () {
        var username = this.usuario.username === this.credenciales.username
        var password = this.usuario.password === this.credenciales.password
        if (username && password) {
          this.LOGIN(true)
        } else {
          this.alert({
            color: 'error',
            text: 'Estas credenciales no coinciden con las registradas',
          })
        }
      },
    },
  }
</script>
