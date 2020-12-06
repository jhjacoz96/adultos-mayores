<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            title="Conocenos"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              La creación de este sitio web, es una idéa establecida por los estudiantes Altamirano Karla,Basantes Allan, Hidalgo Saúl, Morales Lisbeth, Tipantuña Andres y Verdezoto Andres pertenecientes a la carrera de Enfermería de la Pontificia Universidad Católica del Ecuador, está a su vez será ejecutada por los estudiantes, Contreras Jhon perteneciente a la Univirsidad Centroccidental Lisandro Alvarado y  Garaban Gabriela, Sánchez Maria pertenecientes a la Universidad Fermín Toro.
            </p>
          </div>
          <base-info-card
            title="Objetivo"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <p class="grey--text subtitle-1 display-4 text--darken-1">
              Involucrar a la familia del paciente adulto mayor en el cuidado intradomiciliario y el empoderamiento del mismo, de esta manera tanto la familia como el paciente podrán tener acceso a fuentes de información de toda índole basadas en salud,sin dejar de mencionar que este sitio web optimizará la vida del paciente evitando que por varias veces acuda a la unidad hospitalaria lo que se vuelve una situación desgastante y notorio al momento de brindar atención, es importante conocer que la siguiente idea es establecida luego de un exhaustivo análisis de la situación de los cuidadores.
            </p>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-img src="@/assets/equipo.svg" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>
