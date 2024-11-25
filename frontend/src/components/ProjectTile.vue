<template>
<button class="bg-[#f3f3f3] text-black w-60 h-28 p-4 rounded-2xl text-left">
    <div class="flex items-center justify-end space-x-2">
        <div :class="{
            'bg-[#EE9090]': status == -1,
            'bg-[#FFA500]': status == 0,
            'bg-[#90EE90]': status == 1
        }" class="-mt-1 w-4 h-4 rounded-full"></div>
        <p class="font-semibold">{{ label }}</p>
    </div>
    <p class="text-lg">{{title}}</p>
    <p class="text-sm mt-2">{{div}} division</p>
</button>
</template>

<script>
export default {
    props: {
        title: String,
        status: Number,
        div: String
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
</script>