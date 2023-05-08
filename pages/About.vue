<template>
    <div class='m-10 mt-16 xl:mx-32'>
        <div class='mb-12'>
            <div class='grid grid-cols-1 lg:grid-cols-2 md:mx-10 lg:mx-30 gap-10'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h2 class='text-2xl font-bold '>I'm a product manager and software engineer with 3 years experience working with tech start-ups</h2>
                        <br>
                        <p>Co-Founder of Graphium Technologies LTD. A B2B SaaS company that helps businesses make better use of their unstructured research data.</p>
                    </div>
                    <div class='flex'>
                        <NuxtLink :to='cvUrl' target='_blank' class='w-32 border-solid border-2 border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:border-orange hover:text-white hover:bg-orange mr-5'>View CV</NuxtLink>
                        <NuxtLink to='/contact' class='w-32 border-solid border-2 border-orange h-10 rounded-md text-center p-1.5 mt-5 hover:border-orange hover:text-white hover:bg-orange'>Contact Me</NuxtLink>
                    </div>
                </div>
                <nuxt-img src="/images/risingStars.png" alt='photo with team' placeholder class='hidden lg:block w-auto justify-self-end self-center rounded-md'/>
            </div>
        </div>
        <div class='lg:mx-16 grid grid-cols-1 md:grid-cols-3 mb-12'>
            <div class='flex justify-center mb-5 md:mb-0' v-for='highlight in highlights' :key="highlight.headline">
                <HighlightCard :item='highlight'/>
            </div>
        </div>
        <div class='grid grid-cols-1 lg:grid-cols-2 mb-12'>
            <div class='relative lg:mr-5'>
                <SectionTitle title='Employments'/>
                <div class='hidden sm:block absolute w-1 h-[365px] left-[9px] top-[160px] bg-dblue'></div>
                <div class='flex justify-center mb-4' v-for='item in work' :key="item.company">
                    <WorkCard :item='item'/>
                </div>
            </div>
            <div class='relative lg:ml-5'>
                <SectionTitle title='Education'/>
                <div class='hidden sm:block absolute w-1 h-[195px] left-[9px] top-[160px] bg-dblue'></div>
                <div class='flex justify-center mb-4' v-for='item in education' :key="item.institution">
                    <EducationCard :item='item'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import highlightData from '/data/highlights.json' assert {type: 'json'}
import workData from '/data/work.json' assert {type: 'json'}
import educationData from '/data/education.json' assert {type: 'json'}
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
        this.cvUrl = runtimeConfig.public.baseUrl + 'CV.pdf';
    }
}
</script>