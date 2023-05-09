<template>
    <NuxtLink :to='url' :target='target' :class='width' class='p-1.5 text-white text-xl text-center bg-orange rounded-md border-2 border-solid border-orange hover:bg-grey hover:text-charcoal hover:dark:bg-charcoal hover:dark:text-white mr-5'>{{ text }}</NuxtLink>
</template>
<script>
export default ({
    props: {
        url: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            width: 'w-48',
        }
    },
    created() {
        if(this.text.length > 15) {
            this.width = 'w-64'
        }
    }
})
</script>
