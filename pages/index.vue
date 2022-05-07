<template>
  <div>
    <Header />
    <SearchBox />
    <div class="flex bg-red-200">
      <div v-for="plant in plants" :key="plant.slug">
        <PlantCard :plant="plant" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'IndexPage',
	async asyncData ({ $content }) {
		const plants = await $content('plants').only(['name', 'slug', 'img']).fetch()
		return {
			plants
		}
	}
}
</script>
