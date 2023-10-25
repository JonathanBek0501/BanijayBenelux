<template>
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-2.5 py-3 px-5">
        <li>
          <div>
            <a href="#" class="flex items-center gap-2.5 text-sm font-medium text-brand-gray-400 hover:text-white">
              <IconHome class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span>Home</span>
            </a>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <IconChevronRight class="h-3 w-3 flex-shrink-0 text-brand-gray-400" aria-hidden="true" />
            <a :href="page.href" class="ml-2.5 text-sm font-medium text-brand-gray-400 hover:text-white" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
          </div>
        </li>
      </ol>
    </nav>
</template>

<script setup>
  const pages = [
    { name: 'Shows', href: '#', current: false },
    { name: 'Details', href: '#', current: true },
  ]
</script>