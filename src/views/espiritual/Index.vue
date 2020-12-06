<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Esperitual',

    metaInfo: { title: 'Salud esperitual' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'info-salud-espiritual',
        'acupuntura',
        'cuidado-acupuntura',
        'masajes',
        'aroma-terapia',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'espiritual',
      },
    },
  }
</script>
