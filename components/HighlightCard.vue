<template>
    <div class='shadow-lg dark:shadow-3xl w-80 md:w-56 lg:w-64 xl:w-80 rounded-md bg-dblue dark:bg-charcoal p-5 flex flex-col items-center text-center text-white hover:animate-wiggle'>
        <h1 class='text-xl md:text-3xl font-bold mb-2'>{{ item.headline }}</h1>
        <div class='w-12 bg-white dark:bg-white h-1 mb-2'/>
        <p class='font-light'>{{ item.detail }}</p>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>