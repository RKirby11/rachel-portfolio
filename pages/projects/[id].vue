<template>
    <div class='m-10 mt-16 xl:mx-32 text-lg'>
        <NuxtLink to='/projects' class='flex items-center hover:underline hover:cursor-pointer mb-5'>
            <nuxt-img src='/icons/arrow-left.svg' alt='back arrow icon' class='dark:invert h-5 mr-2'/>
            Back to All Projects
        </NuxtLink>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 class="text-4xl font-bold mb-5">{{ project.title }}</h1>
                <h2 class="text-2xl font-bold mb-5">{{ project.description }}</h2>
                <div v-for="(item, index) in project.overview" :key='index'>
                    <p class='text-lg mb-2'>{{ item }}</p>
                </div>
                <div v-if="project.link" class='flex mt-8'>
                    <CallToAction :url='project.link' target='_blank' text="View Website"/>
                </div>
            </div>
            <div class='flex justify-center lg:justify-end mt-8 lg:mt-0'>
                <ImageCarousel :imgs='project.imgs'/>
            </div>
        </div>

        <SectionTitle title='Project Toolkit'/>
        <div class="shadow-light_3xl dark:shadow-3xl rounded-lg pt-6 mb-4" >
            <div class='grid text-center' :class="`grid-cols-${project.toolkit.length}`">
                <div v-for='skill in project.toolkit' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>

        <SectionTitle title='My Role'/>
        <p>{{project.role}}</p>

        <SectionTitle title='Process'/>
        <ul class='list-disc'>
            <li v-for="(item, index) in project.process" :key="index">{{ item }}</li>
        </ul>

        <SectionTitle title='End Result'/>
        <div v-for="(item, index) in project.result" :key='index'>
            <p class='mb-2'>{{ item }}</p>
        </div>

        <div v-if="project.video" class='w-full flex justify-center mt-20'>
            <iframe title="YouTube Video Player" frameborder="0" width='560' height='315' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen :src="project.video"></iframe>
        </div>

        <div class='flex justify-center my-20'>
            <NuxtLink v-if="previousProject != null" :to="`/projects/${previousProject}`" class='flex justify-center items-center w-64 rounded-md border-2 border-solid border-orange bg-grey dark:bg-orange text-center hover:text-orange hover:text-charcoal hover:dark:bg-charcoal hover:dark:text-white py-1.5' :class="nextProject != null ? 'mr-2' : ''">
                <nuxt-img src='/icons/chevron-double-left.svg' alt='left arrow icon' class='dark:invert h-6 mr-2'/>
                Previous
            </NuxtLink>
            <NuxtLink v-if="nextProject != null" :to="`/projects/${nextProject}`" class='flex justify-center items-center w-64 rounded-md border-2 border-solid border-orange bg-grey dark:bg-orange text-center hover:text-orange hover:text-charcoal hover:dark:bg-charcoal hover:dark:text-white py-1.5' :class="previousProject != null ? 'ml-2' : ''">
                Next
                <nuxt-img src='/icons/chevron-double-right.svg' alt='left arrow icon' class='dark:invert h-6 ml-2'/>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
if(route.params.id <= 0 || route.params >= 9) 
    createError({ statusCode: 404, message: 'Project not found' })

const project = await $fetch(`/api/projects/byIndex/${route.params.id}`);
// const reportUrl = ref(null);
// if(project.report) {
//     reportUrl.value = await $fetch(`/api/s3/${project.report}`);
// }
const previousProject = route.params.id == 0 ? null : parseInt(route.params.id) - 1;
const nextProject = route.params.id == 8 ? null : parseInt(route.params.id) + 1;

useHead({
    title: 'Rachel Kirby | ' + project.title,
    meta: [{ 
        name: 'description', 
        content: project.description
    }]
})
</script>