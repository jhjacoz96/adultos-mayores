<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <base-info-card
      title="Indicaciones para ayudar a los adultos mayores"
      subtitle=""
      space="4"
      color="primary"
    />
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
        >
          <div>
            <H1>Falta de piezas dentales o placas dentales mal adaptadas</H1>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Fomentar la higiene y ajuste de placas dentales.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Proporcionar preparaciones fraccionadas y trituradas.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  No apresurar las comidas, procurar una masticación adecuada.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Evitar alimentos duros o fibrosos.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Preparar alimentos con carne molida o deshebrada, o alimentos de consistencia suave bien cocidos.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1>Problemas en la fuerza, control y movilidad de los brazos</h1>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Adaptación en los platos (de preferencia usar platos hondos), vasos y cubiertos que faciliten la alimentación.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Es importante adaptarse a la velocidad de alimentación de las personas mayores.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Es de suma importancia establecer un espacio propio en la mesa para la persona.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1>Alteraciones en la visión</h1>
            <div>
              <ul>
                <li>
                  <p class="grey--text subtitle-1 display-4 text--darken-1">
                    Presentar los alimentos en forma atractiva en cuanto el color y variedad de los alimentos.
                  </p>
                </li>
                <li>
                  <p class="grey--text subtitle-1 display-4 text--darken-1">
                    Proporcionar espacio suficiente para el acomodo del adulto mayor en la mesa, que esté bien iluminado y decorado en forma agradable.
                  </p>
                </li>
                <li>
                  <p class="grey--text subtitle-1 display-4 text--darken-1">
                    Servir las preparaciones en utensilios de colores que contrasten con los alimentos,
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Problemas en el estado afectivo como la depresión</h1>
            <ul>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Mantener un contacto diario si es posible por parte del cuidador.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Ser comprensivo con los olvidos, errores y carencias de la persona mayor.
                </p>
              </li>
              <li>
                <p class="grey--text subtitle-1 display-4 text--darken-1">
                  Animarlo en el desempeño de sus actividades.
                </p>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="5"
        >
          <v-img src="@/assets/infografia-adulto-mayor.jpg" />
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
