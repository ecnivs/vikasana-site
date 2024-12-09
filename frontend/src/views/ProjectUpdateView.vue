<script setup>
import NavBar from '@/components/NavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Title and Description (static content)
const title = "Add Updates on Cnast Project";

</script>

<template>
    <div class="min-h-screen min-w-screen pb-16 bg-black text-white font-altone ">
        <NavBar :name="'Sara Laufeyson'" :points="'512'" />

        <div class="flex flex-row-reverse justify-between px-6 md:pl-10 md:pr-16 py-6">
            <p @click="router.push('/dashboard')" class="h-fit cursor-pointer tracking-wide text-center select-none hover:underline active:text-white/80 transition-all duration-150">Back To Site</p>
            <h1 class="w-9/12 text-3xl font-bold py-4">{{ title }}</h1>
        </div>
        <div class="mx-6 md:ml-10 md:mr-16 w-10/12 md:w-7/12 h-fit rounded-2xl bg-gradient-to-bl from-[#9F5EFACC] to-[#7AE0F5] text-xl">
            <form class="grid grid-cols-2 gap-y-10 gap-x-4 bg-black py-10 pl-7 pr-7 md:pr-1/6 w-full rounded-2xl bg-clip-padding border-2 border-transparent text-sm sm:text-base">
                <label>Name of task /Task Id*</label>
                <input class="bg-transparent px-4 py-2 border rounded-2xl text-base outline-none focus-within:ring-1 ring-white/50" type="text" placeholder="Task name / Id">
                <label>Your Updates</label>
                <textarea rows="6" class="bg-transparent px-4 py-2 border rounded-2xl text-base outline-none focus-within:ring-1 ring-white/50" placeholder="Your message here"></textarea>
                <label>Proof of updates for verification</label>
                <div class="focus-within:ring-1 ring-white/50 flex items-center justify-between  px-4 py-2 border rounded-2xl overflow-clip">
                    <input class="bg-transparent outline-none" type="url" placeholder="Enter your URL">
                    <img src="/images/attach.svg" class="  cursor-pointer hidden sm:block sm:w-auto sm:h-2/3">
                </div>
                <label>Additional details/ comments</label>
                <input class="bg-transparent px-4 py-2 border rounded-2xl text-base outline-none focus-within:ring-1 ring-white/50" placeholder="Comments">
                <button type="submit" class="col-span-2 place-self-end relative w-64 h-fit px-6 py-3 border-none rounded-lg submit text-white p-3 z-0 before:absolute before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"><span class="relative">Submit</span></button>
            </form>
        </div>
    </div>
</template>


<style scoped>
.submit {
    background: linear-gradient(90deg, rgba(122, 224, 245, 1) 0%, rgba(133, 187, 246, 1) 28.4%, rgba(140, 159, 247, 1) 50%, rgba(159, 94, 250, 1) 100%);
}

.submit::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(122, 224, 245, 1) 0%, rgba(133, 187, 246, 1) 28.4%, rgba(140, 159, 247, 1) 50%, rgba(159, 94, 250, 1) 100%);
    border-radius: inherit;
}


</style>