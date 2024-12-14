<script setup>
import { useDivUpdateStore } from '@/stores/divUpdates';
import DivUpdateTile from './DivUpdateTile.vue';
import { onMounted } from 'vue';


const divUpdateStore = useDivUpdateStore();
onMounted(()=> {
  divUpdateStore.fetchUpdates();
})


</script>

<template>
    <div class="mb-6 font-altone font-normal max:w-[390px] ">
          <h2 class="text-2xl ">Division Updates</h2>
          <div class="max:w-[380px] w-full mt-4 grid grid-rows-4 grid-flow-col grid-cols-[repeat(auto-fill,minmax(380px,1fr))] overflow-x-auto gap-6 snap-x snap-mandatory pb-10 custom-scrollbar scroll-smooth">
            <DivUpdateTile v-for="update in divUpdateStore.updates" :key="update.key" :title="update.title" :linkText="update.linkText" :link="update.link"/>
          </div>
        </div>
</template>