<template>
    <div class='grid gap-1' :class="`grid-cols-${imgs.length}`">
        <div v-for='img in imgs' :key='img' class='bg-charcoal'>
            <img :src='img' class='w-full h-32 object-cover rounded-sm hover:opacity-50 hover:cursor-pointer' @click="$emit('updateMainImg',img)">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgs: {
            type: Array,
            required: true,
        }
    },
    mounted() {
        console.log(this.imgs.length);
        console.log(`grid-cols-${this.imgs.length}`)
    }
}
</script>