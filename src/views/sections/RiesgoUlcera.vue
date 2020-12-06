<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent"
      space="56"
    >
      <v-container>
        <div>
          <v-alert
            outlined
            dark
          >
            <div class="title">
              Riesgos. - existe el riesgo de generar úlceras por presión cuando:
            </div>
            <div>
              <ul>
                <li>Pasa la mayor parte del día en una cama o una silla con muy poco movimiento.</li>
                <li>Tiene sobrepeso o peso insuficiente.</li>
                <li>No es capaz de controlar esfínteres (función digestiva y urinaria).</li>
                <li>Pasar mucho tiempo en una sola posición.</li>
              </ul>
            </div>
          </v-alert>
        </div>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'RiesgoUlcera',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
