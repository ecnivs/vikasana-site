<script setup>
import DivisionUpdates from '@/components/DivisionUpdates.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectTile from '@/components/ProjectTile.vue';

</script>

<template>
    <div class="min-h-screen min-w-screen bg-black text-white font-sans">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Main Content -->
      <div class="px-6 md:pl-24 md:pr-16 py-6 font-altone">
        <!-- Banner -->
        <div class="mb-8 md:grid md:grid-cols-3 gap-4">
          <div class="bg-gray-800 h-96 col-span-2 rounded-lg p-6 mb-8">
            <h1 class="text-2xl font-bold">TECH FUTURE</h1>
            <p class="text-sm mt-2">5 trends that will change the world</p>
          </div>
          <!-- Division Updates -->
          
          <DivisionUpdates class="row-span-2 custom-scrollbar" />
          
          <!-- Projects -->
          <div class="col-span-2">
            <h2 class="text-2xl mb-4">Assigned to You</h2>
            <div class="flex justify-between items-start">
              <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[15vw] sm:gap-x-[2vw] md:gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory">
                <ProjectTile v-for="project in ongoing" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img"/>
                <ProjectTile v-for="project in yetToStart" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img"/>
              </div>
              <button class="min-w-20 -mt-12 md:-mt-11 mx-5 md:mx-16">
                <img src="/images/add b.svg" class="h-full" >
              </button>
            </div>
          </div>
        </div>
  
        <div class="mt-8 w-full">
          <h2 class="text-2xl mb-4">Completed Projects</h2>
          <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory" >
              <ProjectTile v-for="project in completed" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img"/>
          </div>
        </div>
  
        
        <div class="mt-8">
          <h2 class="text-2xl mb-4">Document Archives/Research</h2>
          <div class="min-w-64 h-[360px] py-2 flex flex-col flex-wrap overflow-x-auto gap-x-[4vw] gap-y-5 custom-scrollbar snap-x snap-mandatory" >
              <ProjectTile v-for="project in research" :key="project.id" :title="project.title" :status="project.status" :div="project.div" :img="project.img"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
    data() {
      return {
        // Example projects data from the server
        projects: [
          { id: 1, title: 'Project 1', status: -1, div: 'Onyx', research: false, img:"" },
          { id: 2, title: 'Project 2', status: -1, div: 'Onyx', research: false, img:"" },
          { id: 3, title: 'Project 3', status: -1, div: 'Onyx', research: false, img:"" },
          { id: 4, title: 'Project 4', status: 0, div: 'Titan', research: false, img:"Images/projectThumbnail.png" },
          { id: 5, title: 'Project 5', status: 1, div: 'Alpha', research: false, img:"Images/projectThumbnail.png" },
          { id: 6, title: 'Project 6', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 7, title: 'Project 7', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 8, title: 'Project 8', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 9, title: 'Project 9', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 10, title: 'Project 10', status: 1, div: 'Alpha', research: true, img:"Images/projectThumbnail.png" },
          { id: 11, title: 'Project 11', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 12, title: 'Project 12', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 13, title: 'Project 13', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 14, title: 'Project 14', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 15, title: 'Project 15', status: 1, div: 'Alpha', research: true, img:"" },
          { id: 16, title: 'Project 16', status: 1, div: 'Alpha', research: false, img:"Images/projectThumbnail.png" },
          { id: 17, title: 'Project 17', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 18, title: 'Project 18', status: 1, div: 'Alpha', research: false, img:"" },
          { id: 19, title: 'Project 19', status: 0, div: 'Beta', research: true, img:"Images/projectThumbnail.png" },
          { id: 20, title: 'Project 20', status: 1, div: 'Gamma', research: true, img:"" },
          { id: 20, title: 'Project 20', status: 1, div: 'Gamma', research: true, img:"" },
          { id: 20, title: 'Project 20', status: -1, div: 'Gamma', research: true, img:"" },
          { id: 20, title: 'Project 20', status: -1, div: 'Gamma', research: true, img:"" },
          { id: 20, title: 'Project 20', status: -1, div: 'Gamma', research: true, img:"" },
          { id: 20, title: 'Project 20', status: -1, div: 'Gamma', research: true, img:"" }
        ]
      };
    },

    computed: {
      // Segregate projects based on their status
      yetToStart() {
        return this.projects.filter(project => project.status === -1 && project.research === false);
      },
      ongoing() {
        return this.projects.filter(project => project.status === 0 && project.research === false);
      },
      completed() {
        return this.projects.filter(project => project.status === 1 && project.research === false);
      },
      research() {
        return this.projects.filter(project => project.research === true);
      }
    }
  };
  </script>
  
<style scoped>
</style>
