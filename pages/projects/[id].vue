<template>
    <div class='m-10 xl:mx-32'>
        <NuxtLink to='/projects' class='flex items-center hover:underline hover:cursor-pointer mb-5'>
            <img src='/icons/arrow-left.svg' class='invert h-5 mr-2'/>
            Back to All Projects
        </NuxtLink>
        <div class="grid grid-cols-2">
            <div>
                <h1 class="text-4xl font-bold mb-5">{{ project.title }}</h1>
                <h2 class="text-2xl font-bold mb-5">{{ project.description }}</h2>
                <p>{{ project.overview }}</p>
            </div>
            <div class='flex flex-col items-center'>
                <img :src="mainImg" class='w-5/6 h-72 object-cover rounded-md shadow-light_2xl dark:shadow-2xl mb-4' />
                <ImageCarousel :imgs='project.additional_imgs' @updateMainImg="(img) => (mainImg = img)" class='w-5/6'/>
            </div>
        </div>

        <h2 class='text-xl font-bold mt-10'>Project Toolkit</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <div class="shadow-light_3xl dark:shadow-3xl rounded-lg pt-6 mb-4" >
            <div class='grid text-center' :class="`grid-cols-${project.toolkit.length}`">
                <div v-for='skill in project.toolkit' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>

        <h2 class='text-xl font-bold mt-10'>My Role</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <p>{{ project.role }}</p>

        <h2 class='text-xl font-bold mt-10'>Process</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <p>{{ project.process }}</p>

        <h2 class='text-xl font-bold mt-10'>End Result</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <p>{{ project.result }}</p>
    </div>
</template>
<script>
import projData from '/assets/projects.json' assert {type: 'json'}
export default {
    data() {
        return {
            project: projData.projects[this.$route.params.id],
            mainImg: projData.projects[this.$route.params.id].img,
        }
    },
}
</script>