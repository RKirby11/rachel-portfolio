<template>
    <nav class='width-full h-16 flex justify-between items-center px-10 py-5 bg-white dark:bg-charcoal shadow-md dark:shadow-2xl'>
        <div class='flex'>
            <NuxtLink to='/' 
                class='text-white text-center tracking-wider text-xl rounded-md bg-orange w-48 sm:w-64 py-1.5 mr-4 border-2 border-solid border-orange hover:bg-white hover:text-charcoal hover:dark:text-white hover:dark:bg-charcoal'>
                <b>Rachel </b>Kirby
            </NuxtLink>
            <div class='hidden sm:flex items-center'>
                <nuxt-img class='dark:invert h-6 mr-1' src='/icons/sun.svg' alt='sun icon'/>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked="true" class="sr-only peer" @change="$emit('toggleDarkMode')" >
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                </label>
                <nuxt-img class='dark:invert h-6 ml-1' src='/icons/moon.svg' alt='moon icon'/>
            </div>
        </div>
        <div class='hidden lg:flex'>
            <NuxtLink 
                to='/projects' 
                class='w-32 rounded-md bg-grey dark:bg-black border-2 border-solid py-1.5 text-center text-xl mr-4 hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/projects' ? 'border-dblue' : 'border-grey dark:border-charcoal'">
                Projects
            </NuxtLink>
            <NuxtLink 
                to='/about'
                class='w-32 rounded-md bg-grey dark:bg-black border-2 border-solid py-1.5 text-center text-xl mr-4 hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/about' ? 'border-dblue' : 'border-grey dark:border-charcoal'">
                About
            </NuxtLink>
            <NuxtLink 
                to='/contact'
                class='w-32 rounded-md bg-grey dark:bg-black border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/contact' ? 'border-dblue' : 'border-grey dark:border-charcoal'">
                Contact
            </NuxtLink>
        </div>
        <div class='relative lg:hidden'>
            <button class='focus:outline-none' @click='showMenu = !showMenu'>
                <nuxt-img class='h-10 dark:invert' src='/icons/burger-menu.svg' alt='burger menu icon'/>
            </button>
            <div v-if='showMenu' class='absolute right-0.5 bg-white dark:bg-black rounded-lg'>
                <div class='w-full h-full flex flex-col items-center justify-around p-5'>
                    <NuxtLink 
                        to='/projects' 
                        class='w-32 rounded-md bg-grey dark:bg-charcoal border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue mb-3'
                        :class="page == '/projects' ? 'border-dblue' : 'border-white dark:border-black'">
                        Projects
                    </NuxtLink>
                    <NuxtLink 
                        to='/about'
                        class='w-32 rounded-md bg-grey dark:bg-charcoal border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue mb-3'
                        :class="page == '/about' ? 'border-dblue' : 'border-white dark:border-black'">
                        About
                    </NuxtLink>
                    <NuxtLink 
                        to='/contact'
                        class='w-32 rounded-md bg-grey dark:bg-charcoal border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue'
                        :class="page == '/contact' ? 'border-dblue' : 'border-white dark:border-black'">
                        Contact
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
const showMenu = ref(false)
const page = computed(() => useRoute().path)
</script>
