<template>
    <div class='m-10 mt-16 xl:mx-32'>
        <div class='text-lg dark:text-white flex mb-5'>
            <div v-for='option in filterOptions' :key='option' class='w-32 p-1.5 border-solid rounded-md border-2 text-center h-10 dark:bg-black mr-5 hover:bg-orange hover:border-orange hover:dark:border-orange hover:text-white hover:dark:bg-orange' :class="filter === option ? 'border-orange' : 'border-dblue dark:border-black'" @click='filter = option'>
                {{option}}
            </div>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div v-for='(project, index) in projects' :key='project'>
                <ProjectCard :project='project' @click="$router.push({path: `projects/${index}`})"/>
            </div>
        </div>
    </div> 
</template>

<script setup>
const filterOptions = ['All', 'Tech', 'Design', 'Business']
const filter = ref('All')
const { data: projects } = await useAsyncData('projects', () => 
    $fetch(`/api/projects/byType/${filter.value.toLowerCase()}`),  {
        watch: [ filter ]
    }
);
useHead({
    title: 'Projects',
    meta: [{ 
        name: 'description', 
        content: "From software engineering to product management and beyond, my work over the past 6 years has been driven by a passion for innovation. Explore my portfolio to see my latest projects."
    }]
})
</script>