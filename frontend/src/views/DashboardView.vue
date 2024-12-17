<script setup>
import AddButton from '@/components/AddButton.vue';
import DivisionUpdates from '@/components/DivisionUpdates.vue';
import NavBar from '@/components/NavBar.vue';
import ProjectTile from '@/components/ProjectTile.vue';
import { useRouter } from 'vue-router';
import { useProjectStore } from '@/stores/projects';
import { onMounted, computed } from 'vue';

const name = localStorage.getItem("name");
const points = localStorage.getItem("points");
const projectStore = useProjectStore();
onMounted(()=> {
  projectStore.fetchProjects();
})

const yetToStart = computed(() => projectStore.yetToStart);
const ongoing = computed(() => projectStore.ongoing);
const completed = computed(() => projectStore.completed);
const research = computed(() => projectStore.research);


const router = useRouter();

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

const handleProjectClick = (projectId) => {
  router.push({ name: 'ProjectView', params: { id: projectId } });
}

</script>

<template>
    <div class="min-h-screen min-w-screen bg-black text-white font-sans">
      <!-- Navbar -->
      <NavBar :name="name" :points="points" />
  
      <!-- Main Content -->
      <div class="px-6 md:pl-24 md:pr-16 py-6 font-altone">
        <!-- Banner -->
        <div class="mb-8 md:grid md:grid-cols-3 gap-4">
          <div class="bg-gray-800 h-96 col-span-2 rounded-lg p-6 mb-8">
            <h1 class="text-2xl font-bold">TECH FUTURE</h1>
            <p class="text-sm mt-2">5 trends that will change the world</p>
          </div>
          <!-- Division Updates -->
          
          <DivisionUpdates
          class="row-span-2 custom-scrollbar" 
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag" />
          
          <!-- Projects -->
          <div class="col-span-2">
            <h2 class="text-2xl mb-4">Assigned to You</h2>
            <div class="flex justify-between items-start">
              <div
              class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[15vw] sm:gap-x-[2vw] md:gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory scroll-smooth" 
              @mousedown="startDrag"
              @mousemove="drag"
              @mouseup="stopDrag"
              @mouseleave="stopDrag">

                <ProjectTile v-for="project in ongoing" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img" @click="() => handleProjectClick(project.id)"/>
                <ProjectTile v-for="project in yetToStart" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img" @click="() => handleProjectClick(project.id)"/>
              </div>
              <AddButton class="-mt-12 md:-mt-11 mx-5 md:mx-16" :options="[{ label: 'New Project', link: '/new' }]" />
            </div>
          </div>
        </div>
  
        <div class="mt-8 w-full">
          <h2 class="text-2xl mb-4">Completed Projects</h2>
          <div 
          class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory scroll-smooth"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag">

              <ProjectTile v-for="project in completed" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img" @click="() => handleProjectClick(project.id)"/>
          </div>
        </div>
  
        
        <div class="mt-8">
          <h2 class="text-2xl mb-4">Document Archives/Research</h2>
          <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory scroll-smooth"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag">

              <ProjectTile v-for="project in research" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img" @click="() => handleProjectClick(project.id)"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
          <!-- [
          { 'id': 1, 'title': 'Project 1', 'status': -1, 'div': 'Onyx', 'research': false, 'img':"" },
          { 'id': 2, 'title': 'Project 2', 'status': -1, 'div': 'Onyx', 'research': false, 'img':"" },
          { 'id': 3, 'title': 'Project 3', 'status': -1, 'div': 'Onyx', 'research': false, 'img':"" },
          { 'id': 4, 'title': 'Project 4', 'status': 0, 'div': 'Titan', 'research': false, 'img':"Images/projectThumbnail.png" },
          { 'id': 5, 'title': 'Project 5', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"Images/projectThumbnail.png" },
          { 'id': 6, 'title': 'Project 6', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 7, 'title': 'Project 7', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 8, 'title': 'Project 8', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 9, 'title': 'Project 9', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 10, 'title': 'Project 10', 'status': 1, 'div': 'Alpha', 'research': true, 'img':"Images/projectThumbnail.png" },
          { 'id': 11, 'title': 'Project 11', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 12, 'title': 'Project 12', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 13, 'title': 'Project 13', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 14, 'title': 'Project 14', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 15, 'title': 'Project 15', 'status': 1, 'div': 'Alpha', 'research': true, 'img':"" },
          { 'id': 16, 'title': 'Project 16', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"Images/projectThumbnail.png" },
          { 'id': 17, 'title': 'Project 17', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 18, 'title': 'Project 18', 'status': 1, 'div': 'Alpha', 'research': false, 'img':"" },
          { 'id': 19, 'title': 'Project 19', 'status': 0, 'div': 'Beta', 'research': true, 'img':"Images/projectThumbnail.png" },
          { 'id': 20, 'title': 'Project 20', 'status': 1, 'div': 'Gamma', 'research': true, 'img':"" },
          { 'id': 20, 'title': 'Project 20', 'status': 1, 'div': 'Gamma', 'research': true, 'img':"" },
          { 'id': 20, 'title': 'Project 20', 'status': -1, 'div': 'Gamma', 'research': true, 'img':"" },
          { 'id': 20, 'title': 'Project 20', 'status': -1, 'div': 'Gamma', 'research': true, 'img':"" },
          { 'id': 20, 'title': 'Project 20', 'status': -1, 'div': 'Gamma', 'research': true, 'img':"" },
          { 'id': 20, 'title': 'Project 20', 'status': -1, 'div': 'Gamma', 'research': true, 'img':"" }
          ] -->
