<template>
    <div class="relative h-screen">
        <!-- Absolute shape -->
        <img class="absolute top-0 right-0 opacity-5 -z-10" src="/shape.svg" alt="">

        <div class="relative px-16 h-full">
            <div class="pt-[14%]">
                <div class="flex gap-24 ml-5">
                    <div class="max-w-[394px] w-full h-fit divide-y divide-brand-gray-700 rounded-lg border text-white border-brand-gray-700 bg-brand-gray">
                        <div class="p-6">
                            <p class="font-semibold text-lg">
                                Login your Account
                            </p>
                        </div>

                        <div class="space-y-4 p-6">
                            <div class="space-y-2.5 text-sm">
                                <label for="email" class="text-white">
                                    Email
                                </label>
                                <input type="email" id="email" placeholder="name@example.com" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                            </div>
                            <div class="space-y-2.5 text-sm">
                                <label for="password" class="text-white">
                                    Password
                                </label>
                                <input type="password" id="password" placeholder="••••••••••" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                            </div>

                            <button @click="login" type="button" class="w-full rounded-lg transition-all ease-in-out bg-primary hover:bg-transparent border border-transparent hover:border-primary active:bg-primary text-sm font-medium text-white py-2.5 px-5">
                                Login
                            </button>
                        </div>
                    </div>

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
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'logbook',
});

// Define the login function to navigate to the /logbook route
const login = () => {
  // Use the `useRouter` hook to get the router instance and navigate to the /logbook route
  const router = useRouter();
  router.push('/logbook');
};
</script>