<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
        title: String,
        status: Number,
        div: String,
        img: String,
        research: Boolean
    })

const label = computed(() => {
            switch (props.status) {
                case -1: return 'Yet To Start';
                case 0: return 'Ongoing';
                case 1: return 'Completed';
                default: return 'NA';
            }
        })
</script>

<template>
<button class="bg-[#f3f3f3] select-none text-black w-64 h-fit p-4 flex flex-col justify-between rounded-2xl text-left snap-start snap-always">
    <div class="flex items-center justify-end self-end space-x-2">
        <div :class="{
            'bg-[#EE9090]': status == -1,
            'bg-[#FFA500]': status == 0,
            'bg-[#90EE90]': status == 1
        }" class="-mt-1 w-4 h-4 rounded-full"></div>
        <p class="font-semibold">{{ label }}</p>
    </div>
    <img :src="img" draggable="false" class="w-full min-h-0 max-h-40 my-3 object-cover" >
    <div>
        <p class="text-lg">{{title}}</p>
        <p class="text-sm mt-2">{{div}} division</p>
    </div>
</button>
</template>

<!-- <script>
export default {
    props: {
        title: String,
        status: Number,
        div: String,
        img: String,
        research: Boolean
    },
    computed: {
        label() {
            switch (this.status) {
                case -1: return 'Yet To Start';
                case 0: return 'Ongoing';
                case 1: return 'Completed';
                default: return 'NA';
            }
        }
    }
}
</script> -->