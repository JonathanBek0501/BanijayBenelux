<template>
    <div class="w-full text-white bg-brand-gray rounded-lg overflow-hidden">
        <div class="p-4">
            <div class="flex items-center justify-between border-b border-brand-gray-700 pb-4">
                <div class="flex items-center gap-2">
                    <h5 class="font-semibold">
                        The Crepes of Wrath
                    </h5>

                    <div class="text-brand-gray-400 hover:text-white transition-all ease-in-out cursor-pointer">
                        <IconInfo />
                    </div>
                </div>

                <div class="flex gap-4">
                    <button type="button" class="flex items-center gap-2 rounded-lg transition-all ease-in-out bg-brand-gray-800 hover:bg-transparent border border-brand-gray-600 hover:text-white active:bg-brand-gray-800 text-sm font-medium text-brand-gray-400 py-2 px-3">
                        <IconFileExport />
                        <span>
                            Export
                        </span>
                    </button>
                    <button type="button" class="w-25 rounded-lg transition-all ease-in-out bg-primary hover:bg-transparent border border-transparent hover:border-primary active:bg-primary text-sm font-medium text-white py-2 px-3">
                        Save
                    </button>
                </div>
            </div>

            <div class="max-w-[80%] grid grid-cols-3 gap-x-16 gap-y-3 text-sm pt-4 px-8">
                <div class="flex flex-col gap-2">
                    <label for="logbookCode" class="font-medium text-white">
                        Logbook Code
                    </label>
                    <input type="text" id="logbookCode" placeholder="BLO1_AFL1" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="epizode" class="font-medium text-white">
                        Episode
                    </label>
                    <input type="text" id="epizode" placeholder="01" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="status" class="font-medium text-white">
                        Status
                    </label>
                    <div class="flex items-center justify-between cursor-pointer w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                        <span class="text-sm">
                            Actual
                        </span>
                        <IconChevronDown class="w-3 h-3" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="broadcastDate" class="font-medium text-white">
                        Broadcast Date
                    </label>
                    <input type="text" id="broadcastDate" placeholder="9 September 2023" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="show" class="font-medium text-white">
                        Show
                    </label>
                    <div class="flex items-center justify-between cursor-pointer w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                        <span class="text-sm">
                            Actual
                        </span>
                        <IconChevronDown class="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>

        <table class="w-full text-sm text-left whitespace-nowrap">
            <thead>
                <tr>
                    <th scope="col" class="w-12"></th>
                    <th scope="col"></th>
                    <th scope="col" class="w-full"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(table, index) in tables" :key="index">
                    <tr class="transition-all ease-in-out duration-300 border-b border-brand-gray-600">
                        <td scope="row" class="py-3 px-4">
                            <input
                                type="checkbox"
                                class="appearance-none w-4 h-4 rounded bg-brand-gray-700 checked:bg-primary checked:border-primary checked:bg-tick bg-center bg-no-repeat border-[0.5px] border-brand-gray-600"
                            >
                        </td>
                        <td class="py-2 px-4">
                            <div class="flex items-center gap-2.5 text-sm">
                                <div class="w-10 h-10 rounded-lg overflow-hidden">
                                    <img src="/epizode.png" class="w-full h-full object-cover"/>
                                </div>
                                <div class="">
                                    <p class="text-white">
                                        Final Fantasy
                                        <span class="opacity-50">
                                            (1)
                                        </span>
                                    </p>
                                    <span class="opacity-50">
                                        Earcandy
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td class="p-4">
                            <div class="flex items-center justify-end gap-1.5">
                                <button class="p-1">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1148 5.67063L3.36171 0.212139C3.13922 0.0742512 2.88671 0.00110465 2.62942 1.24141e-05C2.37213 -0.00107982 2.11909 0.0699204 1.89557 0.205915C1.67358 0.338909 1.48893 0.53281 1.36075 0.76754C1.23256 1.00227 1.1655 1.2693 1.16652 1.54097V12.458C1.1655 12.7296 1.23256 12.9967 1.36075 13.2314C1.48893 13.4661 1.67358 13.66 1.89557 13.793C2.11901 13.9297 2.37226 14.0011 2.62979 14C2.88732 13.9989 3.14003 13.9254 3.36244 13.7868L12.1162 8.3283C12.3343 8.19319 12.5153 7.99934 12.6411 7.76613C12.7669 7.53293 12.8332 7.26856 12.8332 6.99947C12.8332 6.73038 12.7669 6.466 12.6411 6.2328C12.5153 5.9996 12.3343 5.80574 12.1162 5.67063H12.1148Z" fill="#FF4370"/>
                                    </svg>
                                </button>
                                <button class="p-1">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.3335 12.1667V13.8333C1.3335 14.2754 1.50909 14.6993 1.82165 15.0118C2.13421 15.3244 2.55814 15.5 3.00016 15.5H13.0002C13.4422 15.5 13.8661 15.3244 14.1787 15.0118C14.4912 14.6993 14.6668 14.2754 14.6668 13.8333V12.1667" stroke="#FF4370" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.8335 7.16667L8.00016 11.3333L12.1668 7.16667" stroke="#FF4370" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 1.33333V11.3333" stroke="#FF4370" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <span>
                                    2:03
                                </span>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            <button @click="table.open = !table.open">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#1F1F1F"/>
                                <path d="M20.4 15.6C21.2837 15.6 22 14.8837 22 14C22 13.1163 21.2837 12.4 20.4 12.4C19.5163 12.4 18.8 13.1163 18.8 14C18.8 14.8837 19.5163 15.6 20.4 15.6Z" fill="white"/>
                                <path d="M14 15.6C14.8837 15.6 15.6 14.8837 15.6 14C15.6 13.1163 14.8837 12.4 14 12.4C13.1163 12.4 12.4 13.1163 12.4 14C12.4 14.8837 13.1163 15.6 14 15.6Z" fill="white"/>
                                <path d="M7.6 15.6C8.48366 15.6 9.2 14.8837 9.2 14C9.2 13.1163 8.48366 12.4 7.6 12.4C6.71634 12.4 6 13.1163 6 14C6 14.8837 6.71634 15.6 7.6 15.6Z" fill="white"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <!-- Dropdown table -->
                    <transition name="expandTable">
                        <tr v-if="table.open">
                            <td class="pt-5 pr-10 pb-1 pl-12" colspan="4">
                                <div class="space-y-2.5">
                                    <div class="flex items-center justify-center gap-8">
                                        <span class="text-sm text-white">
                                            Unknown Music
                                        </span>
                                        <img src="/audio.svg" alt="audioSVG">
                                    </div>

                                    <div class="flex items-start gap-8 rounded-lg bg-brand-gray-800 p-5">
                                        <div class="max-w-[55%] shrink-0 w-full grid grid-cols-2 gap-x-10 gap-y-3 gap-10">
                                            <div class="flex flex-col gap-2">
                                                <label for="title" class="font-medium text-white">
                                                    Title
                                                </label>
                                                <input type="text" id="title" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="artist" class="font-medium text-white">
                                                    Artist
                                                </label>
                                                <input type="text" id="artist" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="album" class="font-medium text-white">
                                                    Album
                                                </label>
                                                <input type="text" id="album" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="records" class="font-medium text-white">
                                                    Records
                                                </label>
                                                <input type="text" id="records" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="composer" class="font-medium text-white">
                                                    Composer
                                                </label>
                                                <input type="text" id="composer" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="ISRC" class="font-medium text-white">
                                                    ISRC
                                                </label>
                                                <input type="text" id="ISRC" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <label for="publisher" class="font-medium text-white">
                                                    Publisher
                                                </label>
                                                <input type="text" id="publisher" placeholder="--" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                            </div>

                                            <div class="col-span-2 flex gap-5 pt-2">
                                                <ButtonPrimary title="Save" class="!py-2 w-24" />
                                                <ButtonOutline title="Discard" class="w-24" />
                                            </div>
                                        </div>

                                        <div class="space-y-2.5 w-full rounded-lg bg-brand-input border border-brand-gray-400/40 py-3 px-4">
                                            <span class="text-sm text-white">
                                                Spotify
                                            </span>
                                            <div class="flex gap-2.5">
                                                <input type="text" id="title" placeholder="Text" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                                                <ButtonPrimary title="Search"/>
                                            </div>
                                            <div class="space-y-2.5 max-h-56 overflow-y-auto">
                                                <div v-for="(music, index) in musics" :key="index" class="flex items-center justify-between font-medium border-b border-brand-gray-400/40 pb-2">
                                                    <div class="space-y-1">
                                                        <span class="block text-sm">
                                                            {{ music.title }}
                                                        </span>
                                                        <div>
                                                            <span class="block text-xs text-white/50">
                                                                {{ music.artist }}
                                                            </span>
                                                            <span class="block text-xs text-white/50">
                                                                {{ music.version }}
                                                            </span>
                                                        </div>
                                                    </div>
    
                                                    <ButtonOutline title="Select"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </transition>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const tables = ref([
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
        {
            title: 'Final Fantasy',
            subTitle: 'Earcandy',
            number: 1,
            open: false,
            selected: false
        },
    ])

    const musics = ref([
        {
            title: 'Happy - Live',
            artist: 'Pharrell Williams',
            version: 'Happy (Live), 2014',
        },
        {
            title: 'Happy - Live',
            artist: 'Pharrell Williams',
            version: 'Happy (Live), 2014',
        },
        {
            title: 'Happy - Live',
            artist: 'Pharrell Williams',
            version: 'Happy (Live), 2014',
        }
    ])
</script>