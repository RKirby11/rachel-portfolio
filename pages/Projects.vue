<template>
    <div class='columns-4'>
        <div v-for='project in projects' :key='project'>
            <ProjectCard :project='project'/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: ['proj1', 'proj2', 'proj3', 'proj4', 'proj5']
        }
    },
}
</script>

<style>

</style>