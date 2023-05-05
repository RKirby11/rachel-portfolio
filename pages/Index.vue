<template>
    <div class='m-10 mt-16 xl:mx-32'>
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-30 gap-10'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h1 class='text-4xl font-bold mb-2'>Hello!</h1>
                        <h2 class='text-xl'>As a software engineer and entrepeneur my work experience spans web development, business strategy, and product management.</h2>
                        <p class='text-lg mt-5'>Please feel free to take a look around this website to learn a bit more about me and the projects I've been involved in.
                        </p>
                    </div>
                    <div class='flex mt-5'>
                        <NuxtLink to='/projects' class='w-32 border-solid border-2 border-orange  h-10 rounded-md text-center p-1.5 hover:bg-orange hover:text-white mr-5'>View Projects</NuxtLink>
                        <NuxtLink to='/contact' class='w-32 border-solid border-2 border-orange  h-10 rounded-md text-center p-1.5 hover:bg-orange hover:text-white'>Contact Me</NuxtLink>
                    </div>
                </div>
                <img src="/images/profile.jpg" class='hidden md:block h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 justify-self-end self-center rounded-full'>
            </div>
        </div>

        <SectionTitle title='Skills & Competencies'/>
        <div class="w-full shadow-xl dark:shadow-3xl bg-white dark:bg-charcoal rounded-lg pt-6" >
            <div class='grid grid-cols-3 md:grid-cols-6 text-center'>
                <div v-for='skill in skills' :key='skill.skill' class='flex flex-col flex-wrap items-center mb-6'>
                    <SkillCard :skill='skill'/>
                </div>
            </div>
        </div>

        <SectionTitle title='Recent Projects'/>
        <div class="bg-lblue dark:bg-orange shadow-lg dark:shadow-3xl rounded-lg py-6 px-5 mb-2">
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div v-for='(project, index) in recentProjects' :key='project.title'>
                    <ProjectCard :project='project' @click="$router.push({path: `projects/${index}`})"/>
                </div>
            </div>
            <div class='mt-5 w-100 flex justify-center'>
                <NuxtLink to='/projects' class='w-64 rounded-md border-2 border-solid border-dblue dark:border-white text-center text-dblue dark:text-white hover:text-white dark:bg-orange hover:bg-dblue hover:dark:bg-charcoal hover:dark:border-charcoal py-1.5 '>
                    View More >>
                </NuxtLink>
            </div>
        </div>
        
        <ContactCard/>
    </div>
</template>
<script>
import projectData from '/data/projects.json' assert {type: 'json'}
import skillData from '/data/skills.json' assert {type: 'json'}
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
