<template>
    <div>
        <Header :toggleSideBar="toggleSideBar" />
            <main>
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