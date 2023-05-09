<template>
    <div class='w-full h-full flex justify-between items-center' @mouseenter="hover = true" @mouseleave="hover = false" >
        <div class='hidden sm:block h-6 w-6 rounded-full mr-8 z-10' :class="hover ? 'bg-orange' : 'bg-dblue'"></div>
        <div class='w-full flex flex-col bg-lblue dark:text-charcoal rounded-md p-5 shadow-md dark:shadow-2xl'>
            <h3 class='text-lg font-bold'>{{ item.company }}</h3>
            <div class='w-16 bg-dblue dark:bg-charcoal h-1 mb-4'/>
            <NuxtLink :to='item.url' target='_blank' class='underline hover:text-charcoal'>{{ item.url }}</NuxtLink>
            <p>{{ item.position }}</p>
            <i>{{ item.date }}</i>
        </div>
    </div>
</template>
<script setup>
defineProps({ item: Object })
const hover = ref(false)
</script>