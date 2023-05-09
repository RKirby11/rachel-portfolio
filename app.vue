<template>
    <div :class="darkMode ? 'dark' : ''">
        <div class="font-poppins bg-grey text-dblue dark:bg-charcoal dark:text-white">
            <AppHeader @toggleDarkMode='darkMode = !darkMode'/>
            <NuxtLoadingIndicator /> 
            <NuxtPage class='min-h-screen' />
            <AppFooter/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkMode: true
        }
    }
}
</script>

