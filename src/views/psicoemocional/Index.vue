<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Psicoemocional',

    metaInfo: { title: 'Salud psicoemocional' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'intro-psicoemocional',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'psicoemocional',
      },
    },
  }
</script>
