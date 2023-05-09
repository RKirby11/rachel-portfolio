<template>
    <NuxtLink :to='url' :target='target' :class='width' class='p-1.5 text-white text-xl text-center bg-orange rounded-md border-2 border-solid border-orange hover:bg-grey hover:text-charcoal hover:dark:bg-charcoal hover:dark:text-white mr-5'>{{ text }}</NuxtLink>
</template>
<script setup>
const props = defineProps({
    url: String, 
    target: String, 
    text: String
})
const width = computed(() => {
    if(props.text.length > 15) return 'w-64'
    else return 'w-48'
})
</script>
