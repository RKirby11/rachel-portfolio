<template>
    <nav class='width-full h-16 flex justify-between items-center px-10 py-5 shadow-xl'>
        <NuxtLink to='/' 
            class='text-white text-center tracking-wider text-xl rounded-md bg-orange w-64 py-2'>
            <b>Rachel </b>Kirby
        </NuxtLink>
        <div class='flex'>
            <NuxtLink 
                to='/projects' 
                class='w-32 rounded-md bg-black border-2 border-solid py-1.5 text-white text-center text-xl mr-4'
                :class="page == '/projects' ? 'border-dblue' : 'border-black'">
                Projects
            </NuxtLink>
            <NuxtLink 
                to='/about'
                class='w-32 rounded-md bg-black border-2 border-solid py-1.5 text-white text-center text-xl'
                :class="page == '/about' ? 'border-dblue' : 'border-black'">
                About
            </NuxtLink>
        </div>
    </nav>
</template>
<script>
export default ({
    computed: {
        page: () => useRoute().path
    }
})
</script>
