<script setup>
import Points from './Points.vue';

</script>

<template>
    <nav class="flex justify-between items-center px-8 sm:px-8 py-4 border-b border-gray-800">
        <div class="mt-3 min-w-40 size-1/4 md:size-2/12"><img src="/images/logo.svg" class="text-lg font-bold"></div>
        <div class="flex flex-col-reverse sm:flex-row items-center space-x-4 font-altone text-lg text-center">
          <p>Welcome <span class="text-[#32E3F6]">Sara Laufeyson</span></p>
          <Points :points="512" />

        </div>
      </nav>
</template>

<script>
</script>