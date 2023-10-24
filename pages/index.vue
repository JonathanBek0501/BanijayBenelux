<template>
    <Header :toggleSideBar="toggleSideBar" />

    <main class="relative h-screen">
        <!-- Absolute shape -->
        <img class="absolute top-0 right-0 opacity-5 -z-10" src="/shape.svg" alt="">

        <div class="relative px-16 h-full">
            <div class="pt-[14%]">
                <div class="flex gap-24 ml-5">
                    <UploadPanel />
    
                    <div class="text-white space-y-5 mt-11">
                        <span class="block text-[26px] leading-10">
                            #WeAreBanijay
                        </span>
    
                        <h1 class="text-8xl font-bold">
                            Banijay <span class="text-primary">Benelux</span>
                        </h1>
    
                        <span class="block text-[25px] leading-9">
                            De meest complete
                            <br>
                            content producent.
                        </span>
                    </div>
                </div>
            </div>
    
            <!-- Absolute -->
            <div class="absolute bottom-0 right-14 -z-10">
                <img src="/company-workers.png" alt="">
            </div>
        </div>

        <transition name="slide" mode="out-in">
            <SideBar v-if="sideBar" :toggleSideBar="toggleSideBar" />
        </transition>
    </main>

    <Footer />
</template>

<script setup>
const sideBar = ref(false);

const toggleSideBar = () => {
    sideBar.value = !sideBar.value;
}

provide('toggleSideBar', toggleSideBar);
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); /* Start position off-screen */
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0); /* End position on-screen */
}
</style>