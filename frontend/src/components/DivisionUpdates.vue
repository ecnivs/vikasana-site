<script setup>
import DivUpdateTile from './DivUpdateTile.vue';


</script>

<template>
    <div class="mb-6 font-altone font-normal max:w-[390px] ">
          <h2 class="text-2xl ">Division Updates</h2>
          <div class="max:w-[380px] w-full mt-4 grid grid-rows-4 grid-flow-col grid-cols-[repeat(auto-fill,minmax(380px,1fr))] overflow-x-auto gap-6 snap-x snap-mandatory pb-10 custom-scrollbar scroll-smooth">
            <DivUpdateTile :title="'Proposal of new project'" :link="'Click here to know more'" />
            <DivUpdateTile :title="'New Hackathon coming up'" :link="'Click here to signup'" />
            <DivUpdateTile :title="'Workshop mania'" :link="'Click here to signup'" />
            <DivUpdateTile :title="'Welcome your new Head of research'" :link="'Click here to know more'" />
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