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
/* @import "vue3-notion/dist/style.css"; */
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";

body {
	margin: 0;
}

.notion-page-content {
	background-color: black;
}

.notion-text, .notion-gray, .notion-link, blockquote {
	color: var(--notion-gray);
}

.notion-pink {
	color: #E255A1;

}
</style>