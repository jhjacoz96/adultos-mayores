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
            title="Debes tener en cuenta que:"
            subtitle=""
            space="4"
            color="primary"
          />
          <div>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  La nutrición y formas de estilo de vida contribuyen a acelerar o disminuir la pérdida de tejidos y funciones del cuerpo
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Una mala alimentación es uno de los factores que determinan la presencia de enfermedades crónicas en el adulto mayor.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  La mayoría de las personas comen menos a medida que la edad avanza debido a una reducción tanto en su dieta como en su apetito.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  En el adulto mayor sano, la alimentación equilibrada debe ser suficiente para prevenir la falta de sustancias nutritivas.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  En el adulto mayor enfermo puede tener una mayor necesidad de alimento el cual no se evalúa adecuadamente debido a la pérdida del apetito que acompaña a la enfermedad y la edad.
                </p>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="5"
        >
          <v-img src="@/assets/alimentacion-adulto.jpeg" />
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
