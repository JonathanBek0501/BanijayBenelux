<template>
    <div class="fixed right-0 top-0 h-screen max-w-brandLg w-full bg-brand-gray p-5 z-50">
        <div class="space-y-12">
            <h3 class="text-3xl font-extrabold text-white px-1">
                Help
            </h3>

            <div class="space-y-6">
                <div class="space-y-8">
                    <div class="flex items-center justify-between text-brand-gray-400 text-sm border-b border-brand-gray-600 pb-3">
                        <span>
                            Account Login & Recovery
                        </span>
                        <IconChevronDown />
                    </div>
                    <div class="flex items-center justify-between text-brand-gray-400 text-sm border-b border-brand-gray-600 pb-3">
                        <span>
                            Account Access
                        </span>
                        <IconChevronDown />
                    </div>
                </div>

                <div class="space-y-5">
                    <h4 class="text-xl font-bold text-white">
                        Popular guides & tutorials
                    </h4>

                    <div class="space-y-3">
                        <a v-for="(link, index) in links" :key="index" href="#" class="block font-semibold text-primary-dark">
                            {{ link.title }}
                        </a>
                    </div>
                </div>
            </div>

            <form class="space-y-6">
                <h4 class="text-xl font-bold text-white">
                    Didn't find what you're looking for?
                </h4>

                <input type="text" id="name" placeholder="Your Name" class="w-full h-12 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                <input type="email" id="email" placeholder="name@example.com" class="w-full h-12 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">

                <ButtonPrimary title="Submit"/>
            </form>
        </div>

        <!-- Close button -->
        <button type="button" @click="toggleSideBar" class="absolute right-5 top-6">
            <img src="/close.svg" alt="">
        </button>
    </div>
</template>

<script setup>
const toggleSideBar = inject('toggleSideBar');
const links = ref([
    {
        title: "I Can't Log In",
        href: ""
    },
    {
        title: "Recover Username or Reset Password",
        href: ""
    },
    {
        title: "I Think My Account Has Been Compromised",
        href: ""
    },
    {
        title: "Troubleshoot the Signup Activation Email",
        href: ""
    },
    {
        title: "Manage Account Login and Profile",
        href: ""
    },
    {
        title: "Set Account Security Options",
        href: ""
    },
])
</script>

<style scoped>

</style>