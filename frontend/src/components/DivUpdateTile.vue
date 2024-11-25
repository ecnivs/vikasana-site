<template>
    <button class="w-[380px] min-h-32 h-fit text-left border border-[#f3f3f3] rounded-2xl p-4 pb-10 text-wrap snap-always snap-start">
        <p class="text-xl text-[#32E3F6]">{{title}}</p>
        <p class="text-white">{{link}}</p>
    </button>
</template>

<script>
export default {
    props: {
        title: String,
        link: String
    }
}
</script>