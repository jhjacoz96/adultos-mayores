<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Fisica',

    metaInfo: { title: 'Salud física' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'intro-salud',
        'cuidado',
        'rutina-ejercicios',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'fisica',
      },
    },
  }
</script>
