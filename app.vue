<template>
	<NotionRenderer v-if="data" :blockMap="data" fullPage />
  </template>  

<script setup lang="ts">
	import { NotionRenderer, getPageBlocks, useGetPageBlocks } from "vue3-notion"
	import { ref, onMounted } from "vue"

	const data = ref()

	onMounted(async () => {
		data.value = await getPageBlocks("17e24124dc4b41a5a489c15f70eafed7")
	})

</script>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";

html {
	margin: 0;
	background-color: black;
}

.notion-text {
	color: var(--notion-gray);
}
</style>