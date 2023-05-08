<template>
    <div class='relative flex flex-col flex-wrap items-center' @mouseover="hover = true" @mouseleave="hover = false">
        <nuxt-img :src='skill.icon' class='h-12 w-fit' />
        <div v-if='hover' class='absolute top-8 h-5 w-32 mt-2 bg-dblue text-white dark:bg-dblue rounded-sm text-sm align-middle px-4'> {{skill.skill}} </div>
    </div>
</template>
<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hover: false
        }
    }
}
</script>