<script setup>
import { ref } from 'vue';

const toggleMenu = ref(false)
</script>

<template>
    <button class="relative min-w-16 w-24 h-fit" @click="toggleMenu =! toggleMenu">
    <img src="/images/add b.svg" class="h-full" />
        
        <div class="absolute right-0 md:left-0 w-36 rounded-xl bg-gradient-to-b from-[#32E3F6] to-[#8025F8] shadow-lg focus:outline-none transition-all duration-300 "
        :class="{
            'z-10': toggleMenu,
            'mt-0': !toggleMenu,
            'mt-2': toggleMenu,
            'opacity-0': !toggleMenu,
            'opacity-100': toggleMenu
        }">
            <div class="rounded-xl bg-clip-padding bg-black border-transparent border-2 text-left">
                <a class="block px-4 py-2 text-white hover:bg-white/10">Update</a>
                <div class="border mx-4"></div>
                <a class="block px-4 py-2 text-white hover:bg-white/10">New Project</a>
            </div>
        </div>
    </button>
</template>