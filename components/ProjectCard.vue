<template>
    <div 
        class="h-60 rounded-md shadow-lg dark:shadow-xl hover:animate-bounce_sm" 
        @mouseover="hover = true" 
        @mouseleave="hover = false"
    >
        <nuxt-img :src='project.imgs[0].src' :alt='project.imgs[0].alt' placeholder loading='lazy' class='h-full w-full object-cover rounded-md'/>
        <div 
            v-if='hover'
            class="relative h-full w-full p-4 rounded-md bg-dblue -top-60" 
        >
            <div class='flex flex-col justify-between text-white h-full'>
                <div class="flex-col">
                    <h3 class='text-xl font-bold'>{{ project.title }}</h3>
                    <p>{{project.description}}</p>
                </div>
                <div class='flex justify-between'>
                    <div class='flex'>
                        <nuxt-img src='/icons/cursor-arrow.svg' class='invert h-5 mt-1' alt='cursor icon' />
                        <i>Click to read</i>
                    </div>
                    <div class='flex'>
                        <div v-for='tag in project.tags' :key='tag' class='w-fit bg-lblue dark:bg-charcoal text-charcoal dark:text-white text-sm rounded-md px-2 py-1  mr-2'>
                                <i>{{ tag }}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({ project: Object })
const hover = ref(false)
</script>