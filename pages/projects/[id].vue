<template>
    <div class='m-10 mt-16 xl:mx-32 text-lg'>
        <NuxtLink to='/projects' class='flex items-center hover:underline hover:cursor-pointer mb-5'>
            <nuxt-img src='/icons/arrow-left.svg' alt='back arrow icon' class='dark:invert h-5 mr-2'/>
            Back to All Projects
        </NuxtLink>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 class="text-4xl font-bold mb-5">{{ project.data.title }}</h1>
                <h2 class="text-2xl font-bold mb-5">{{ project.data.description }}</h2>
                <div v-for="(item, index) in project.data.overview" :key='index'>
                    <p class='text-lg mb-2'>{{ item }}</p>
                </div>
                <div v-if="reportUrl || project.data.link" class='flex mt-8'>
                    <CallToAction :url='reportUrl ? reportUrl : project.data.link' target='_blank' :text="reportUrl ? 'View Project Report' : 'View Website'"/>
                </div>
            </div>
            <div class='flex justify-center lg:justify-end mt-8 lg:mt-0'>
                <ImageCarousel :imgs='project.data.imgs'/>
            </div>
        </div>

        <SectionTitle title='Project Toolkit'/>
        <div class="shadow-light_3xl dark:shadow-3xl rounded-lg pt-6 mb-4" >
            <div class='grid text-center' :class="`grid-cols-${project.data.toolkit.length}`">
                <div v-for='skill in project.data.toolkit' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>

        <SectionTitle title='My Role'/>
        <p>{{project.data.role}}</p>

        <SectionTitle title='Process'/>
        <ul class='list-disc'>
            <li v-for="(item, index) in project.data.process" :key="index">{{ item }}</li>
        </ul>

        <SectionTitle title='End Result'/>
        <div v-for="(item, index) in project.data.result" :key='index'>
            <p class='mb-2'>{{ item }}</p>
        </div>

        <div v-if="project.data.video" class='w-full flex justify-center mt-20'>
            <iframe title="YouTube Video Player" frameborder="0" width='560' height='315' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen :src="project.data.video"></iframe>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const project = await $fetch(`/api/projects/byIndex/${route.params.id}`);
const reportUrl = ref(null);
if (project.data.report) {
    let runtimeConfig = useRuntimeConfig();
    reportUrl.value = runtimeConfig.public.baseUrl + project.data.report;
}
</script>