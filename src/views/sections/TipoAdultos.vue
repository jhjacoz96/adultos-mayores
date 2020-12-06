<template>
  <base-section id="Tipos-de-adulto-mayor">
    <base-section-heading title="Tipos de adulto mayor">
      La Geriatría, especialidad médica que trata a los adultos mayores, los clasifica en funcionales
      y disfuncionales basándose en escalas que miden la capacidad para realizar las actividades de
      la vida díaria,
    </base-section-heading>

    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            {{ feature.body }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Funcionales',
          icon: 'mdi-human-male',
          body: 'Son aquellos que pueden llevar a cabo sus actividades cotidianas sin dificultad o bien con mínima dificultad, por lo que pueden mantenerse independientes.',
        },
        {
          title: 'Disfuncionales',
          icon: 'mdi-wheelchair-accessibility',
          body: 'Son aquellos adultos mayores que por algún motivo presentan una limitación para efectuar las tareas mínimas necesarias para valerse por sí mismos.',
        },
        {
          title: 'Independiente',
          icon: 'mdi-human-handsup',
          body: 'Busca proveerse de medidas que beneficien su propia seguridad; es decir, que es capaz de mantener un entorno seguro para él mismo, o acondicionarlo según sus necesidades. Podríamos decir que la seguridad del adulto independiente proviene de la conciencia que tiene de su propio estado y de su propia condición, lo cual le confiere una estabilidad lo mismo física que emocional Por su parte, el adulto dependiente puede presentar un déficit cognitivo que no le permite discernir entre las situaciones seguras y las situaciones de peligro. De igual manera, no adecúa sus actividades y su entorno a los cambios propios del proceso de envejecimiento que afectan de forma significativa la necesidad de seguridad.',
        },
      ],
    }),
  }
</script>
