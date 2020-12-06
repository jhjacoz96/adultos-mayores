<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Cuidado',

    metaInfo: { title: 'Cuidados de la piel y prevención de accidentes' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'inf-cuidado-piel',
        'riesgo-ulcera',
        // 'tabla-ulcera',
        'tips-cuidado',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'cuidado',
      },
    },
  }
</script>
