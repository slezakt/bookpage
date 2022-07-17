<template>
  <div>pokus</div>
</template>

<script setup>
const query = groq`{ "books": *[_type == "books"] }`;
const sanity = useSanity();
const { data } = await useAsyncData('books', () => sanity.fetch(query));
</script>

<style lang="scss" scoped></style>
