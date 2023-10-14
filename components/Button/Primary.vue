<template>
    <button type="button" class="rounded-lg transition-all ease-in-out bg-primary hover:bg-transparent border border-transparent hover:border-primary active:bg-primary text-sm font-medium text-white py-2.5 px-5">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String
})
</script>