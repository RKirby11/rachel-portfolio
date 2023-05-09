<template>
    <div class='mt-14 lg:mt-20'>
        <h2 class='text-xl font-bold mt-10'>{{title}}</h2>
        <div class='w-16 bg-dblue dark:bg-orange h-1 mb-4'/>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    },
}
</script>