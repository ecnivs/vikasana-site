<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
        id: Number,
        title: String,
        name: String,
        img: String,
    });
</script>

<template>
<div class="bg-[#f3f3f3] select-none text-black w-64 h-fit p-4 flex flex-col justify-between rounded-2xl text-left snap-start snap-always">
    <div class="flex items-center justify-end self-end space-x-2">
        <div class="bg-[#FFA500] -mt-1 w-4 h-4 rounded-full"></div>
        <p class="font-semibold">Ongoing</p>
    </div>
    <img :src="props.img" draggable="false" class="w-full min-h-0 max-h-40 my-3 object-cover" >
    <div>
        <p class="text-lg">{{props.title}}</p>
        <div class="flex items-center justify-between">
            <p class="text-xs mt-2 text-left">{{ props.name }} updates</p>
            <p class="text-xs mt-2 hover:cursor-pointer hover:underline underline-offset-2 text-right" @click="router.push('/updates/verify')">View more></p>
        </div>
    </div>
</div>
</template>