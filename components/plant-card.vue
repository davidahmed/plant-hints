<template>
  <div class="drop-shadow-xl m-4 inline-block border-2 border-green-400 rounded w-3/4 sm:w-64">
    <div class="h-64 sm:max-w-64 md:h-40 rounded-t bg-center bg-cover" :style="{backgroundImage: `url(${plant.img})`}" />
    <div class="p-2">
      <div class="">
        <div class="flex items-baseline justify-between text-xl font-poppins font-semibold pt-2 align-baseline">
          <div>{{ plant.name }}</div>
          <div class=" text-sm text-green-500 font-thin">
            {{ plant.difficulty }}
          </div>
        </div>

        <div class="text-xs text-ellipsis overflow-hidden" style="{min-height: 2.2em}">
          {{ plant.description }}
        </div>
        <div class="card-sub-heading">
          Features
        </div>
        <div>
          <feature-chip v-for="feature in plant.features" :key="feature" :feature="feature" />
        </div>

        <div class="card-sub-heading">
          Care
        </div>
        <div class="space-y-2 pt-2 ">
          <care-chip care-type="light" :care-message="plant.light" />
          <care-chip care-type="soil" :care-message="plant.soil" />
        </div>
        <div class="flex space-x-4 content-center" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
	props: {
		plant: {
			type: Object,
			default: () => { Object({ name: 'Dummy Plant', slug: 'dummy-slug', path: '/dummy' }) }
		}
	}
}
</script>
<style>
.card-sub-heading  {
  @apply pt-6 text-sm uppercase font-normal font-poppins
  }
</style>
