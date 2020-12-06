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
  </v-navigation-drawer>
</template>

<script>
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
  }
</script>
