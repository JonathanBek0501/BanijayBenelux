<template>
    <button type="button" class="rounded-lg transition-all ease-in-out bg-transparent hover:bg-primary border border-primary hover:border-primary active:bg-primary text-sm font-medium text-primary hover:text-white py-2.5 px-5">
        {{ title }}
    </button>

    <!-- Additional Information -->
    <!-- <div class="fixed right-0 top-0 w-full z-50">
        <div class="h-screen flex flex-col max-w-4xl w-full bg-brand-gray ml-auto">
            <div class="flex items-center justify-between border-b border-brand-gray-600/40 py-5 pr-6 pl-8">
                <div class="flex items-center gap-4 text-lg">
                    <h4 class="text-white font-semibold">
                        Additional Information
                    </h4>
                    <p class="text-brand-gray-light">
                        of <span class="text-white">83</span> Files
                    </p>
                </div>
    
                <button type="button">
                    <img src="/close.svg" alt="">
                </button>
            </div>

            <div class="flex-1 py-2.5 overflow-y-auto">
                <div class="flex flex-col h-full overflow-y-auto pr-2.5 pl-5 mr-2">
                    <ul class="grid grid-cols-2 items-start gap-x-5 gap-y-3">
                        <li class="rounded-lg overflow-hidden border border-brand-gray-700">
                            <div class="flex items-center justify-between bg-[#202225] py-4 px-5">
                                <div class="flex items-center gap-3">
                                    <span class="text-white">
                                        flowbite-pro-v.2.2.0.m4a
                                    </span>
                                    <span class="text-sm text-brand-yellow rounded-md bg-brand-yellow/10 py-1 px-2.5">
                                        Pending
                                    </span>
                                </div>
                                <button>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.01475 9.5C5.69651 9.49993 5.39134 9.37723 5.16635 9.15886L0.366346 4.50174C0.251734 4.39434 0.160315 4.26586 0.0974242 4.12382C0.0345334 3.98177 0.00142989 3.82899 4.53085e-05 3.6744C-0.00133927 3.51981 0.0290225 3.36649 0.0893596 3.22341C0.149697 3.08032 0.2388 2.95033 0.351472 2.84101C0.464143 2.73169 0.598125 2.64524 0.745601 2.5867C0.893077 2.52816 1.05109 2.4987 1.21043 2.50004C1.36976 2.50139 1.52723 2.53351 1.67363 2.59452C1.82004 2.65554 1.95245 2.74424 2.06315 2.85544L6.01475 6.68942L9.96635 2.85544C10.1927 2.64336 10.4958 2.52601 10.8104 2.52866C11.1251 2.53131 11.426 2.65376 11.6485 2.86962C11.871 3.08549 11.9972 3.37751 12 3.68278C12.0027 3.98805 11.8817 4.28215 11.6631 4.50174L6.86314 9.15886C6.63815 9.37723 6.33298 9.49993 6.01475 9.5Z" fill="#9CA3AF"/>
                                    </svg>
                                </button>
                            </div>

                            <div class="bg-brand-input border-t border-brand-gray-700 space-y-5 p-5">
                                <form class="grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
                                    <div class="flex flex-col gap-2">
                                        <label for="title" class="font-medium text-white">
                                            Title
                                        </label>
                                        <input type="text" id="title" placeholder="Money, Money, Money" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="composer" class="font-medium text-white">
                                            Composer
                                        </label>
                                        <input type="text" id="composer" placeholder="Benny Anderson" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="album" class="font-medium text-white">
                                            Album
                                        </label>
                                        <input type="text" id="album" placeholder="ABBA Gold" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="publisher" class="font-medium text-white">
                                            Publisher
                                        </label>
                                        <input type="text" id="publisher" placeholder="Polar Music International" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="artist" class="font-medium text-white">
                                            Artist
                                        </label>
                                        <input type="text" id="artist" placeholder="ABBA" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="type" class="font-medium text-white">
                                            Type
                                        </label>
                                        <input type="text" id="type" placeholder="Music/ Library" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                    </div>
                                </form>

                                <div class="flex items-center gap-5">
                                    <ButtonPrimary title="Save" class="max-w-[128px] w-full text-xs !py-2" />
                                    <button type="button" class="flex items-center gap-1 font-medium text-red-600 text-xs text-left">
                                        <img src="/trash.svg" alt="trash icon">
                                        <span>
                                            Remove
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex gap-5 border-t border-brand-gray-600/40 py-7 px-12">
                <ButtonPrimary title="Save" class="max-w-[288px] w-full" />
                <button type="button" class="font-medium text-primary underline hover:no-underline text-left">
                    I’ll complete it later
                </button>
            </div>
        </div>
    </div> -->
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Cancel',
    }
})
</script>