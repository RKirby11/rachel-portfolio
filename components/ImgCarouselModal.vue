<template>
    <div class="fixed top-0 left-0 right-0 z-50 w-screen h-screen bg-dblue bg-opacity-75">
        <div class="w-full h-full flex justify-center items-center">
            <div class="bg-white dark:bg-charcoal w-4/5 h-4/5 rounded-3xl p-5">
                <div class="h-full w-full flex flex-col justify-between">
                    <div class='flex justify-end items-center'>
                        <img src='/icons/shrink.svg' class='dark:invert h-8 hover:cursor-pointer' @click="$emit('close')"/>
                    </div>
                    <div class='h-4/5 flex justify-center items-center '>
                        <img :src="mainImg" class='h-full object-contain rounded-md'/>
                    </div>
                    <div class='flex justify-center'>
                        <img @click="updateImgIndex('left')" src='/icons/chevron-double-left.svg' class='dark:invert h-8 hover:cursor-pointer mr-8'/>
                        <img @click="updateImgIndex('right')" src='/icons/chevron-double-right.svg' class='dark:invert h-8 hover:cursor-pointer ml-8'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        imgs: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            imgIndex: 0,
        }
    },
    computed: {
        mainImg() {
            return this.imgs[this.imgIndex]
        }
    },
    methods: {
        updateImgIndex(direction) {
            if(direction == 'left') {
                if(this.imgIndex == 0) this.imgIndex = this.imgs.length - 1;
                else this.imgIndex--;
            }
            else {
                if(this.imgIndex == (this.imgs.length - 1)) this.imgIndex = 0
                else this.imgIndex++;
            }
        }
    }
}
</script>