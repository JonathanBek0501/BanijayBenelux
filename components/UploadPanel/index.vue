<template>
    <div class="relative z-10 max-w-[394px] w-full h-fit divide-y divide-brand-gray-700 rounded-lg border text-white border-brand-gray-700 bg-brand-gray">
        <div class="space-y-2 p-6">
            <p class="font-semibold text-lg">
                <span v-if="activeTab === 1">
                    Confirmation
                </span>
                <span v-if="activeTab === 2 && !uploading">
                    IDFA
                </span>
                <span v-if="uploading && uploadPercentage < 100">
                    Uploading Start
                </span>
                <span v-if="uploadPercentage === 100">
                    Uploading Completed
                </span>
            </p>

            <p v-if="uploading" class="text-sm text-brand-gray-400">
                Uploading has been started. You can minimize this. This will resume in the background.
            </p>
        </div>

        <div class="py-6">
            <div v-if="activeTab === 1" class="px-6">
                <h2 class="font-bold text-2xl">
                    You’re almost there!
                </h2>
    
                <p class="text-brand-gray-light pt-5 pb-4">
                    To continue, please agree to our <a href="#" class="text-primary underline">Terms of Services.</a>
                </p>
    
                <ButtonPrimary @click="activeTab = 2" title="I agree" class="w-full"/>
            </div>

            <div v-if="activeTab === 2 && !uploading" class="px-6">
                <h2 class="font-bold text-2xl">
                    TestFrank 20230905
                </h2>

                <p class="text-brand-gray-light pt-5 pb-4">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                </p>

                <div
                    :class="{ 'opacity-50': isDragging }"
                    class="rounded-lg bg-primary/5 border border-dashed border-primary/40 px-8 py-5"
                    @dragover="handleDragOver"
                    @dragleave="handleDragLeave"
                    @drop="handleDrop"
                >
                    <div class="flex flex-col items-center text-center">
                        <img src="/upload.svg" alt="">
                        <span class="text-sm text-brand-gray-400 pt-2">Drag files here to upload</span>
                        <button class="font-medium underline text-primary pt-1.5">
                            <label for="fileInput" class="cursor-pointer">or browse for files and folders</label>
                        </button>
                        <span class="text-sm text-brand-gray-400 pt-5">File size: 200GB</span>
                        <span class="text-sm text-brand-gray-400 pt-0.5">Format support: .m4a, .mp4, .mov</span>
                        <input
                            type="file"
                            id="fileInput"
                            ref="fileInput"
                            style="display: none"
                            @change="handleFileInput"
                            multiple
                        />
                    </div>
                </div>
            </div>

            <div v-if="uploading && uploadPercentage < 90" class="space-y-2.5">
                <div class="flex items-center justify-between gap-2 px-6">
                    <div>
                        <p class="text-sm text-brand-gray-400">
                            <span class="text-base text-white">
                                {{ successfullyUploadedCount }}
                            </span>
                            <span>
                                /
                            </span>
                            <span>
                                {{ totalFiles }}
                            </span>
                        </p>

                        <span class="text-sm text-brand-gray-400">
                            files successfully uploaded
                        </span>
                    </div>

                    <div class="relative">
                        <div class="absolute inset-0 flex flex-col items-center justify-center font-semibold text-white text-center">
                            <span>
                                <span>{{ formatSize(totalSizeMB) }}</span>
                            </span>
                            <span class="text-sm">
                                ({{ uploadPercentage }}%)
                            </span>
                        </div>

                        <!-- Circle -->
                        <svg class="-rotate-90" width="100" height="100">
                            <circle cx="50" cy="50" r="45" stroke="#23262A" stroke-width="7" fill="none" />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="#0E9F6E"
                                stroke-width="7"
                                fill="none"
                                :stroke-dasharray="282.74"
                                :stroke-dashoffset="282.74 - (282.74 * (uploadPercentage / 100))"
                                class="transition-all ease-in"
                            />
                        </svg>
                    </div>
                </div>

                <ul class="space-y-8 max-h-56 overflow-auto pl-6 pr-3 mr-1.5">
                    <li v-for="file in uploadingFiles" :key="file.name" class="flex items-center gap-3">
                        <img v-if="file.progress < 100" src="/x-circle.svg" alt="x-icon">
                        <img v-else src="/check.svg" alt="tick">
                        <div class="w-full space-y-1.5">
                            <div class="flex items-center gap-3">
                                <img src="/mp4File.svg" alt="">

                                <div class="flex flex-col w-full gap-1">
                                    <span>
                                        {{ file.name }}
                                    </span>
                                    <div v-if="file.progress < 100" class="flex items-center justify-between gap-2 text-sm text-gray-400">
                                        <span>
                                            {{ formatSize(file.uploadedMB) }} / {{ formatSize(file.sizeMB) }}  (12.5 mbps)
                                        </span>

                                        <span>
                                            {{ file.progress }}%
                                        </span>
                                    </div>
                                    <span v-else class="text-sm text-gray-400">
                                        {{ formatSize(file.sizeMB) }}
                                    </span>
                                </div>
                            </div>

                            <!-- progress -->
                            <div v-if="file.progress < 100" class="relative w-full h-1.5 rounded-sm bg-brand-gray-600/30">
                                <div :style="{ width: file.progress + '%' }" class="absolute h-full bg-brand-green-500 rounded-sm transition-all ease-in"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div v-if="uploadPercentage > 90" class="flex flex-col items-center text-center p-6">
                <div class="relative">
                    <div class="absolute inset-0 flex flex-col items-center justify-center font-semibold text-white text-center">
                        <span class="text-xl">
                            <span>{{ formatSize(totalSizeMB) }}</span>
                        </span>
                        <span class="text-lg">
                            ({{ uploadPercentage }}%)
                        </span>
                    </div>

                    <svg class="-rotate-90" width="180" height="180" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <circle cx="90" cy="90" r="85" stroke="#23262A" stroke-width="10" fill="none" />
                        <circle
                            cx="90"
                            cy="90"
                            r="85"
                            stroke="#0E9F6E"
                            stroke-width="10"
                            fill="none"
                            :stroke-dasharray="534.1"
                            :stroke-dashoffset="534.1 - (534.1 * (uploadPercentage / 100))"
                            class="transition-all ease-in"
                        />
                    </svg>
                </div>

                <h2 v-if="uploadPercentage !== 100" class="font-bold text-2xl text-primary pt-5">
                    Almost There...
                </h2>
                <h2 v-else class="font-bold text-2xl text-primary pt-5">
                    Upload Completed
                </h2>

                <p v-if="uploadPercentage !== 100" class="text-sm text-brand-gray-light pt-1.5">
                    Uploading is about to finish and then you can see your uploaded media.
                </p>
                <p v-else class="text-sm text-brand-gray-light pt-1.5">
                    Total 86 files has been uploaded successfully. You can see your file through this link:
                    <a href="#" class="text-primary font-medium underline">Click Here</a>
                </p>
            </div>
        </div>

        <div v-if="uploading" class="px-6 py-3.5">
            <ButtonSecondary v-if="uploadPercentage !== 100" class="w-36" />
            <ButtonSecondary @click="hideAdditionalInformation()" v-else title="Upload More Files" />
        </div>
    </div>

    <!-- Transfer Overview -->
    <transition name="slide" mode="out-in">
        <div v-if="uploadingPreview" class="fixed right-0 top-0 w-full z-50">
            <div class="h-screen flex flex-col max-w-2xl w-full bg-brand-gray ml-auto">
                <div class="flex items-center justify-between border-b border-brand-gray-600/40 py-5 pr-6 pl-8">
                    <div class="flex items-center gap-4 text-lg">
                        <h4 class="text-white font-semibold">
                            Transfer Overview
                        </h4>
                        <p class="text-brand-gray-light">
                            of <span class="text-white">{{ totalFiles }}</span> Files
                        </p>
                    </div>
        
                    <button @click="clearUploadingFiles" type="button">
                        <img src="/close.svg" alt="">
                    </button>
                </div>
    
                <div class="flex-1 py-2.5 overflow-y-auto">
                    <div class="flex flex-col h-full overflow-y-auto pr-7 pl-10 mr-3.5">
                        <ul class="space-y-4">
                            <li v-for="file in uploadingFiles" :key="file.name" class="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    class="appearance-none w-4 h-4 rounded bg-brand-gray-700 checked:bg-primary checked:border-primary checked:bg-tick bg-center bg-no-repeat border-[0.5px] border-brand-gray-600"
                                    :checked="file.checked"
                                    @change="file.checked = !file.checked"
                                >
        
                                <img src="/mp4File.svg" alt="">
        
                                <div class="flex flex-col w-full gap-1">
                                    <span class="text-white">
                                        {{ file.name }}
                                    </span>
                                    <span class="text-sm text-gray-400">
                                        {{ formatSize(file.sizeMB) }}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div class="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-brand-gray-600/40 text-sm py-8 px-10">
                    <input type="text" id="productionName" placeholder="Production Name" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                    <input type="text" id="productionName" placeholder="Production Name" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                    <input type="email" id="email" placeholder="Email Address" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                    <input type="email" id="email" placeholder="Email Address" class="w-full h-11 rounded-lg border border-brand-gray-600/30 text-brand-gray-400 bg-brand-input px-4 py-3">
                </div>
    
                <div class="grid grid-cols-2 gap-5 border-t border-brand-gray-600/40 py-7 px-12">
                    <ButtonPrimary @click="handleFiles" title="Transfer" />
                    <button @click="clearUploadingFiles" type="button" class="font-medium text-primary underline hover:no-underline text-left">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </transition>

    <!-- Additional Information -->
    <transition name="slide" mode="out-in">
        <div v-if="uploadPercentage === 100 && showAdditionalInformation" class="fixed right-0 top-0 w-full z-50">
            <div class="h-screen flex flex-col lg:max-w-[90%] w-full bg-brand-gray ml-auto">
                <div class="flex items-center justify-between border-b border-brand-gray-600/40 py-5 p-5 sm:pr-6 sm:pl-8">
                    <div class="flex items-center gap-4 text-lg">
                        <h4 class="text-white font-semibold">
                            Additional Information
                        </h4>
                        <p class="text-brand-gray-light">
                            of <span class="text-white">{{ totalFiles }}</span> Files
                        </p>
                    </div>
        
                    <button @click="hideAdditionalInformation()" type="button">
                        <img src="/close.svg" alt="">
                    </button>
                </div>
    
                <div class="flex-1 py-2.5 overflow-y-auto">
                    <div class="flex flex-col h-full overflow-y-auto pr-2.5 pl-5 mr-2">
                        <ul class="grid md:grid-cols-2 items-start gap-3 md:gap-5">
                            <div class="space-y-3">
                                <li v-for="file in oddFiles" class="rounded-lg overflow-hidden border border-brand-gray-700">
                                    <div @click="toggleDropdown(file)" class="cursor-pointer flex items-center justify-between gap-3 bg-[#202225] py-4 px-5">
                                        <div class="flex items-center gap-3">
                                            <span class="text-white line-clamp-1">
                                                {{ file.name }}
                                            </span>
                                            <span class="text-sm text-brand-yellow rounded-md bg-brand-yellow/10 py-1 px-2.5">
                                                Pending
                                            </span>
                                        </div>
                                        <button type="button">
                                            <svg :class="{'rotate-180':showDropdownFile === file}" class="transition-all ease-in-out" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.01475 9.5C5.69651 9.49993 5.39134 9.37723 5.16635 9.15886L0.366346 4.50174C0.251734 4.39434 0.160315 4.26586 0.0974242 4.12382C0.0345334 3.98177 0.00142989 3.82899 4.53085e-05 3.6744C-0.00133927 3.51981 0.0290225 3.36649 0.0893596 3.22341C0.149697 3.08032 0.2388 2.95033 0.351472 2.84101C0.464143 2.73169 0.598125 2.64524 0.745601 2.5867C0.893077 2.52816 1.05109 2.4987 1.21043 2.50004C1.36976 2.50139 1.52723 2.53351 1.67363 2.59452C1.82004 2.65554 1.95245 2.74424 2.06315 2.85544L6.01475 6.68942L9.96635 2.85544C10.1927 2.64336 10.4958 2.52601 10.8104 2.52866C11.1251 2.53131 11.426 2.65376 11.6485 2.86962C11.871 3.08549 11.9972 3.37751 12 3.68278C12.0027 3.98805 11.8817 4.28215 11.6631 4.50174L6.86314 9.15886C6.63815 9.37723 6.33298 9.49993 6.01475 9.5Z" fill="#9CA3AF"/>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <transition name="expand">
                                        <div v-if="showDropdownFile === file" class="bg-brand-input border-t border-brand-gray-700">
                                            <div class="space-y-5 p-5">
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
                                        </div>
                                    </transition>
                                </li>
                            </div>
                            <div class="space-y-3">
                                <li v-for="file in evenFiles" class="rounded-lg overflow-hidden border border-brand-gray-700">
                                    <div @click="toggleDropdown(file)" class="cursor-pointer flex items-center justify-between gap-3 bg-[#202225] py-4 px-5">
                                        <div class="flex items-center gap-3">
                                            <span class="text-white line-clamp-1">
                                                {{ file.name }}
                                            </span>
                                            <span class="text-sm text-brand-yellow rounded-md bg-brand-yellow/10 py-1 px-2.5">
                                                Pending
                                            </span>
                                        </div>
                                        <button type="button">
                                            <svg :class="{'rotate-180':showDropdownFile === file}" class="transition-all ease-in-out" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.01475 9.5C5.69651 9.49993 5.39134 9.37723 5.16635 9.15886L0.366346 4.50174C0.251734 4.39434 0.160315 4.26586 0.0974242 4.12382C0.0345334 3.98177 0.00142989 3.82899 4.53085e-05 3.6744C-0.00133927 3.51981 0.0290225 3.36649 0.0893596 3.22341C0.149697 3.08032 0.2388 2.95033 0.351472 2.84101C0.464143 2.73169 0.598125 2.64524 0.745601 2.5867C0.893077 2.52816 1.05109 2.4987 1.21043 2.50004C1.36976 2.50139 1.52723 2.53351 1.67363 2.59452C1.82004 2.65554 1.95245 2.74424 2.06315 2.85544L6.01475 6.68942L9.96635 2.85544C10.1927 2.64336 10.4958 2.52601 10.8104 2.52866C11.1251 2.53131 11.426 2.65376 11.6485 2.86962C11.871 3.08549 11.9972 3.37751 12 3.68278C12.0027 3.98805 11.8817 4.28215 11.6631 4.50174L6.86314 9.15886C6.63815 9.37723 6.33298 9.49993 6.01475 9.5Z" fill="#9CA3AF"/>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <transition name="expand">
                                        <div v-if="showDropdownFile === file" class="bg-brand-input border-t border-brand-gray-700">
                                            <div class="space-y-5 p-5">
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
                                        </div>
                                    </transition>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
    
                <div class="flex flex-col sm:flex-row items-center gap-5 border-t border-brand-gray-600/40 p-5 sm:py-7 sm:px-12">
                    <ButtonPrimary @click="hideAdditionalInformation()" title="Save" class="sm:max-w-[288px] w-full" />
                    <button @click="hideAdditionalInformation()" type="button" class="font-medium text-primary underline hover:no-underline sm:text-left">
                        I’ll complete it later
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const activeTab = ref(1)

