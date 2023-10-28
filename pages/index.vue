<template>
    <div :style="{ backgroundImage: 'url(' + currentImage + ')' }" class="relative h-screen">
        <div class="relative px-16 h-full">
            <div class="pt-[14%]">
                <div class="flex gap-24 ml-5">
                    <UploadPanel />

                    <div class="text-white space-y-5 mt-11 relative z-10">
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
            <div class="absolute bottom-0 right-14 z-10">
                <img src="/company-workers.png" alt="">
            </div>

            <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'bg-img1.jpg',
        'bg-img2.jpg',
        'bg-img3.webp',
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  computed: {
    currentImage() {
      return (`/${this.images[this.currentIndex]}`);
    },
  },
  created() {
    this.startRotation();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startRotation() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.bg-image-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.bg-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.bg-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Adjust the alpha (0.5) for the desired level of black shadow */
}
</style>