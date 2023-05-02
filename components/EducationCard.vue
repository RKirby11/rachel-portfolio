<template>
    <div class='w-full flex flex-col bg-lblue dark:bg-dblue rounded-md p-5 shadow-light_2xl dark:shadow-2xl'>
        <h3 class='text-lg font-bold'>{{ item.institution }}</h3>
        <div class='w-16 bg-charcoal h-1 mb-4'/>
        <p>{{ item.subject }}</p>
        <p>{{ item.result }}</p>
        <i>{{ item.date }}</i>
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