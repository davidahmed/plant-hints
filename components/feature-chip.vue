<template>
  <div class="feature-chip-wrapper">
    <p v-if="feature === `filters-air`">
      ✨
    </p>
    <p v-if="feature === `filters-air`" class="text-xs font-normal capitalize">
      Filters Air
    </p>
    <p v-if="feature === `indoors-outdoors`">
      🏡
    </p>
    <p v-if="feature === `indoors-outdoors`" class="text-xs font-normal capitalize">
      Grows indoors and outdoors
    </p>
    <p v-if="feature === `flowers`">
      🌼
    </p>
    <p v-if="feature === `flowers`" class="text-xs font-normal capitalize">
      Bears Flowers
    </p>
  </div>
</template>
<style>
.feature-chip-wrapper { @apply h-8 flex items-end space-x-2; }
</style>
<script>
export default {
	props: ['feature']
}
</script>
