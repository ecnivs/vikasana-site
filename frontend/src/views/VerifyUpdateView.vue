<script setup>
import NavBar from '@/components/NavBar.vue';
import { useRouter } from 'vue-router';
// import { defineProps } from 'vue';
import { ref } from 'vue';

const router = useRouter();
const addImprove = ref(true);
const name = localStorage.getItem("name");
const points = localStorage.getItem("points");

// Title and Description (static content)
const member = "Dinesh"
const title = "Add Updates on Cnast Project - @"+member;
const task = "String"
const update = "String"
const proof = "String"
const comments = "String"

// const props = defineProps({
//     task : String,
//     update : String,
//     proof : String,
//     comments : String
// });

</script>

<template>
    <div class="min-h-screen min-w-screen pb-16 bg-black text-white font-altone ">
        <NavBar :name="name" :points="points" />

        <div class="flex flex-row-reverse justify-between px-6 md:pl-10 md:pr-16 py-6">
            <p @click="router.push('/updates')" class="h-fit cursor-pointer tracking-wide text-center select-none hover:underline active:text-white/80 transition-all duration-150">Back To Updates</p>
            <h1 class="w-9/12 text-3xl font-bold py-4">{{ title }}</h1>
        </div>
        <div class="mx-6 md:ml-10 md:mr-16 w-10/12 md:w-9/12 h-fit rounded-2xl bg-gradient-to-bl from-[#9F5EFACC] to-[#7AE0F5] text-xl">
            <div class="grid grid-cols-2 gap-y-10 gap-x-4 bg-black py-10 pl-7 pr-7 md:pr-1/6 w-full rounded-2xl bg-clip-padding border-2 border-transparent text-sm sm:text-base items-center">
                <label>Name of task /Task Id*</label>
                <div class="bg-transparent px-4 py-2 border rounded-2xl text-base text-wrap w-full break-words">{{ task }}</div>
                <label>Updates</label>
                <div class="bg-transparent px-4 py-2 h-fit border rounded-2xl text-base">
                    <p class="text-wrap w-full break-words">{{ update }}</p>
                </div>
                <label>Proof of updates for verification</label>
                <div class=" flex items-center justify-between  px-4 py-2 border rounded-2xl overflow-clip">
                    <div class="bg-transparent outline-none text-wrap w-full break-words" >{{ proof }}</div>
                    <img src="/images/attach.svg" class="  cursor-pointer hidden sm:block sm:w-auto sm:h-2/3">
                </div>
                <label>Additional details/ comments</label>
                <div class="bg-transparent px-4 py-2 border rounded-2xl text-base text-wrap w-full break-words">{{ comments }}</div>

                <button class="place-self-end relative w-fit sm:w-64 h-fit px-6 py-3 border-none rounded-lg improve text-white p-3 z-0 before:absolute before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500" @click="addImprove = !addImprove"><span class="relative">Add Improvements</span></button>

                <button type="submit" :disabled="!addImprove" class="place-self-end relative w-fit sm:w-64 h-fit px-6 py-3 border-none rounded-lg approve text-white p-3 z-0 before:absolute before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 disabled:grayscale"><span class="relative">Approve</span></button>
                
                <form class="grid grid-cols-subgrid gap-y-6 col-span-2 px-2 items-center transition-all duration-1000 overflow-y-hidden" :class="{
                    'disabled': addImprove, 
                    'max-h-0': addImprove,
                    'max-h-32': !addImprove,
                    'mt-0': addImprove,
                    'mt-2': !addImprove,
                    'opacity-0': addImprove,
                    'opacity-100': !addImprove
                }">
                    <label>Comments</label>
                    <input type="text" class="bg-transparent my-px px-4 py-2 border rounded-2xl text-base text-wrap w-full break-words" placeholder="Additional comments">
                    <button type="submit" class="col-span-2 place-self-end relative w-64 h-fit px-6 py-3 border-none rounded-lg approve text-white p-3 z-0 before:absolute before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"><span class="relative">Submit</span></button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.approve {
    background: linear-gradient(90deg, rgba(122, 224, 245, 1) 0%, rgba(133, 187, 246, 1) 28.4%, rgba(140, 159, 247, 1) 50%, rgba(159, 94, 250, 1) 100%);
}

.approve::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(122, 224, 245, 1) 0%, rgba(133, 187, 246, 1) 28.4%, rgba(140, 159, 247, 1) 50%, rgba(159, 94, 250, 1) 100%);
    border-radius: inherit;
}
.improve {
    background: linear-gradient(90deg, #EE9090 0%, #EE9090 28.4%, #EE9090 50%, #FFA500 100%);

}

.improve::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #EE9090 0%, #EE9090 28.4%, #EE9090 50%, #FFA500 100%);
    border-radius: inherit;
}


</style>