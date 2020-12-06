<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Nutricion',

    metaInfo: { title: 'Nutrición' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'intro-nutricion',
        'variedad-alimentacion',
        'porciones-necesarias',
        'porcion-ideal',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'nutricion',
      },
    },
  }
</script>
