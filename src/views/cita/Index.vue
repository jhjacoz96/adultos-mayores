<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Cita',

    metaInfo: { title: 'Agendar cita' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'consulta',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'cita',
      },
    },
  }
</script>
