<template>
    <div class='m-10 mt-16 xl:mx-32'>
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-30 gap-10'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h1 class='text-4xl font-bold mb-4'>Hello!</h1>
                        <h2 class='text-2xl mb-4'>I'm a product manager and software engineer from Bristol.</h2>
                        <p class='text-xl'>Take a look around my site to learn a bit more about me and the projects I've been involved in.
                        </p>
                    </div>
                    <div class='flex mt-5'>
                        <CallToAction url='/projects' target='_self' text='View Projects'/>
                        <CallToAction url='/contact' target='_self' text='Contact Me'/>
                    </div>
                </div>
                <nuxt-img src="/images/profile.jpg" alt='profile photo' preload class='hidden md:block h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 justify-self-end self-center rounded-full'/>
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
        <div class="bg-lblue dark:bg-orange shadow-lg dark:shadow-3xl rounded-lg p-10 mb-2">
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div v-for='(project, index) in projects.data' :key='project.title'>
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
<script setup>
const projectCount = ref(3);
const { data: skills } = await $fetch('/api/skills');
const { data: projects } = await useAsyncData('projects', () => 
    $fetch(`/api/projects/byCount/${projectCount.value}`),  {
        watch: [ projectCount ]
    }
);

function updateProjectDisplay() {
    if(window.innerWidth < 768) projectCount.value = 1;
    else if(window.innerWidth < 1024) projectCount.value = 2;
    else projectCount.value = 3;
}

onMounted(() => {
    window.addEventListener('resize', updateProjectDisplay);
    updateProjectDisplay();
})
onUnmounted(() => 
    window.removeEventListener('resize', updateProjectDisplay)
);
</script>s