const fileInput = ref(null);
const isDragging = ref(false);
const uploading = ref(false);
const uploadingPreview = ref(false);
const uploadingFiles = ref([]);

const successfullyUploadedCount = ref(0);
const totalFiles = ref(0);

const handleDrop = (event) => {
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer.files;
  handlePreview(files);
};

const handleDragOver = (event) => {
  event.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleFileInput = () => {
  const files = fileInput.value.files;
  handlePreview(files);
};

const updateFileCounts = () => {
  successfullyUploadedCount.value = uploadingFiles.value.filter((file) => file.progress >= 100).length;
  totalFiles.value = uploadingFiles.value.length;
};

const handlePreview = (files) => {
  for (const file of files) {
    if (file.size > maxFileSize) {
      alert(`File size of ${file.name} exceeds the maximum allowed size of 200GB.`);
    } else if (!supportedFormats.includes(file.name.slice(-4))) {
      alert(`Unsupported file format: ${file.name}. Supported formats are .m4a, .mp4, .mov`);
    } else {
      const fileSizeMB = file.size / (1024 * 1024);
      uploadingFiles.value.push({ name: file.name, progress: 0, sizeMB: fileSizeMB, uploadedMB: 0, checked: true });
    }
  }
  totalFiles.value = uploadingFiles.value.length;
  uploadingPreview.value = uploadingFiles.value.length > 0;
};

const clearUploadingFiles = () => {
  uploadingFiles.value = [];
  uploadingPreview.value = false
};

const handleFiles = async () => {
    const selectedFiles = uploadingFiles.value.filter((file) => file.checked);

    if (selectedFiles.length === 0) {
        alert('No files selected for upload.');
        return;
    }

    const newUploadingFiles = [];
    for (const file of selectedFiles) {
        if (file.sizeMB > maxFileSize) {
        alert(`File size of ${file.name} exceeds the maximum allowed size of 200GB.`);
        } else if (!supportedFormats.includes(file.name.slice(-4))) {
        alert(`Unsupported file format: ${file.name}. Supported formats are .m4a, .mp4, .mov`);
        } else {
        newUploadingFiles.push(file);
        uploadFile(file);
        }
    }
    uploadingFiles.value = newUploadingFiles; // Update the uploadingFiles array
    uploading.value = newUploadingFiles.length > 0;
    uploadingPreview.value = false
};

const uploadFile = async (file) => {
  const fileInfo = uploadingFiles.value.find((info) => info.name === file.name);
  
  if (!fileInfo) {
    console.error('File info not found for', file.name);
    return;
  }
  
  const result = await simulateFileUpload(file, fileInfo);
  
  if (result) {
  } else {
    alert(`File upload failed: ${file.name}`);
  }
};

const simulateFileUpload = (file, fileInfo) => {
  return new Promise((resolve) => {
    let progress = 0;
    const totalProgress = 100;
    const fileSizeMB = fileInfo.sizeMB;
    const increaseRate = (totalProgress - 1) / fileSizeMB;
    const interval = setInterval(() => {
      if (progress < totalProgress) {
        progress += increaseRate;
        fileInfo.progress = Math.min(Math.floor(progress) + 1, totalProgress);
        fileInfo.uploadedMB = Math.min(Math.floor((progress / 100) * fileSizeMB), fileSizeMB);
        updateFileCounts(); // Update counts when progress changes
      } else {
        clearInterval(interval);
        resolve(true);
      }
    }, 1000);
  });
};

const maxFileSize = 200 * 1024 * 1024 * 1024;
const supportedFormats = ['.m4a', '.mp4', '.mov'];

// Watch for changes in uploadingFiles to update counts
watch(uploadingFiles, updateFileCounts);

const totalSizeMB = computed(() => {
  return uploadingFiles.value.reduce((total, file) => total + file.sizeMB, 0);
});

const uploadPercentage = computed(() => {
  if (totalSizeMB.value > 0) {
    const totalUploadedMB = uploadingFiles.value.reduce((total, file) => total + (file.progress / 100) * file.sizeMB, 0);
    return Math.floor((totalUploadedMB / totalSizeMB.value) * 100);
  }
  return 0;
});

// Watch for changes in successfullyUploadedCount and totalFiles to update the uploadPercentage
watch([successfullyUploadedCount, totalFiles], () => {
  uploadPercentage.value = Math.floor((successfullyUploadedCount.value / totalFiles.value) * 100);
});

const formatSize = (sizeInMB) => {
  if (sizeInMB > 1000) {
    return (sizeInMB / 1000).toFixed(1) + 'GB';
  }
  return sizeInMB.toFixed(1) + 'MB';
};

const showDropdownFile = ref(null);

const toggleDropdown = (file) => {
    if (showDropdownFile.value === file) {
        // If the clicked file is already the one shown, hide the dropdown.
        showDropdownFile.value = null;
    } else {
        // Otherwise, show the dropdown for the clicked file.
        showDropdownFile.value = file;
    }
};

const showAdditionalInformation = ref(true);

const hideAdditionalInformation = () => {
  showAdditionalInformation.value = !showAdditionalInformation.value;
};

// Split uploadingFiles into odd and even arrays
const oddFiles = computed(() => uploadingFiles.value.filter((file, index) => index % 2 === 0));
const evenFiles = computed(() => uploadingFiles.value.filter((file, index) => index % 2 === 1));
</script>

<style>
/* Height */
.expand-leave-active,
.expand-enter-active {
  transition: all 200ms ease-in-out;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 350px;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>