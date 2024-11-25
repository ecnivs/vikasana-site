<script setup>
import DivUpdateTile from './DivUpdateTile.vue';


</script>

<template>
    <div class="mb-6 font-altone font-normal w-96">
          <h2 class="text-2xl ">Division Updates</h2>
          <div class="w-[380px] mt-4 grid grid-rows-4 grid-flow-col overflow-x-auto gap-6 snap-x snap-mandatory pb-10 custom-scrollbar">
            <DivUpdateTile :title="'Proposal of new project'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'New Hackathon coming up'" :link="'Click here to signup'" />
            <DivUpdateTile :title="'Workshop mania'" :link="'Click here to signup'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
          </div>
        </div>
</template>

<script>
export default {
    name: "DivisionUpdates"
}
</script>