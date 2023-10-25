<template>
    <div>
        <HeaderLogbook />
            <main>
                <!-- Absolute shape -->
                <img class="absolute top-0 right-0 opacity-5 -z-10" src="/shape.svg" alt="">
                <slot />
            </main>
    </div>
</template>