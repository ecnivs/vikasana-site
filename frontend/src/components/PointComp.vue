
<template>
<div class="min-w-fit h-10 p-[1px] rounded-full bg-gradient-to-b from-[#7AE0F5] to-[#9F5EFA] bg-clip-border">
    <div class="flex gap-1 place-content-between size-[100%] pt-2 pb-1 px-2 rounded-full bg-stone-900 shadow-[0_4px_4px_rgba(0,_0,_0,_0.25),_inset_0_2px_3px_2px_rgba(153,_153,_153,_0.25)]">
        <img src="/images/trophy-outline.svg" class="h-full" >
        <p class="mx-3 bg-gradient-to-b from-[#7AE0F5] to-[#9F5EFA] bg-clip-text text-transparent">
            {{points}}
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        points : String
    }
}
</script>