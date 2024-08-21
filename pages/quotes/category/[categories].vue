<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">{{ categoryTitle }} Quotes</h1>
    <div v-if="quotes.length">
      <div v-for="quote in quotes" :key="quote.id" class="mb-4 p-4 border rounded">
        <img :src="quote.image" alt="" class="h-48 w-48 object-cover mb-2">
        <p class="text-xl font-semibold">{{ quote.quote }}</p>
        <p class="text-gray-600">- {{ quote.author }}</p>
      </div>
    </div>
    <p v-else>No quotes found for this category.</p>
  </div>
  </template>
  
  <script setup>

  const route = useRoute();
  const categoryTitle = route.params.category || ''
  const quotes = ref([]);

  onMounted(async () => {
    if (!categoryTitle) {
      console.error('Category title is undefined')
      return;
    }

    try {
      const response = await fetch(`/api/quotes/category/${categoryTitle}`);
      const result = await response.json();
      if (response.ok) {
        quotes.value = result.data;
      } else {
        console.error(result.data.message);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  });
</script>
  