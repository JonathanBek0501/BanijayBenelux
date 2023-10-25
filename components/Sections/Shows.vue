<template>
    <div class="w-full text-white bg-brand-gray rounded-lg overflow-hidden">
        <div class="divide-y divide-brand-gray-700 p-4">
            <div class="flex items-center justify-between pb-4">
                <div class="flex items-center gap-2">
                <h5 class="font-semibold">
                    Show List
                </h5>
                <span class="font-medium text-brand-gray-400">
                    6,560 results
                </span>

                <div class="text-brand-gray-400 hover:text-white transition-all ease-in-out cursor-pointer">
                    <IconInfo />
                </div>
                </div>

                <div class="flex gap-4">
                <button v-if="isExportButtonVisible" type="button" class="flex items-center gap-2 rounded-lg transition-all ease-in-out bg-brand-gray-800 hover:bg-transparent border border-brand-gray-600 hover:text-white active:bg-brand-gray-800 text-sm font-medium text-brand-gray-400 py-2 px-3">
                    <IconFileExport />
                    <span>
                    Export
                    </span>
                </button>
                <button type="button" class="flex items-center gap-2 rounded-lg transition-all ease-in-out bg-primary hover:bg-transparent border border-transparent hover:border-primary active:bg-primary text-sm font-medium text-white py-2 px-3">
                    <IconPlus />
                    <span>
                    Add new Show
                    </span>
                </button>
                </div>
            </div>

            <div class="pt-4">
                <div class="relative max-w-sm 2xl:max-w-[28%] w-full h-9">
                <input type="search" class="w-full h-9 rounded-lg border border-brand-gray-600/30 text-sm text-brand-gray-400 bg-brand-input pl-11 pr-4 py-2" placeholder="Search">
                <IconSearch class="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none" />
                </div>
            </div>
        </div>

        <table class="w-full text-sm text-left whitespace-nowrap">
            <thead class="text-xs text-brand-gray-400 uppercase bg-brand-gray-800 border-b border-brand-gray-600">
                <tr>
                    <th scope="col" class="uppercase font-semibold p-4">
                        Show Name
                    </th>
                    <th scope="col" class="font-semibold p-4">
                        <div class="uppercase flex items-center">
                            no of Episodes
                            <img src="/icons/selector.svg" alt="">
                        </div>
                    </th>
                    <th scope="col" class="font-semibold p-4">
                        <div class="uppercase flex items-center">
                            Show Code
                            <img src="/icons/selector.svg" alt="">
                        </div>
                    </th>
                    <th scope="col" class="font-semibold p-4">
                        <div class="uppercase flex items-center">
                            Status
                            <img src="/icons/selector.svg" alt="">
                        </div>
                    </th>
                    <th scope="col" class="p-4">
                        <span class="sr-only">goToDetails</span>
                    </th>
                </tr>
            </thead>

            <tbody>
                <template v-for="(table, index) in tables" :key="index">
                    <tr class="transition-all ease-in-out duration-300 border-b border-brand-gray-600">
                        <td scope="row" class="font-medium p-4">
                            <div class="flex items-center gap-8">
                                <input
                                    v-model="table.selected" @change="updateExportButtonVisibility"
                                    type="checkbox"
                                    class="appearance-none w-4 h-4 rounded bg-brand-gray-700 checked:bg-primary checked:border-primary checked:bg-tick bg-center bg-no-repeat border-[0.5px] border-brand-gray-600"
                                    >
                                <span>
                                    {{ table.showName }}
                                </span>
                            </div>
                        </td>
                        <td class="p-4">
                            {{ table.numberOfEpizodes }}
                        </td>
                        <td class="p-4">
                            {{ table.showCode }}
                        </td>
                        <td class="p-4">
                            <div
                            :class="{
                                'border-brand-green-400 text-brand-green-400 bg-brand-green-400/5': table.status === 'Completed',
                                'border-brand-red text-brand-red bg-brand-red/5': table.status === 'Not Completed',
                                'border-brand-yellow text-brand-yellow bg-brand-yellow/5': table.status === 'Waiting For Review'
                            }"
                            class="w-fit font-medium rounded-md border py-0.5 px-2.5">
                                {{ table.status }}
                            </div>
                        </td>
                        <td class="p-4">
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
                            <td class="px-10 pt-4" colspan="5">
                                <div class="shadow-md sm:rounded-lg overflow-hidden border border-brand-gray-600">
                                    <table class="w-full text-sm text-left whitespace-nowrap">
                                        <thead class="text-xs uppercase bg-brand-gray-800 border-brand-gray-600">
                                            <tr>
                                                <th scope="col" class="uppercase font-semibold p-4">
                                                    Episode Code
                                                </th>
                                                <th scope="col" class="uppercase font-semibold p-4">
                                                    Episode Names
                                                </th>
                                                <th scope="col" class="uppercase font-semibold p-4">
                                                    No of Tracks
                                                </th>
                                                <th scope="col" class="uppercase font-semibold p-4">
                                                    Status
                                                </th>
                                                <th scope="col" class="p-4">
                                                    <span class="sr-only">Functions</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <template v-for="(subTable, index) in table.subTables" :key="index">
                                                <tr class="border-b border-brand-gray-600">
                                                    <td class="font-medium py-3 px-4">
                                                        {{ subTable.epizodeCode }}
                                                    </td>
                                                    <td class="text-brand-gray-400 py-3 px-4">
                                                        {{ subTable.epizodeName }}
                                                    </td>
                                                    <td class="py-3 px-4">
                                                        {{ subTable.noOfTracks }}
                                                    </td>
                                                    <td class="py-3 px-4">
                                                        <div
                                                            :class="{
                                                            'border-brand-green-400 text-brand-green-400 bg-brand-green-400/5': subTable.status === 'Completed',
                                                            'border-brand-red text-brand-red bg-brand-red/5': subTable.status === 'Not Completed',
                                                            'border-brand-yellow text-brand-yellow bg-brand-yellow/5': subTable.status === 'Waiting For Review'
                                                            }"
                                                        class="w-fit font-medium rounded-md border py-0.5 px-2.5">
                                                            {{ subTable.status }}
                                                        </div>
                                                    </td>
                                                    <td class="py-3 px-4">
                                                        <router-link to="/logbook/details">
                                                            <button type="button">
                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect width="28" height="28" rx="8" fill="#1F1F1F"/>
                                                                    <path d="M20.4 15.6C21.2837 15.6 22 14.8837 22 14C22 13.1163 21.2837 12.4 20.4 12.4C19.5163 12.4 18.8 13.1163 18.8 14C18.8 14.8837 19.5163 15.6 20.4 15.6Z" fill="white"/>
                                                                    <path d="M14 15.6C14.8837 15.6 15.6 14.8837 15.6 14C15.6 13.1163 14.8837 12.4 14 12.4C13.1163 12.4 12.4 13.1163 12.4 14C12.4 14.8837 13.1163 15.6 14 15.6Z" fill="white"/>
                                                                    <path d="M7.6 15.6C8.48366 15.6 9.2 14.8837 9.2 14C9.2 13.1163 8.48366 12.4 7.6 12.4C6.71634 12.4 6 13.1163 6 14C6 14.8837 6.71634 15.6 7.6 15.6Z" fill="white"/>
                                                                </svg>
                                                            </button>
                                                        </router-link>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
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
        showName: 'The Crepes of Wrath',
        numberOfEpizodes: 23,
        showCode: 'S1 E10',
        status: 'Completed',
        subTables: [
        {
            epizodeCode: 'S1 E348',
            epizodeName: 'S01E14 Harry & Mindy',
            noOfTracks: 12,
            status: 'Completed',
        },
        {
            epizodeCode: 'S33 E11',
            epizodeName: "S03E04 Episode 4",
            noOfTracks: 31,
            status: 'Not Completed',
        },
        {
            epizodeCode: 'S1 E93',
            epizodeName: "S01E12 Kobol's Last Gleaming (1)",
            noOfTracks: '02',
            status: 'Waiting For Review',
        },
        {
            epizodeCode: 'S1 E7',
            epizodeName: 'S08E01 Lock, Stock, Some Smoke.',
            noOfTracks: 41,
            status: 'Completed',
        },
        ],
        open: false,
        selected: false
    },
    {
        showName: 'The Crepes of Wrath',
        numberOfEpizodes: 23,
        showCode: 'S1 E10',
        status: 'Completed',
        subTables: [
        {
            epizodeCode: 'S1 E348',
            epizodeName: 'S01E14 Harry & Mindy',
            noOfTracks: 12,
            status: 'Completed',
        },
        {
            epizodeCode: 'S33 E11',
            epizodeName: "S03E04 Episode 4",
            noOfTracks: 31,
            status: 'Not Completed',
        },
        {
            epizodeCode: 'S1 E93',
            epizodeName: "S01E12 Kobol's Last Gleaming (1)",
            noOfTracks: '02',
            status: 'Waiting For Review',
        },
        {
            epizodeCode: 'S1 E7',
            epizodeName: 'S08E01 Lock, Stock, Some Smoke.',
            noOfTracks: 41,
            status: 'Completed',
        },
        ],
        open: false,
        selected: false
    },
    {
        showName: 'The Crepes of Wrath',
        numberOfEpizodes: 23,
        showCode: 'S1 E10',
        status: 'Completed',
        subTables: [
        {
            epizodeCode: 'S1 E348',
            epizodeName: 'S01E14 Harry & Mindy',
            noOfTracks: 12,
            status: 'Completed',
        },
        {
            epizodeCode: 'S33 E11',
            epizodeName: "S03E04 Episode 4",
            noOfTracks: 31,
            status: 'Not Completed',
        },
        {
            epizodeCode: 'S1 E93',
            epizodeName: "S01E12 Kobol's Last Gleaming (1)",
            noOfTracks: '02',
            status: 'Waiting For Review',
        },
        {
            epizodeCode: 'S1 E7',
            epizodeName: 'S08E01 Lock, Stock, Some Smoke.',
            noOfTracks: 41,
            status: 'Completed',
        },
        ],
        open: false,
        selected: false
    },
    ])

    const isExportButtonVisible = computed(() => tables.value.some(table => table.selected));
</script>