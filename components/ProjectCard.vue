<template>
    <div class="h-52 rounded-md shadow-xl bg-no-repeat bg-cover bg-center hover:animate-bounce_sm" :class="`bg-${project.img}`" @mouseover="hover = true" @mouseleave="hover = false">
        <div v-if='hover' class="h-full w-full bg-black p-4 flex flex-col justify-between rounded-sm" >
            <div class="flex-col">
                <h3 class='text-xl font-bold text-white'>{{ project.title }}</h3>
                <p class='text-white'>{{project.description}}</p>
            </div>
            <div class='flex justify-between'>
                <div class='flex'>
                    <img src='/icons/cursor-arrow.svg' class='invert h-5 mt-1' alt='cursor icon' />
                    <i class='text-white'>Click to read</i>
                </div>
                <div class='flex'>
                    <div v-for='tag in project.tags' :key='tag' class='w-fit bg-dblue rounded-md px-2 py-1 text-white text-sm mr-2'>
                            <i>{{ tag }}</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        project: { 
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hover: false,
        }
    },
}
</script>