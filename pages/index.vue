<template>
  <div class="w-full">
    <div class="w-full flex flex-col items-start">
      <div class="w-full flex justify-center">
        <main-header class="w-full md:w-3/4 py-16 px-16 md:px-0" />
      </div>
      <div class="w-full py-2 justify-center flex flex-col items-center">
        <div class="flex w-2/3 border-2 border-gray-700 rounded-xl p-2 items-center bg-white">
          <magnifying-glass class="text-gray-500" small="true" />
          <input v-model="searchTerm" class="w-64 text-gray-500 pl-2 pr-2 focus:outline-none w-full" placeholder="Search houseplant by name, features, or description" type="search" @change="search">
        </div>
      </div>
    </div>
    <div class="pt-20 flex flex-wrap justify-center">
      <PlantCard v-for="plant in search(plants)" :key="plant.slug" :plant="plant" />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
export default {
	name: 'IndexPage',
	async asyncData ({ $content }) {
		const plants = await $content('plants').only(['name', 'difficulty', 'features', 'slug', 'description', 'img', 'colors', 'soil', 'light']).fetch()
		return {
			plants
		}
	},

	data () {
		return {
			searchResult: [],
			fuseOptions: {
				keys: ['name']
			},
			fuse: {},
			searchTerm: ''
		}
	},

	methods: {
		search () {
			if (this.searchTerm === '') {
				return this.plants
			}
			const fuse = new Fuse(this.plants, { keys: ['name', 'colors', 'features'] })
			return fuse.search(this.searchTerm).map(x => x.item)
		}
	}
}
</script>
