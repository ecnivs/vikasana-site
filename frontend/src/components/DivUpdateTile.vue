<template>
    <button class="w-[360px] sm:w-[370px] md:w-[380px] min-h-32 h-fit select-none text-left border border-[#f3f3f3] rounded-2xl p-4 pb-10 text-wrap snap-always snap-start">
        <p class="text-xl text-[#32E3F6]">{{title}}</p>
        <a :href="link" target="_blank"><p class="text-white">{{linkText}}</p></a>
    </button>
</template>

<script>
export default {
    props: {
        title: String,
        linkText: String,
        link: String
    }
}
</script>