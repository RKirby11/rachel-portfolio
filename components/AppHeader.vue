<template>
    <nav class='bg-blue width-full h-16 flex justify-between items-center p-5 text-white text-xl'>
        <NuxtLink to='/'>Rachels Portfolio</NuxtLink>
        <div>
            <NuxtLink to='/projects' class='text-center border-black border-solid border-5 rounded-md bg-black hover:bg-green hover:text-blue py-2 px-4 mr-5'>
                Projects
            </NuxtLink>
            <NuxtLink to='/about' class='text-center border-black border-solid border-5 rounded-md bg-black hover:bg-green hover:text-blue py-2 px-4'>
                About
            </NuxtLink>
        </div>
    </nav>
</template>