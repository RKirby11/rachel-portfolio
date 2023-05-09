<template>
    <div class='m-10 mt-16 md:m-20 xl:mx-40'>
        <div v-if='!response' class='bg-white dark:bg-charcoal shadow-light_3xl dark:shadow-3xl rounded-md p-10 grid grid-cols-1 md:grid-cols-2'>
            <div class='p-5 pr-10'>
                <h1 class='text-2xl font-bold mb-4'>Get in Touch!</h1>
                <h2 class='text-xl mb-4'>I'm always open to new opportunities and collaborations.</h2>
                <p class='text-lg'>If you'd like to get in touch, please fill out the form and I'll get back to you as soon as possible.</p>
            </div>
            <form class='flex flex-col'>
                <input v-model='form.from' aria-label='Email Address' placeholder='Your Email Address' class='border-solid border-gray-300 dark:border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-10 p-2 focus:outline-none focus:border-gray-500'/>
                <input v-model='form.subject' aria-label='Email Subject' placeholder='Subject' class='border-solid border-gray-300 dark:border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-10 p-2 focus:outline-none focus:border-gray-500'/>
                <textarea v-model='form.message' aria-label='Email Message' placeholder='Message' class='border-solid border-gray-300 dark:border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-32 p-2 focus:outline-none focus:border-gray-500'></textarea>
                <div class='border-2 border-dblue rounded-md p-2 w-32 self-center text-center hover:bg-dblue hover:text-white hover:cursor-pointer' @click='sendEmail'>Submit</div>
                <div v-if='error' class='text-orange mt-2 text-center italic'>Please fill out all fields.</div>
            </form>
        </div> 
        <div v-else class='shadow-light_3xl dark:shadow-3xl rounded-md p-10 text-center'>
            <h2 class='text-2xl font-bold mb-2'>{{response.title}}</h2>
            <p class='text-lg mb-5'>{{response.msg}}</p>
        </div>
    </div>
</template>
<script setup>
const form = ref({
    from: '',
    subject: '',
    message: '',
});
const error = ref(false);
const response = ref(null);
const mail = useMail();

async function sendEmail() {
    if(form.value.from == '' || form.value.subject == '' || form.value.message == '')
        error.value = true;
    else {
        error.value = false;
        try {
            mail.send({
                subject: "Portfolio Contact Form Submission",
                text: `From: ${form.value.from}\n\nSubject: ${form.value.subject}\n\nMessage: ${form.value.message}`,
            });
            response.value = {
                "title" : "Thanks for reaching out!",
                "msg" : "I'll get back to you as soon as possible."
            }
        }
        catch (error) {
            response.value = {
                "title" : "Sorry, there was an error with the form.",
                "msg" : "Please try again later, or contact me directly at 'rachel.kirby@outlook.com'"
            }
        }
    }
}

useHead({
    title: 'Contact',
    meta: [{ 
        name: 'description', 
        content: "Get in touch with Rachel Kirby and take the first step towards working together. Whether you have a project in mind or just want to say hello, I'm always happy to hear from you. Contact me now to start the conversation."
    }]
})
</script>