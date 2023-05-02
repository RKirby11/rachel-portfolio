<template>
    <div class='m-10 md:m-20 xl:mx-40'>
        <div v-if='!sent' class='shadow-light_3xl dark:shadow-3xl rounded-md p-10 grid grid-cols-1 md:grid-cols-2'>
            <div class='p-5 pr-10'>
                <h2 class='text-2xl font-bold mb-2'>Get in Touch!</h2>
                <p class='text-lg mb-5'>I'm always open to new opportunities and collaborations.</p>
                <p>If you'd like to get in touch, please fill out the form and I'll get back to you as soon as possible.</p>
            </div>
            <form class='flex flex-col'>
                <input v-model='mail.from' placeholder='Your Email Address' class='border-solid border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-10 p-2'/>
                <input v-model='mail.subject' placeholder='Subject' class='border-solid border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-10 p-2'/>
                <textarea v-model='mail.text' placeholder='Message' class='border-solid border-dblue border-2 dark:bg-dblue mb-5 rounded-md h-32 p-2'></textarea>
                <div class='border-2 border-dblue rounded-md p-2 w-32 self-center text-center hover:bg-dblue hover:text-white hover:cursor-pointer' @click='sendEmail'>Submit</div>
                <div v-if='error' class='text-orange mt-2 text-center italic'>Please fill out all fields.</div>
            </form>
        </div>
        <div v-else class='shadow-light_3xl dark:shadow-3xl rounded-md p-10 text-center'>
            <h2 class='text-2xl font-bold mb-2'>Thanks for reaching out!</h2>
            <p class='text-lg mb-5'>I'll get back to you as soon as possible.</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            mail: {
                from: '',
                subject: '',
                text: '',
            },
            error: false,
            sent: false,
        }
    },
    methods: {
        sendEmail() {
            if(this.mail.from == '' || this.mail.subject == '' || this.mail.text == '')
                this.error = true;
            else {
                this.error = false;
                this.$mail.send({
                    from: this.mail.from,
                    subject: this.mail.subject,
                    text: this.mail.text,
                })
                this.sent = true;
            }
        }
    }
}
</script>