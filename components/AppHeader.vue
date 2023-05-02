<template>
    <nav class='width-full h-16 flex justify-between items-center px-10 py-5 dark:shadow-2xl'>
        <div class='flex'>
            <NuxtLink to='/' 
                class='text-white text-center tracking-wider text-xl rounded-md bg-orange w-64 py-2 mr-4'>
                <b>Rachel </b>Kirby
            </NuxtLink>
            <div class='flex items-center'>
                <img class='dark:invert h-6' src='/icons/sun.svg'/>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked="true" class="sr-only peer" @change="$emit('toggleDarkMode')" >
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                </label>
                <img class='dark:invert h-6' src='/icons/moon.svg'/>
            </div>
        </div>
        <div class='hidden lg:flex'>
            <NuxtLink 
                to='/projects' 
                class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl mr-4 hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/projects' ? 'border-dblue' : 'border-white dark:border-black'">
                Projects
            </NuxtLink>
            <NuxtLink 
                to='/about'
                class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl mr-4 hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/about' ? 'border-dblue' : 'border-white dark:border-black'">
                About
            </NuxtLink>
            <NuxtLink 
                to='/contact'
                class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue'
                :class="page == '/contact' ? 'border-dblue' : 'border-white dark:border-black'">
                Contact
            </NuxtLink>
        </div>
        <div class='relative lg:hidden'>
            <button class='focus:outline-none' @click='showMenu = !showMenu'>
                <img class='h-10 dark:invert' src='/icons/burger-menu.svg' />
            </button>
            <div v-if='showMenu' class='absolute right-0.5 bg-orange dark:bg-charcoal rounded-md'>
                <div class='w-full h-full flex flex-col items-center justify-around p-5'>
                    <NuxtLink 
                        to='/projects' 
                        class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue mb-3'
                        :class="page == '/projects' ? 'border-dblue' : 'border-white dark:border-black'">
                        Projects
                    </NuxtLink>
                    <NuxtLink 
                        to='/about'
                        class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue mb-3'
                        :class="page == '/about' ? 'border-dblue' : 'border-white dark:border-black'">
                        About
                    </NuxtLink>
                    <NuxtLink 
                        to='/contact'
                        class='w-32 rounded-md bg-white dark:bg-black border-2 border-solid py-1.5 text-center text-xl hover:border-dblue hover:dark:bg-dblue'
                        :class="page == '/contact' ? 'border-dblue' : 'border-white dark:border-black'">
                        Contact
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default ({
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        page: () => useRoute().path
    }
})
</script>
