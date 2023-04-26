<template>
    <div class='h-20 bg-gray-200 p-4 rounded-lg shadow-lg'>
        <h3 class='text-xl font-bold'>{{ project }}</h3>
        <p class='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: String,
            required: true
        }
    }
}
</script>