<template>
    <header>
        <div class="absolute left-1/2 -translate-x-1/2 top-0 w-full flex items-center justify-between py-7 px-16 z-10">
            <img src="/logo.svg" alt="Logo">
    
            <div class="flex text-white font-sen leading-5 rounded-lg border border-brand-gray-700 bg-brand-gray py-2.5 px-5">
                <a href="#" class="py-2.5 px-3.5">
                    About Us
                </a>
                <a href="#" class="py-2.5 px-3.5">
                    Case Studies
                </a>
                <a @click="toggleSideBar" href="#" class="py-2.5 px-3.5">
                    Help
                </a>
                <a href="#" class="py-2.5 px-3.5">
                    FAQs
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
const toggleSideBar = inject('toggleSideBar');
</script>