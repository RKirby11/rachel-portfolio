<template>
    <div class='m-10 xl:mx-32'>
        <div>
            <div class='grid grid-cols-1 sm:grid-cols-2 md:mx-20 lg:mx-30'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h1 class='text-4xl font-bold mb-2'>Hello!</h1>
                        <h2 class='text-xl'>I'm a blah blah blah. You should hire me.</h2>
                    </div>
                    <NuxtLink to='/contact' class='w-32 border-solid border-2 border-charcoal dark:border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:bg-orange hover:text-white hover:border-orange m-5'>Get In Touch</NuxtLink>
                </div>
                <img src="/images/profile.jpg" class='hidden sm:block h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 justify-self-end self-center rounded-full'>
            </div>
        </div>
        <h2 class='text-xl font-bold mt-10'>Skills & Competencies</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <div class="shadow-light_3xl dark:shadow-3xl rounded-lg pt-6 mb-4" >
            <div class='grid grid-cols-3 md:grid-cols-6 text-center'>
                <div v-for='skill in skills' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>
        <h2 class='text-xl font-bold mt-6'>Recent Projects</h2>
        <div class='w-16 bg-dblue h-1 mb-4'/>
        <div class="bg-lblue dark:bg-orange shadow-light_3xl dark:shadow-3xl rounded-lg py-6 px-5">
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div v-for='(project, index) in recentProjects' :key='project.title'>
                    <ProjectCard :project='project' @click="$router.push({path: `projects/${index}`})"/>
                </div>
            </div>
            <div class='mt-5 w-100 flex justify-center'>
                <NuxtLink to='/projects' class='w-32 rounded-md border-white border-2 border-solid text-white dark:border-dblue dark:bg-dblue py-1.5 text-sm text-charcoal dark:text-white text-center hover:bg-white hover:text-dblue hover:dark:border-lblue hover:dark:text-charcoal hover:dark:bg-lblue'>
                    View More >>
                </NuxtLink>
            </div>
        </div>
        <ContactCard/>
    </div>
</template>
<script>
import projectData from '/assets/projects.json' assert {type: 'json'}
import skillData from '/assets/skills.json' assert {type: 'json'}
export default {
    data() {
        return {
            recentProjects: projectData.projects.slice(0, 3),
            skills: skillData.skills
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateProjectDisplay);
        this.updateProjectDisplay();
    },
    methods: {
        updateProjectDisplay() {
            if(window.innerWidth < 768)
                this.recentProjects = projectData.projects.slice(0, 1)
            else if(window.innerWidth < 1024)
                this.recentProjects = projectData.projects.slice(0, 2)
            else 
                this.recentProjects = projectData.projects.slice(0, 3)
        },
    }
};
</script>
