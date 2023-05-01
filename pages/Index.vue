<template>
    <div class='mx-10 my-5'>
        <div>Intro</div>
        <div>Experience Overview</div>
        <div>Skills Overview</div>
        Recent Projects:
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div v-for='project in recentProjects' :key='project.title'>
                <ProjectCard :project='project'/>
            </div>
        </div>
        <div class='mt-5 w-100 flex justify-center'>
            <NuxtLink to='/projects' class='w-64 rounded-md bg-lblue py-1.5 text-sm text-white text-center'>
                View More >>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
import projectJson from '/assets/projects.json' assert {type: 'json'}
export default {
    data() {
        return {
            recentProjects: projectJson.all.slice(0, 3)
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateProjectDisplay);
        this.updateProjectDisplay();
    },
    methods: {
        updateProjectDisplay() {
            console.log(window.innerWidth)
            if(window.innerWidth < 768)
                this.recentProjects = projectJson.all.slice(0, 1)
            else if(window.innerWidth < 1024)
                this.recentProjects = projectJson.all.slice(0, 2)
            else 
                this.recentProjects = projectJson.all.slice(0, 3)
        },
    }
};
</script>
