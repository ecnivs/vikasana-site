<script setup>
import DivisionUpdates from '@/components/DivisionUpdates.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectTile from '@/components/ProjectTile.vue';

</script>

<template>
    <div class="min-h-screen bg-black text-white font-sans">
      <!-- Navbar -->
      <Navbar />
  
      <!-- Main Content -->
      <div class="px-6 md:px-24 py-6 font-altone">
        <!-- Banner -->
        <div class="mb-8 sm:grid sm:grid-cols-3 gap-4">
          <div class="bg-gray-800 h-96 col-span-2 rounded-lg p-6 mb-8">
            <h1 class="text-2xl font-bold">TECH FUTURE</h1>
            <p class="text-sm mt-2">5 trends that will change the world</p>
          </div>
          <!-- Division Updates -->
          
          <DivisionUpdates class="row-span-2 custom-scrollbar" />
          
        <!-- Projects -->
        <div class="col-span-2">
          <h2 class="text-2xl mb-4">Assigned to You</h2>
          <div class="flex">
            <div class="py-2 grid grid-rows-2 grid-flow-col overflow-x-auto gap-10 custom-scrollbar snap-x snap-mandatory" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));">
              <ProjectTile class="snap-start snap-always" :title="'1Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'2Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'3Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'4Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'5Cnat'" :status="1" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'6Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'7Cnat'" :status="0" :div="'Onyx'"/>
              <ProjectTile class="snap-start snap-always" :title="'8Cnat'" :status="0" :div="'Onyx'"/>
            </div>

            <button class="h-32 md:h-20 -mt-16 md:-mt-11 mx-5 md:mx-16">
              <img src="/images/add b.svg" class="h-full" >
            </button>
          </div>
        </div>
      </div>
  
        <div class="mt-8">
          <h2 class="text-2xl mb-4">Completed Projects</h2>
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-gray-800 p-4 rounded">
              <p class="text-sm">Project Thumbnail</p>
              <p class="text-xs mt-2 text-gray-400">Completed</p>
            </div>
            <!-- Add more completed projects -->
          </div>
        </div>
  
        <div class="mt-8">
          <h2 class="text-2xl mb-4">Document Archives/Research</h2>
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-gray-800 p-4 rounded">
              <p class="text-sm">Project Thumbnail</p>
              <p class="text-xs mt-2 text-gray-400">Yet to Start</p>
            </div>
            <!-- Add more archives -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
  </script>
  
<style scoped>
</style>
