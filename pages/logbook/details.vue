<template>
    <div class="pt-20">
      <div class="px-3">
        <Breadcrumbs />
      </div>
      <div class="flex items-start gap-5 pt-2 px-8">
        <div class="max-w-[18.2%] w-full rounded-lg bg-brand-gray space-y-3.5 p-2.5">
          <span class="text-white text-sm font-semibold pl-2">
            Epizodes
          </span>
          <button type="button" class="flex items-center gap-3.5 text-sm font-medium text-primary pl-2">
            <IconPlus class="w-3 h-3"/>
            <span>
              Add Episode
            </span>
          </button>
          <div class="text-sm font-medium space-y-3.5">
            <a v-for="(epizode, index) in epizodes" :key="index" href="#" class="flex items-center gap-2 rounded-lg bg-transparent text-white py-1 px-2">
              <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="8" height="8" rx="4" fill="#03A500"/>
              </svg>
              <span>
                {{ epizode.title }}
              </span>
            </a>
          </div>
        </div>

        <SectionsShowDetails />
      </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'logbook',
    });

    const epizodes = ref([
        {
            title: "The Crepes of Wrath",
            link: '#',
        },
        {
            title: "Krusty Gets Busted",
            link: '#',
        },
        {
            title: "Krusty Gets Busted",
            link: '#',
        },
        {
            title: "Life on the Fast Lane",
            link: '#',
        },
        {
            title: "The Call of the Simpsons",
            link: '#',
        },
        {
            title: "The Telltale Head",
            link: '#',
        },
        {
            title: "Homer's Night Out",
            link: '#',
        },
        {
            title: "Bart the General",
            link: '#',
        },
        {
            title: "Bart the General",
            link: '#',
        },
    ])
</script>