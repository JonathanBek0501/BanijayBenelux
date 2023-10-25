<template>
    <div class="py-5 px-8 mt-20">
        <SectionsShows />
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

<style>
  /* Height */
  .expandTable-leave-active,
  .expandTable-enter-active {
    transition: all 500ms ease-in-out;
    overflow: hidden;
  }

  .expandTable-enter-to,
  .expandTable-leave-from {
    max-height: 500px;
  }

  .expandTable-enter-from,
  .expandTable-leave-to {
    opacity: 0;
    max-height: 0;
  }
</style>