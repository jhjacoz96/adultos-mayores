<script>
  // Extensions
  import View from '@/views/View'
  // Mixins
  import LoadSections from '@/mixins/load-sections'
  export default {
    name: 'Somos',
    metaInfo: { title: '¿Quienes somos?' },
    extends: View,
    mixins: [
      LoadSections([
        'hero-alt',
        'quienes-somos',
        'participantes',
      ]),
    ],
    props: {
      id: {
        type: String,
        default: 'somos',
      },
    },
  }
</script>
