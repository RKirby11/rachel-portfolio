<template>
    <div class='m-10 mt-16 xl:mx-32 text-lg'>
        <NuxtLink to='/projects' class='flex items-center hover:underline hover:cursor-pointer mb-5'>
            <nuxt-img src='/icons/arrow-left.svg' class='dark:invert h-5 mr-2'/>
            Back to All Projects
        </NuxtLink>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 class="text-4xl font-bold mb-5">{{ title }}</h1>
                <h2 class="text-2xl font-bold mb-5">{{ description }}</h2>
                <div v-for="(item, index) in overview" :key='index'>
                    <p class='mb-2'>{{ item }}</p>
                </div>
                <div v-if="reportUrl || link" class='mt-8'>
                    <NuxtLink :to='reportUrl ? reportUrl : link' target='_blank' class='w-64 border-solid border-2 border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:border-orange hover:text-white hover:bg-orange mr-5'>
                        <span v-if='reportUrl'>View Project Report</span>
                        <span v-else>View Website</span>
                    </NuxtLink>
                </div>
            </div>
            <div class='flex justify-center lg:justify-end mt-8 lg:mt-0'>
                <ImageCarousel :imgs='imgs'/>
            </div>
        </div>

        <SectionTitle title='Project Toolkit'/>
        <div class="shadow-light_3xl dark:shadow-3xl rounded-lg pt-6 mb-4" >
            <div class='grid text-center' :class="`grid-cols-${toolkit.length}`">
                <div v-for='skill in toolkit' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>

        <SectionTitle title='My Role'/>
        <p>{{role}}</p>

        <SectionTitle title='Process'/>
        <ul class='list-disc'>
            <li v-for="(item, index) in process" :key="index">{{ item }}</li>
        </ul>

        <SectionTitle title='End Result'/>
        <div v-for="(item, index) in result" :key='index'>
            <p class='mb-2'>{{ item }}</p>
        </div>

        <div v-if="video" class='w-full flex justify-center mt-20'>
            <iframe title="YouTube Video Player" frameborder="0" width='560' height='315' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen :src="video"></iframe>
        </div>
    </div>
</template>
<script>
import projData from '/data/projects.json' assert {type: 'json'}
export default {
    data() {
        return {
            title: null,
            description: null,
            overview: null,
            imgs: null,
            toolkit: null,
            role: null,
            process: null,
            result: null,
            video: null,
            reportUrl: null,
            link: null,
        }
    },
    created() {
        const project = projData.projects[this.$route.params.id];
        this.title = project.title;
        this.description = project.description;
        this.overview = project.overview;
        this.imgs = project.imgs;
        this.toolkit = project.toolkit;
        this.role = project.role;
        this.process = project.process;
        this.result = project.result;
        this.link = project.link;
        if(project.video) this.video = project.video;
        if(project.report) {
            let runtimeConfig = useRuntimeConfig();
            this.reportUrl = runtimeConfig.public.baseUrl + project.report;
        }
    },
}
</script>