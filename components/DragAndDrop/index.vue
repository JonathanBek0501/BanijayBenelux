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
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const fileInput = ref(null);
  const isDragging = ref(false);
  
  // Function to handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    isDragging.value = false;
    const files = event.dataTransfer.files;
    handleFiles(files);
  };
  
  // Function to handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    isDragging.value = true;
  };
  
  // Function to handle drag leave event
  const handleDragLeave = () => {
    isDragging.value = false;
  };
  
  // Function to open the file dialog when the "Browse" button is clicked
  const openFileDialog = () => {
    fileInput.value.click();
  };
  
  // Function to handle selected files from the file input
  const handleFileInput = () => {
    const files = fileInput.value.files;
    handleFiles(files);
  };
  
  // Function to handle dropped or selected files
  const handleFiles = (files) => {
    const maxFileSize = 200 * 1024 * 1024 * 1024; // 200 GB in bytes
    const supportedFormats = ['.m4a', '.mp4', '.mov'];
  
    if (files.length === 0) {
      alert('No files were selected.');
      return;
    }
  
    for (const file of files) {
      if (file.size > maxFileSize) {
        alert('File size exceeds the maximum allowed size of 200GB.');
      } else if (!supportedFormats.includes(file.name.slice(-4))) {
        alert('Unsupported file format. Supported formats are .m4a, .mp4, .mov');
      } else {
        // File is valid, you can handle the upload logic here
        alert(`Uploading file: ${file.name}`);
      }
    }
  };
  </script>
  