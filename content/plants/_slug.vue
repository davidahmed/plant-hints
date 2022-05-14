<script>
export default {
  async asyncData ({ $content, params }) {
    const plants = await $content('plants', params.slug).fetch()
    return { plants }
  }
}
</script>
