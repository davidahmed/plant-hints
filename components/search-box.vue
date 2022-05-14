<template>
  <div class="bg-white w-full py-2 justify-center flex flex-col items-center">
    <div class="flex max-w-lg border-2 border-gray-700 rounded-xl p-2 items-center">
      <magnifying-glass class="text-gray-500" small="true" />
      <input v-model="searchTerm" class="w-64 text-gray-500 pl-2 pr-2 focus:outline-none w-full" placeholder="Search houseplant by weather, color, or properties" type="search" @change="search">
    </div>
    <p class="hidde">
      {{ search() }}
    </p>
  </div>
</template>
<script>
import Fuse from 'fuse.js'

export default
{
	props: {
		source: {
			type: Object,
			default: () => {}
		}
	},
	data () {
		return {
			fuseOptions: {
				keys: ['name']
			},
			fuse: new Fuse(this.source, { keys: ['name', 'colors'] }),
			searchTerm: ''
		}
	},
	methods: {
		search () {
			return this.fuse.search(this.searchTerm)
		}
	}
}
</script>
