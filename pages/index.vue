<template>
  <div :key="route.path">
    <div v-for="book in data.books" :key="book.id">
      <h1>{{ book.bookname }}</h1>
      <img
        :src="$urlFor(book.bookcover).size(426).url()"
        :alt="book.bookname"
        loading="lazy"
        class="book-img"
      />
      <div class="info" v-if="book.mynotes">
        <SanityContent :blocks="book.mynotes" />
      </div>
      <NuxtLink class="link" :to="book.slug.current"> Odkaz </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const query = groq`{ "books": *[_type == "books"] }`;
const sanity = useSanity();
const { data, refresh } = await useAsyncData('books', () =>
  sanity.fetch(query)
);
</script>

<style lang="scss" scoped></style>
