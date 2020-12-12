<template>
  <v-navigation-drawer
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"
        :to="{ name }"
        :exact="name === 'Home'"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list
      color="white"
      shaped
    >
      <v-list-group
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="`Especialidades`" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="m in more"
          :key="m.name"
          :to="{name: m.to}"
        >
          <v-list-item-content>
            <v-list-item-title v-text="m.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <v-list
      v-if="loggout"
      color="white"
    >
      <v-list-item  @click="sessionOff(false)">
        <v-list-item-content>
          <v-list-item-tex>
            <v-icon>
              mdi-account-off
            </v-icon>
            Salir
          </v-list-item-tex>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list
      v-else
      color="white"
    >
      <v-list-item to="/login">
        <v-list-item-content>
          <v-list-item-title>
            <v-icon>
              mdi-account
            </v-icon>
            Iniciar seción
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
      more: {
        type: Array,
        default: () => ([]),
      },
    },
    computed: {
      ...mapState(['loggout']),
    },
    methods: {
      ...mapMutations(['sessionOff']),
    },
  }
</script>
