<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/logo.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <!-- <base-img
        :src="require('@/assets/zero-logo-light.svg')"
        contain
        max-width="128"
        width="100%"
      /> -->

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Inicio'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
          <v-menu
            v-if="more.length"
            bottom
            left
            origin="center center"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                Especialidades
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>

            <v-list
              class="grey lighten-3"
              color="white"
              shaped
            >
              <v-list-item
                v-for="(item, ke) in more"
                :key="ke"
                :to="{name: item.to}"
                color="primary"
              >
                {{ item.name }}
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            v-if="loggout"
            icon
            color="primary"
            @click="sessionOff(false)"
          >
            <v-icon>mdi-account-off</v-icon>
          </v-btn>
          <v-btn
            v-else
            icon
            color="primary"
            to="/login"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-tabs>
      </div>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
      :more="more"
    />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'HomeAppBar',
    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      items: [
        'Inicio',
        // 'Contactos',
        // 'Home',
        // 'About',
        // 'Contact',
        // 'Pro',
        '¿Quienes somos?',
        'Cita',
      ],
      more: [
        {
          name: 'SALUD FíSICA',
          to: 'Salud-fisica',
        },
        {
          name: 'CUIDADOS DE LA PIEL Y PREVENCIÓN DE ACCIDENTES',
          to: 'Cuidado-piel',
        },
        {
          name: 'SALUD PSICOEMOCIONAL',
          to: 'Salud-psicoemocional',
        },
        {
          name: 'SALUD ESPIRITUAL',
          to: 'Salud-espiritual',
        },
        {
          name: 'NUTRICIÓN',
          to: 'Nutricion',
        },
      ],
    }),
    computed: {
      ...mapState(['loggout']),
    },
    methods: {
      ...mapMutations(['sessionOff']),
    },
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
