<template>
    <div class="max-w-[394px] w-full h-fit divide-y divide-brand-gray-700 rounded-lg border text-white border-brand-gray-700 bg-brand-gray">
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
                                <div :style="{ width: file.progress + '%' }" class="absolute h-full bg-brand-green-500 rounded-sm"></div>
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
            <ButtonSecondary v-else title="Upload More Files" />
        </div>
    </div>

    <!-- Transfer Overview -->
    <div class="hidden fixed right-0 top-0 w-full z-50">
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
    
                <button type="button">
                    <img src="/close.svg" alt="">
                </button>
            </div>

            <div class="flex-1 py-2.5 overflow-y-auto">
                <div class="flex flex-col h-full overflow-y-auto pr-7 pl-10 mr-3.5">
                    <ul class="space-y-4">
                        <li v-for="file in uploadingFiles" :key="file.name" class="flex items-center gap-3">
                            <input type="checkbox" class="appearance-none w-4 h-4 rounded bg-brand-gray-700 checked:bg-primary checked:border-primary checked:bg-tick bg-center bg-no-repeat border-[0.5px] border-brand-gray-600">
    
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
                <ButtonPrimary title="Transfer" />
                <button type="button" class="font-medium text-primary underline hover:no-underline text-left">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeTab = ref(1)

const fileInput = ref(null);
const isDragging = ref(false);
const uploading = ref(false);
const uploadingFiles = ref([]);

const successfullyUploadedCount = ref(0);
const totalFiles = ref(0);

const handleDrop = (event) => {
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer.files;
  handleFiles(files);
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
  handleFiles(files);
};

const updateFileCounts = () => {
  successfullyUploadedCount.value = uploadingFiles.value.filter((file) => file.progress >= 100).length;
  totalFiles.value = uploadingFiles.value.length;
};

const handleFiles = (files) => {
  for (const file of files) {
    if (file.size > maxFileSize) {
      alert(`File size of ${file.name} exceeds the maximum allowed size of 200GB.`);
    } else if (!supportedFormats.includes(file.name.slice(-4))) {
      alert(`Unsupported file format: ${file.name}. Supported formats are .m4a, .mp4, .mov`);
    } else {
      const fileSizeMB = file.size / (1024 * 1024);
      uploadingFiles.value.push({ name: file.name, progress: 0, sizeMB: fileSizeMB, uploadedMB: 0 });
      uploadFile(file, uploadingFiles.value[uploadingFiles.value.length - 1]);
    }
  }
  uploading.value = uploadingFiles.value.length > 0;
};

const uploadFile = async (file, fileInfo) => {
  const result = await simulateFileUpload(file, fileInfo);
  if (result) {
    alert(`File uploaded: ${file.name}`);
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
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 30px;
  background: #202225;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF4370; 
  border-radius: 30px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 35, 87); 
}
</style>