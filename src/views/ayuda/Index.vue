<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'Ayuda' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'cuidado-alimentacion',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'ayuda',
      },
    },
  }
</script>
