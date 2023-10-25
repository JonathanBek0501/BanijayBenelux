<template>
    <div>
        <Header :toggleSideBar="toggleSideBar" />
            <main>
                <!-- Absolute shape -->
                <img class="absolute top-0 right-0 opacity-5 -z-10" src="/shape.svg" alt="">
                <slot />
            </main>
        <Footer />

        <transition name="slide" mode="out-in">
            <SideBar v-if="sideBar" :toggleSideBar="toggleSideBar" />
        </transition>
    </div>
</template>

<script setup>
const sideBar = ref(false);

const toggleSideBar = () => {
    sideBar.value = !sideBar.value;
}

provide('toggleSideBar', toggleSideBar);
</script>