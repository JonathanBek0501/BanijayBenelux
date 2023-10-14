<template>
    <div class="max-w-[394px] w-full h-fit divide-y divide-brand-gray-700 rounded-lg border text-white border-brand-gray-700 bg-brand-gray">
        <div class="space-y-2 p-6">
            <span class="font-semibold text-lg">
                Confirmation
            </span>

            <p class="text-sm text-brand-gray-400">
                Uploading has been started. You can minimize this. This will resume in the background.
            </p>
        </div>

        <div class="p-6">
            <div class="hidden">
                <h2 class="font-bold text-2xl">
                    You’re almost there!
                </h2>
    
                <p class="text-brand-gray-light pt-5 pb-4">
                    To continue, please agree to our <a href="#" class="text-primary underline">Terms of Services.</a>
                </p>
    
                <ButtonPrimary title="I agree" class="w-full"/>
            </div>

            <div class="">
                <h2 class="font-bold text-2xl">
                    You’re almost there!
                </h2>

                <p class="text-brand-gray-light pt-5 pb-4">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                </p>

                <DragAndDrop />
            </div>

            <div class="hidden space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                    <div>
                        <p class="text-sm text-brand-gray-400">
                            <span class="text-base text-white">
                                15
                            </span>
                            <span>
                                /
                            </span>
                            <span>
                                83
                            </span>
                        </p>

                        <span class="text-sm text-brand-gray-400">
                            files successfully uploaded
                        </span>
                    </div>

                    <div class="relative">
                        <div class="absolute inset-0 flex flex-col items-center justify-center font-semibold text-white text-center">
                            <span>
                                5.6GB
                            </span>
                            <span class="text-sm">
                                (23.4%)
                            </span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <rect x="3.5" y="3.5" width="93" height="93" rx="46.5" stroke="#23262A" stroke-width="7"/>
                            <mask id="path-2-inside-1_127_15721" fill="white">
                            <path d="M94.7715 62.7787C96.5987 63.3002 98.5151 62.2434 98.9097 60.3846C100.272 53.9707 100.361 47.3399 99.1596 40.8713C97.7486 33.2729 94.5955 26.1051 89.9478 19.9306C85.3002 13.7561 79.2845 8.74296 72.3731 5.28487C66.4893 2.34089 60.0926 0.592174 53.5523 0.126342C51.6569 -0.00865612 50.1111 1.54053 50.1068 3.44072C50.1024 5.3409 51.6418 6.87057 53.5356 7.02638C59.0113 7.47688 64.3616 8.9708 69.2941 11.4387C75.2542 14.4209 80.442 18.7441 84.4501 24.0689C88.4581 29.3936 91.1773 35.575 92.3941 42.1276C93.401 47.5503 93.3564 53.105 92.2744 58.4917C91.9002 60.3547 92.9442 62.2572 94.7715 62.7787Z"/>
                            </mask>
                            <path d="M94.7715 62.7787C96.5987 63.3002 98.5151 62.2434 98.9097 60.3846C100.272 53.9707 100.361 47.3399 99.1596 40.8713C97.7486 33.2729 94.5955 26.1051 89.9478 19.9306C85.3002 13.7561 79.2845 8.74296 72.3731 5.28487C66.4893 2.34089 60.0926 0.592174 53.5523 0.126342C51.6569 -0.00865612 50.1111 1.54053 50.1068 3.44072C50.1024 5.3409 51.6418 6.87057 53.5356 7.02638C59.0113 7.47688 64.3616 8.9708 69.2941 11.4387C75.2542 14.4209 80.442 18.7441 84.4501 24.0689C88.4581 29.3936 91.1773 35.575 92.3941 42.1276C93.401 47.5503 93.3564 53.105 92.2744 58.4917C91.9002 60.3547 92.9442 62.2572 94.7715 62.7787Z" stroke="#0E9F6E" stroke-width="14" mask="url(#path-2-inside-1_127_15721)"/>
                        </svg>
                    </div>
                </div>

                <div class="space-y-8">
                    <div class="flex items-center gap-3">
                        <img src="/check.svg" alt="">
                        <div>
                            <div class="flex items-center gap-3">
                                <img src="/zip.svg" alt="">

                                <div class="flex flex-col gap-1">
                                    <span>
                                        pkl_e5bf9b07...02b7e6.xrd
                                    </span>
                                    <span class="text-sm text-gray-400">
                                        1.5 GB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="/x-circle.svg" alt="">
                        <div class="w-full space-y-1.5">
                            <div class="flex items-center gap-3">
                                <img src="/zip.svg" alt="">

                                <div class="flex flex-col w-full gap-1">
                                    <span>
                                        pkl_e5bf9b07...02b7e6.xrd
                                    </span>
                                    <div class="flex items-center justify-between gap-2 text-sm text-gray-400">
                                        <span>
                                            105.5mb/ 2.24gb  (12.5 mbps)
                                        </span>

                                        <span>
                                            75%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- progress -->
                            <div class="relative w-full h-1.5 rounded-sm bg-brand-gray-600/30">
                                <div class="absolute h-full w-3/4 bg-brand-green-500 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden flex flex-col items-center text-center">
                <div class="relative">
                    <div class="absolute inset-0 flex flex-col items-center justify-center font-semibold text-white text-center">
                        <span class="text-xl">
                            21.6GB
                        </span>
                        <span class="text-lg">
                            (97.8%)
                        </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
                        <rect x="5" y="5" width="170" height="170" rx="85" stroke="#23262A" stroke-width="10"/>
                        <mask id="path-2-inside-1_285_6134" fill="white">
                        <path d="M45.1031 17.8069C43.6492 15.4691 40.5659 14.7414 38.3121 16.3225C21.7753 27.9231 9.5782 44.7862 3.76733 64.2332C-2.52047 85.2764 -0.896703 107.892 8.33278 127.822C17.5623 147.751 33.7604 163.617 53.8762 172.432C73.9919 181.247 96.6367 182.403 117.545 175.681C138.454 168.959 156.183 154.824 167.393 135.938C178.603 117.052 182.521 94.7187 178.408 73.1448C174.294 51.571 162.435 32.2456 145.062 18.8089C129.007 6.39147 109.268 -0.204685 89.0694 0.0047218C86.3165 0.0332618 84.2348 2.42135 84.4157 5.16846C84.5965 7.91557 86.9715 9.97963 89.7246 9.97008C107.493 9.90846 124.833 15.7663 138.963 26.6951C154.411 38.6433 164.957 55.8279 168.614 75.012C172.272 94.196 168.788 114.055 158.82 130.849C148.852 147.643 133.086 160.213 114.494 166.19C95.9015 172.167 75.7652 171.14 57.8778 163.301C39.9903 155.462 25.5865 141.353 17.3794 123.632C9.17233 105.91 7.72844 85.7996 13.3197 67.0875C18.4339 49.972 29.1111 35.1072 43.5869 24.8027C45.8297 23.2061 46.557 20.1447 45.1031 17.8069Z"/>
                        </mask>
                        <path d="M45.1031 17.8069C43.6492 15.4691 40.5659 14.7414 38.3121 16.3225C21.7753 27.9231 9.5782 44.7862 3.76733 64.2332C-2.52047 85.2764 -0.896703 107.892 8.33278 127.822C17.5623 147.751 33.7604 163.617 53.8762 172.432C73.9919 181.247 96.6367 182.403 117.545 175.681C138.454 168.959 156.183 154.824 167.393 135.938C178.603 117.052 182.521 94.7187 178.408 73.1448C174.294 51.571 162.435 32.2456 145.062 18.8089C129.007 6.39147 109.268 -0.204685 89.0694 0.0047218C86.3165 0.0332618 84.2348 2.42135 84.4157 5.16846C84.5965 7.91557 86.9715 9.97963 89.7246 9.97008C107.493 9.90846 124.833 15.7663 138.963 26.6951C154.411 38.6433 164.957 55.8279 168.614 75.012C172.272 94.196 168.788 114.055 158.82 130.849C148.852 147.643 133.086 160.213 114.494 166.19C95.9015 172.167 75.7652 171.14 57.8778 163.301C39.9903 155.462 25.5865 141.353 17.3794 123.632C9.17233 105.91 7.72844 85.7996 13.3197 67.0875C18.4339 49.972 29.1111 35.1072 43.5869 24.8027C45.8297 23.2061 46.557 20.1447 45.1031 17.8069Z" stroke="#0E9F6E" stroke-width="14" mask="url(#path-2-inside-1_285_6134)"/>
                    </svg>
                </div>

                <h2 class="font-bold text-2xl text-primary pt-5">
                    Almost There...
                </h2>

                <p class="text-sm text-brand-gray-light pt-1.5">
                    Uploading is about to finish and then you can see your uploaded media.
                </p>
            </div>
        </div>

        <div class="px-6 py-3.5">
            <ButtonSecondary />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>