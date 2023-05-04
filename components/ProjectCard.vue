<template>
    <div 
        class="h-52 rounded-md shadow-lg dark:shadow-xl bg-no-repeat bg-cover bg-center hover:animate-bounce_sm hover:cursor-pointer" 
        :class="`bg-[url('${project.imgs[0]}')]`" 
        @mouseover="hover = true" 
        @mouseleave="hover = false"
    >
        <div 
            v-if='hover' 
            class="h-full w-full p-4 flex flex-col justify-between rounded-md bg-dblue text-white" 
        >
            <div class="flex-col">
                <h3 class='text-xl font-bold'>{{ project.title }}</h3>
                <p>{{project.description}}</p>
            </div>
            <div class='flex justify-between'>
                <div class='flex'>
                    <img src='/icons/cursor-arrow.svg' class='invert h-5 mt-1' alt='cursor icon' />
                    <i>Click to read</i>
                </div>
                <div class='flex'>
                    <div v-for='tag in project.tags' :key='tag' class='w-fit bg-lblue dark:bg-charcoal text-charcoal dark:text-white text-sm rounded-md px-2 py-1  mr-2'>
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
    computed: {
        page: () => useRoute().path
    }
}
</script>