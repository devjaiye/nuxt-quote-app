<template>

  <div class="bg-white">
    <!-- search bar -->
    <div class="mx-auto max-w-7xl flex text-center my-2 px-8">
            <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div class="w-64">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="search" 
                  name="search" 
                  v-model="searchQuery"
                  class="block w-full rounded-md border-0 bg-white py-1.5 
                  pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                    focus:ring-red-300 sm:text-sm sm:leading-6"
                     placeholder="Search" type="search" />
                </div>
              </div>
            </div>
    </div>
    <!-- categories -->
    <div class="xl:mx-auto xl:max-w-7xl xl:px-8 min-h-screen">
      <div class="flex items-center justify-between px-6 lg:px-8 xl:px-0">
        <h2 class="text-2xl font-bold tracking-tight andika-bold text-gray-900">Browse by Category</h2>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content overflow-x-auto py-2">
            <ul v-if="!isPending" role="list"
              class="relative lg:space-x-4 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 
              xl:space-x-0 xl:px-0 sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4">
              <li v-for="(category, index) in displayedCategories" :key="index">
                <NuxtLink :to="`/quotes/${category?.name}/${category.id}`"
                  class="relative flex h-60 w-full flex-col overflow-hidden rounded-lg p-4 hover:opacity-75 mb-4">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img :src="category.image" @error="handleEmptyImage($event)" alt=""
                      class="h-full w-full object-cover object-center" />
                  </span>
                  <span aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                  <span class="relative mt-auto text-center text-lg font-bold text-white bg-slate-700">
                    {{ category?.name || 'None..' }}
                  </span>
                </NuxtLink>
              </li>
            </ul>

            <!-- Empty search state -->
             <div v-if="!isPending && filteredCategories.length === 0" class="flex justify-center items-center h-80">
              <p class="text-md font-semibold text-gray-600">No Search Result 🥺 </p>

             </div>
            <!-- Loading state -->
            <div v-if="isPending" class="flex justify-center items-center h-80">
              <p class="text-md font-semibold text-gray-600">Loading categories...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load more button -->
      <div class="mt-4 text-center mb-6">
        <button 
          :disabled="!canLoadMore || filteredCategories?.length === 0" @click="loadMore"
          class="px-4 py-2 text-md font-semibold text-indigo-600 hover:text-indigo-500 
          disabled:opacity-50 disabled:cursor-not-allowed">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesQuery } from '~/queries';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import EmptyImage from '../assets/images/not-loading.jpg';

const searchQuery = ref('')

const { data: getCategories, isPending, isError } = useCategoriesQuery();

const categories = computed(() => getCategories?.value?.data || []);
const itemsToShow = ref(5);


const filteredCategories = computed(() => {
  return categories.value.filter(category =>
    category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const displayedCategories = computed(() => {
  return filteredCategories.value.slice(0, itemsToShow.value);
})

const handleEmptyImage = (event: Event) => {
  (event.target as HTMLImageElement).src = EmptyImage;
};

const canLoadMore = computed(() => {
 return  filteredCategories?.value?.length > 0 && itemsToShow.value < filteredCategories?.value?.length
});

const loadMore = () => {
  itemsToShow.value += 5;
};
</script>
