<template>
    <div class='w-5/6'>
        <div class='flex w-full'>
            <div class='w-full'>
                <nuxt-img :src="mainImg" quality='80' blur-up class='w-full h-72 object-cover rounded-md shadow-light_2xl dark:shadow-2xl mb-4' :class="altImgs.length ? 'h-72' : 'h-96'" />
                <div v-if='altImgs.length' class='grid gap-1' :class="`grid-cols-${altImgs.length}`">
                    <div v-for='img in altImgs' :key='img' >
                        <nuxt-img :src='img' quality='60' blur-up class='w-full h-32 object-cover rounded-sm hover:opacity-50 hover:cursor-pointer' @click="mainImg = img"/>
                    </div>
                </div>
            </div>
            <nuxt-img @click='modal=true' src='/icons/expand.svg' class='dark:invert h-8 hover:cursor-pointer ml-2'/>
        </div>
        <ImgCarouselModal v-if='modal' :imgs='imgs' @close='modal=false'/>
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
    data() {
        return {
            mainImg: this.imgs[0],
            modal: false,
        }
    },
    computed: {
        altImgs() {
            return this.imgs.filter(img => img != this.mainImg)
        },
    },
}
</script>