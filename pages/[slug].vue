<!-- <script>
export default defineComponent({
  async setup() {
    const route = useRoute();
    const params = route.params.slug;
    const sanity = useSanity();
    const query = groq`*[_type == "books" && slug.current == "${params}"][0]`;
    const [{ data: books }] = await Promise.all([
      useAsyncData('books', () => sanity.fetch(query)),
    ]);
    return { books };
  },
});
</script> -->
<script setup>
const route = useRoute();
const params = ref(route.params.slug);
const sanity = useSanity();
let query = groq`*[_type == "books" && slug.current == "${params.value}"][0]`;
const { data: books, refresh } = useAsyncData(
  'books',
  async () => {
    const res = await sanity.fetch(query);
    return res;
  },
  {
    watch: [],
  }
);
</script>
<template>
  <div :key="route.path">
    {{ books.bookname }}
  </div>
</template>
