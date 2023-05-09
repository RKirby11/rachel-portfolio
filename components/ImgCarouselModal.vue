<template>
    <div class="fixed top-0 left-0 right-0 z-50 w-screen h-screen bg-dblue bg-opacity-75">
        <div class="w-full h-full flex justify-center items-center">
            <div class="bg-white dark:bg-charcoal w-4/5 h-4/5 rounded-3xl p-5">
                <div class="h-full w-full flex flex-col justify-between">
                    <div class='flex justify-end items-center'>
                        <nuxt-img src='/icons/shrink.svg' alt='shrink icon' class='dark:invert h-8 hover:cursor-pointer' @click="$emit('close')"/>
                    </div>
                    <div class='h-4/5 flex justify-center items-center '>
                        <nuxt-img :src="mainImg.src" :alt='mainImg.alt'  placeholder class='h-full object-contain rounded-md'/>
                    </div>
                    <div class='flex justify-center h-10'>
                        <nuxt-img v-if='imgs.length > 1'  @click="updateImgIndex('left')" src='/icons/chevron-double-left.svg' alt='left arrow icon' class='dark:invert h-8 hover:cursor-pointer mr-8'/>
                        <nuxt-img v-if='imgs.length > 1'  @click="updateImgIndex('right')" src='/icons/chevron-double-right.svg' alt='right arrow icon' class='dark:invert h-8 hover:cursor-pointer ml-8'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ imgs: Array });
const imgIndex = ref(0);
const mainImg = computed(() => props.imgs[imgIndex.value]);

function updateImgIndex(direction) {
    if(direction == 'left') {
        if(imgIndex.value == 0) imgIndex.value = props.imgs.length - 1;
        else imgIndex.value --;
    }
    else {
        if(imgIndex.value == (props.imgs.length - 1)) imgIndex.value = 0
        else imgIndex.value ++;
    }
}
</script>