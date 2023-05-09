<template>
    <div class='m-10 mt-16 xl:mx-32'>
        <div class='mb-12'>
            <div class='grid grid-cols-1 xl:grid-cols-2 2xl:mx-30 gap-10'>
                <div class='h-100 flex flex-col justify-around'>
                    <div>
                        <h1 class='text-2xl font-bold mb-4'>
                           I'm a product manager and software engineer devoted to solving real world challenges and delivering excellent customer experiences.
                        </h1>
                        <h2 class='text-xl mb-4'>
                            Over three years working in tech start ups, I've been responsible for managing the product lifecycle from ideation to delivery, leading teams of developers and designers, and building products that customers love.
                        </h2>
                        <p class='text-lg'>Currently working as a co-founder of Graphium Technologies LTD. A B2B SaaS company that helps businesses make better use of their unstructured research data.</p>
                    </div>
                    <div class='flex mt-8'>
                        <CallToAction :url='cvUrl' target='_blank' text='View CV'/>
                        <CallToAction url='/contact' target='_self' text='Contact Me'/>
                    </div>
                </div>
                <nuxt-img src="/images/risingStars.png" alt='photo with team' :placeholder="[526,289]" class='hidden xl:block w-100 2xl:w-5/6 justify-self-end self-center rounded-md'/>
            </div>
        </div>
        
        <div class='mt-20 lg:mx-16 grid grid-cols-1 md:grid-cols-3'>
            <div class='flex justify-center mb-5 md:mb-0' v-for='highlight in highlights' :key="highlight.headline">
                <HighlightCard :item='highlight'/>
            </div>
        </div>
        <div class='grid grid-cols-1 lg:grid-cols-2 mb-12'>
            <div class='relative lg:mr-5'>
                <SectionTitle title='Employments'/>
                <div class='hidden sm:block absolute w-1 h-[365px] left-[9px] top-[200px] bg-dblue'></div>
                <div class='flex justify-center mb-4' v-for='item in work' :key="item.company">
                    <WorkCard :item='item'/>
                </div>
            </div>
            <div class='relative lg:ml-5'>
                <SectionTitle title='Education'/>
                <div class='hidden sm:block absolute w-1 h-[195px] left-[9px] top-[200px] bg-dblue'></div>
                <div class='flex justify-center mb-4' v-for='item in education' :key="item.institution">
                    <EducationCard :item='item'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const highlights = await $fetch('/api/data/highlights');
const work = await $fetch('/api/data/work');
const education = await $fetch('/api/data/education');
const cvUrl = await $fetch(`/api/s3/rachel-kirby-cv.pdf`);
</script>