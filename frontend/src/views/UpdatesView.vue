<script setup>
import NavBar from '@/components/NavBar.vue';
import ProjectUpdateTile from '@/components/ProjectUpdateTile.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Title and Description (static content)
const name = localStorage.getItem("name");

const updates = [
    { id: 1, title: 'Project 1', name: "Dinesh" , img:"" },
    { id: 2, title: 'Project 2', name: "Dinesh" , img:"" },
    { id: 3, title: 'Project 3', name: "Dinesh" , img:"" },
    { id: 4, title: 'Project 4', name: "Dinesh" , img:"Images/projectThumbnail.png" },
    { id: 5, title: 'Project 5', name: "Dinesh" , img:"Images/projectThumbnail.png" },
    { id: 6, title: 'Project 6', name: "Dinesh" , img:"" },
    { id: 7, title: 'Project 7', name: "Dinesh" , img:"" },
    { id: 8, title: 'Project 8', name: "Dinesh" , img:"" },
];

let isDragging = false;
let startX;
let scrollLeft;

// Desktop drag handling
const startDrag = (event) => {
  const container = event.target;
  if (!container) return;
  isDragging = true;
  startX = event.clientX || event.touches[0].clientX;
  scrollLeft = container.scrollLeft;
};

const drag = (event) => {
  if (!isDragging) return;
  const container = event.target;
  const x = event.clientX || event.touches[0].clientX;
  const walk = (x - startX) * 3;
  container.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
  isDragging = false;
};

</script>

<template>
    <div class="min-h-screen min-w-screen pb-16 bg-black text-white font-altone ">
        <NavBar :name="'Sara Laufeyson'" :points="'512'" />

        <div class="flex flex-row-reverse justify-between px-6 md:pl-10 md:pr-16 py-6">
            <p @click="router.push('/dashboard')" class="h-fit cursor-pointer tracking-wide text-center select-none hover:underline active:text-white/80 transition-all duration-150">Back To Site</p>
            <div class="w-9/12 text-2xl font-bold py-4">
                <h1>Hey {{ name }}...</h1>
                <h1 class="text-xl">Looks Like your team is doing great...Give them Your FeedBack</h1>                
            </div>
        </div>
        <div class="mt-8 px-6 md:pl-10 md:pr-16">
            <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory scroll-smooth"
            @mousedown="startDrag"
            @mousemove="drag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag">

                <ProjectUpdateTile v-for="project in updates" :key="project.id" :id="project.id" :title="project.title" :name="project.name" :img="project.img"/>
            </div>
        </div>
        <!-- <div class="mt-8 px-6 md:pl-10 md:pr-16">
            <div class="flex justify-between items-end">
                <h2 class="text-2xl pt-8 pb-4 tracking-wider text-nowrap">Time-Line</h2>
                
                <AddButton />
                
            </div>
            <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory scroll-smooth"
            @mousedown="startDrag"
            @mousemove="drag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag">

                <ProjectTile v-for="project in updates" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img"/>
            </div>
        </div> -->
    </div>
</template>


<style scoped>
</style>