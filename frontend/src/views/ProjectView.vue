<script setup>
import AddButton from '@/components/AddButton.vue';
import NavBar from '@/components/NavBar.vue';
import { useRouter,useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { fetchProjectDetails } from '@/stores/project'; // Update the import path as needed

const router = useRouter();
const projectId = useRoute().params.id // Replace with actual project ID or fetch dynamically
const title = ref('');
const desc = ref('');
const tline = ref([]);
const lead = ref(false);
const name = localStorage.getItem("name");
const points = localStorage.getItem("points");

// Fetch project details when the component is mounted
onMounted(async () => {
    try {
        const data = await fetchProjectDetails(projectId);
        title.value = data.title;
        desc.value = data.desc;
        tline.value = data.tline;
        lead.value = data.lead;
    } catch (error) {
        console.error("Error loading project details:", error);
    }
});
</script>

<template>
  <div class="min-h-screen min-w-screen bg-black text-white font-altone">
    <NavBar :name="name" :points="points" />

    <div class="flex flex-row-reverse justify-between px-6 md:pl-24 md:pr-16 py-6">
      <p @click="router.push('/dashboard')" class="h-fit cursor-pointer tracking-wide text-center select-none hover:underline active:text-white/80 transition-all duration-150">Back To Site</p>

      <div class="w-9/12">
        <h1 class="text-2xl font-bold py-4">{{ title }}</h1>
        <p>{{ desc }}</p>

        <div class="h-fit">
          <div class="flex justify-between items-end">
            <h2 class="text-2xl pt-8 pb-4 tracking-wider text-nowrap">Time-Line</h2>

            <AddButton :options="[{label: 'Update', link: `${projectId}/update/${title}`}, lead?{label: 'View Updates', link: '/updates'}:null].filter(Boolean)" />

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
                    <p class="text-white/70">{{ item.date }}</p>
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