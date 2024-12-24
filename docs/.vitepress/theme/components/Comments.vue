<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<!-- Added comments via giscus -->
<!-- Followed this guide https://aiktb.dev/blog/giscus-with-vitepress -->
<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="swarajban/swaraj-site"
      data-repo-id="R_kgDONguH0g"
      data-category="Announcements"
      data-category-id="DIC_kwDONguH0s4CleYx"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="en"
      data-theme="transparent_dark"
      data-loading="lazy"
      async
    />
  </div>
</template>