<template>
    <div class='mx-10 my-5'>
        <div class='text-lg text-black flex-start mb-5'>
            <select v-model='filterSelected' class="w-32 px-1.5 border-solid rounded-md border-orange border-2 text-center h-10 bg-black text-white">
                <option v-for='option in filterOptions' :key='option.value' :value='option.value'>
                    {{option.text}}
                </option>
            </select>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div v-for='project in projects' :key='project'>
                <ProjectCard :project='project'/>
            </div>
        </div>
    </div> 
</template>

<script>
import projectJson from '/assets/projects.json' assert {type: 'json'}
export default {
    data() {
        return {
            projects: projectJson.all,
            filterSelected: 'all',
            filterOptions: [
                {value: 'tech', text: 'Tech'},
                {value: 'design', text: 'Design'},
                {value: 'business', text: 'Business'},
                {value: 'all', text: 'All'}
            ]
        }
    },
    watch: {
        filterSelected() {
            switch (this.filterSelected) {
                case 'tech':
                    this.projects = projectJson.all.filter(project => project.tags.includes('tech'))
                    break
                case 'design':
                    this.projects = projectJson.all.filter(project => project.tags.includes('design'))
                    break
                case 'business':
                    this.projects = projectJson.all.filter(project => project.tags.includes('business'))
                    break
                default:
                    this.projects = projectJson.all
            }
        }
    },
}
</script>

<style>

</style>