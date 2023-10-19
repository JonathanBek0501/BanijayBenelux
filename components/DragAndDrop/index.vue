<template>
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
    <!-- List of files being uploaded -->
    <ul v-if="uploading" class="mt-5">
      <li v-for="file in uploadingFiles" :key="file.name">
        <div v-if="file.progress < 100" class="bg-white h-2 rounded-lg">
          <div :style="{ width: file.progress + '%' }" class="bg-primary-dark h-2 rounded-lg"></div>
        </div>
        <div class="text-sm text-brand-gray-400 mt-2" v-if="file.progress < 100">
          {{ file.name }} - {{ file.progress }}%
          <span v-if="file.sizeMB">{{ formatSize(file.uploadedMB) }} / {{ formatSize(file.sizeMB) }}</span>
        </div>
        <div class="text-sm text-brand-gray-400 mt-2" v-else>
          {{ file.name }}
          <span v-if="file.sizeMB">{{ formatSize(file.sizeMB) }}</span>
        </div>
      </li>
    </ul>
    <!-- SVG goes here -->
    <svg class="-rotate-90" width="100" height="100">
      <circle cx="50" cy="50" r="45" stroke="white" stroke-width="7" fill="none" />
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="green"
        stroke-width="7"
        fill="none"
        :stroke-dasharray="282.74"
        :stroke-dashoffset="282.74 - (282.74 * (uploadPercentage / 100))"
      />
    </svg>
    <div>
      <p class="text-sm text-brand-gray-400">
        <span class="text-base text-white">{{ successfullyUploadedCount }}</span>
        <span>/</span>
        <span>{{ totalFiles }}</span>
        <span> - {{ uploadPercentage }}% Uploaded</span>
      </p>

      <span class="text-sm text-brand-gray-400">files successfully uploaded</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

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

const openFileDialog = () => {
  fileInput.value.click();
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