<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Administrador',

    metaInfo: { title: 'Administración' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'administrador',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'administrador',
      },
    },
  }
</script>
