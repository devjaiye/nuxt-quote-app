<template>
  <div class="bg-white">
    <div class="py-10 xl:mx-auto xl:max-w-7xl xl:px-8 min-h-screen">
      <div class="flex items-center justify-between px-6 lg:px-8 xl:px-0">
        <h2 class="text-2xl font-bold tracking-tight andika-bold text-gray-900">Browse by Category</h2>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content overflow-x-auto py-2">
            <ul v-if="!isPending" role="list"
              class="relative space-x-4 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0 sm:grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4">
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

            <!-- Loading state -->
            <div v-if="isPending" class="flex justify-center items-center h-80">
              <p class="text-md font-semibold text-gray-600">Loading categories...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load more button -->
      <div class="mt-4 text-center mb-6">
        <button v-if="canLoadMore && !isPending" @click="loadMore"
          class="px-4 py-2 text-md font-semibold text-indigo-600 hover:text-indigo-500">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesQuery } from '~/queries';
import EmptyImage from '../assets/images/not-loading.jpg';

const { data: getCategories, isPending, isError } = useCategoriesQuery();

const categories = computed(() => getCategories?.value?.data || []);
const itemsToShow = ref(5);
const displayedCategories = computed(() => categories?.value?.slice(0, itemsToShow.value));

const handleEmptyImage = (event: Event) => {
  (event.target as HTMLImageElement).src = EmptyImage;
};

const canLoadMore = computed(() => itemsToShow.value < categories?.value?.length);

const loadMore = () => {
  itemsToShow.value += 5;
};
</script>
