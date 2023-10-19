<template>
    <button type="button" class="rounded-lg transition-all ease-in-out bg-transparent hover:bg-primary border border-primary hover:border-primary active:bg-primary text-sm font-medium text-primary hover:text-white py-2.5 px-5">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Cancel',
    }
})
</script>