<template>
  <div class="flex items-center space-x-2 rounded-l-full bg-gray-100 text-white">
    <icon-sun v-if="careType ==`light`" class="flex items-center justify-center bg-yellow-500 rounded-full text-gray-100" />
    <icon-soil v-if="careType == `soil`" class="flex items-center justify-center bg-red-900 rounded-full text-gray-100" />
    <div class="text-sm text-gray-700 capitalize">
      {{ careMessage }}
    </div>
  </div>
</template>
<script>
export default {
	props: ['careType', 'careMessage']
}
</script>
