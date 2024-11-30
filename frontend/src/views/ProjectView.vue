<script setup>
import AddButton from '@/components/AddButton.vue';
import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Title and Description (static content)
const title = "Cnast - mobile application app";
const desc = "Office ipsum you must be muted. Guys call caught offline happenings problem as want place. Next will is data it's. Idea can live weaponize options hard office native comms awareness. For hanging minimize like player-coach reference nor people asserts.";

// Timeline (reactive data using ref)
const tline = ref([
  { date: new Date("2024-04-13"), title: "Project started" },
  { date: new Date("2024-04-14"), title: "Design phase started" },
  { date: new Date("2024-04-15"), title: "Development phase started" },
  { date: new Date("2024-04-16"), title: "Testing phase started" },
  { date: new Date("2024-04-17"), title: "Project completed" }
]);

</script>

<template>
  <div class="min-h-screen min-w-screen bg-black text-white font-altone">
    <NavBar :name="'Sara Laufeyson'" :points="'512'" />

    <div class="flex flex-row-reverse justify-between px-6 md:pl-24 md:pr-16 py-6">
      <p @click="router.push('/dashboard')" class="h-fit cursor-pointer tracking-wide text-center select-none hover:underline active:text-white/80 transition-all duration-150">Back To Site</p>

      <div class="w-9/12">
        <h1 class="text-2xl font-bold py-4">{{ title }}</h1>
        <p>{{ desc }}</p>

        <div class="h-fit">
          <div class="flex justify-between items-end">
            <h2 class="text-2xl pt-8 pb-4 tracking-wider text-nowrap">Time-Line</h2>

            <AddButton />

          </div>

          <ul>
              <li 
              class=""
              v-for="(item, index) in tline" 
              :key="index">
              <div class="relative flex py-10">
                  <div 
                  class="w-10 h-10 rounded-full mr-4 z-10"
                  :style="{ background: 'linear-gradient(204.39deg, #2132BB 8.42%, #32E3F6 141.97%)' }">
                </div>
                <div class="text-lg">
                    <p>{{ item.title }}</p>
                    <p class="text-white/70">{{ item.date.getDate()+'/'+(item.date.getMonth()+1)+'/'+item.date.getFullYear() }}</p>
                </div>
                <div
                v-if="index !== tline.length - 1"
                class="absolute w-[1.5px] h-32 left-[20px] top-1/2 z-0 bg-[#7AE0F5]"></div>
            </div>
            </li>
        </ul>
    </div>
</div>
</div>
</div>
</template>