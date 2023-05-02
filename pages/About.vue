<template>
    <div class='m-10 xl:mx-32'>
        <div>
            <div class='grid grid-cols-1 lg:grid-cols-2 md:mx-10 lg:mx-30 gap-10'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h2 class='text-2xl font-bold '>I'm a software engineer and product manager with 3 years experience working in Tech Start-Ups</h2>
                        <br>
                        <p>Currently, I'm a co-founder of Graphium Technologies LTD. A B2B SaaS company that helps businesses make better use of their unstructured research data.</p>
                    </div>
                    <div class='flex'>
                        <NuxtLink :to='cvUrl' target='_blank' class='w-32 border-solid border-2 border-charcoal dark:border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:border-orange hover:text-white hover:bg-orange mr-5'>View CV</NuxtLink>
                        <NuxtLink to='/contact' class='w-32 border-solid border-2 border-charcoal dark:border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:border-orange hover:text-white hover:bg-orange'>Contact Me</NuxtLink>
                    </div>
                </div>
                <img src="/images/risingStars.png" class='hidden lg:block w-auto justify-self-end self-center rounded-md'>
            </div>
        </div>
        <div class='mt-10 lg:mx-16 grid grid-cols-1 md:grid-cols-3'>
            <div class='flex justify-center mb-5 md:mb-0' v-for='highlight in highlights' :key="highlight.headline">
                <HighlightCard :item='highlight'/>
            </div>
        </div>
        <div class='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <h2 class='text-xl font-bold mt-10'>Work Experience</h2>
                <div class='w-16 bg-dblue h-1 mb-4'/>
                <div class='flex justify-center mb-4 mx-10' v-for='item in work' :key="item.company">
                    <WorkCard :item='item'/>
                </div>
            </div>
            <div>
                <h2 class='text-xl font-bold mt-10'>Education</h2>
                <div class='w-16 bg-dblue h-1 mb-4'/>
                <div class='flex justify-center mb-4 mx-10' v-for='item in education' :key="item.institution">
                    <EducationCard :item='item'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import highlightData from '/assets/highlights.json' assert {type: 'json'}
import workData from '/assets/work.json' assert {type: 'json'}
import educationData from '/assets/education.json' assert {type: 'json'}
export default {
    data() {
        return {
            highlights: highlightData.highlights,
            work: workData.work,
            education: educationData.education,
            cvUrl: null,
        }
    },
    created() {
        let runtimeConfig = useRuntimeConfig();
        this.cvUrl = runtimeConfig.public.baseUrl + '/cv.pdf';
    }
}
</script>