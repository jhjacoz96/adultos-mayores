<template>
  <base-section
    id="social"
    space="56"
  >
    <v-container>
      <base-info-card
        title="Alimentación sana"
        subtitle=""
        space="4"
        color="primary"
      />
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="6"
        >
          <h1>Variedad:</h1>
          <p class="grey--text subtitle-1 display-4 text--darken-1">
            Debe contener fruta, verduras, proteinas, carbohidratos complejos, grasas saludables, hidratación y lácteos.
          </p>
          <h1>Equilibrada:</h1>
          <p class="grey--text subtitle-1 display-4 text--darken-1">
            Si contiene una cantidad de 15
            % de proteínas (carnes, pescados, huevos,
            leche y derivados, legumbres y frutos
            secos), 30% de grasas (carnes, aceites,
            legumbres, pescados y frutos secos) y 55%
            de azúcares llamadas también hidratos de
            carbono (frutas, los helados, miel, jugos,
            refrescos, pan, pastas, arroz, verduras,
            hortalizas, cereales y legumbres).
          </p>
          <p class="grey--text subtitle-1 display-4 text--darken-1">
            Adicional su dieta debe tener lo que son alimentos ricos en fibra como: pan integral, salvado, arroz integral, maíz, legumbres, frutos secos (nueces, dátiles, almendras) y verduras de hojas verdes.
          </p>
          <h1>Agradable:</h1>
          <p class="grey--text subtitle-1 display-4 text--darken-1">
            Se considera que un alimento es agradable cuando tienen una presentación vistosa y atractiva, cuando se respetan los horarios y las preferencias de la persona, en la medida de lo posible. Es importante preparar los alimentos según la capacidad para masticar y tragar que tenga la persona, por lo que la consistencia de la misma puede variar, pudiendo ser ésta entera, picada, pastosa, molida o líquida.
          </p>
          <p class="grey--text subtitle-1 display-4 text--darken-1">
            Adicional su dieta debe tener lo que son alimentos ricos en fibra como: pan integral, salvado, arroz integral, maíz, legumbres, frutos secos (nueces, dátiles, almendras) y verduras de hojas verdes.
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img src="@/assets/alimentacion.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
