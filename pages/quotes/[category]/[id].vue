<template>
  <div>
    <NuxtLink to="/"
      class="my-6 text-gray-500 text-center justify-center flex hover:text-purple-500 bg-white hover:bg-gray-300 border-2 w-20 mx-auto rounded-full py-4">
      <svg height="40px" id="Layer_1" style="enable-background: new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
        width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
      </svg>
    </NuxtLink>
    <div class="text-center">
      <p class="mt-6 text-gray-700 dark:text-gray-700 andika-bold">
        {{ categoryName?.name }} quotes
      </p>
    </div>
  </div>

  <section>
    <div class="py-4 mb-10 min-h-screen">
      <div v-if="Array.isArray(category) && category.length > 0" class="mx-auto px-8 max-w-8xl text-gray-500">
        <div class="mt-2 lg:grid lg:grid-cols-3 gap-6 flex flex-col">
          <div v-for="quote in category" :key="quote.id">
            <div href="#"
              class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div aria-hidden="true"
                class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10">
              </div>
              <div class="relative">
                <div
                  class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <img src="https://cdn0.iconfinder.com/data/icons/colourful-education/250/bulb-512.png" />
                </div>

                <div class="mt-6 pb-6 rounded-b-[--card-border-radius] h-32">
                  <p class="text-gray-700 dark:text-gray-300 andika-regular">
                    {{ quote.text }}
                  </p>
                </div>

                <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                  <div
                    class="andika-bold group rounded-xl dark:*:disabled:!text-white text-gray-700 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                    <span>{{ quote?.author }}</span>
                  </div>
                  <button @click="copyQuote(quote?.text, quote?.author, quote?.id)"
                    class="text-center flex justify-center items-center">
                    <svg enable-background="new 0 0 512 512" height="20px" id="Layer_1" version="1.1"
                      viewBox="0 0 512 512" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <path
                        d="M468.493,101.637L371.955,5.098H159.57v77.231H43.724v424.769h308.923v-77.231h115.846V101.637z   M371.955,32.401l69.236,69.235h-69.236V32.401z M63.031,487.79V101.637h173.769v96.538h96.538V487.79H63.031z M256.108,109.632  l69.236,69.235h-69.236V109.632z M352.647,410.56V178.867l-96.538-96.538h-77.231V24.406h173.769v96.538h96.538V410.56H352.647z"
                        fill="#37404D" />
                    </svg>
                  </button>
                </div>
                <div v-if="copiedQuoteId === quote.id"
                  class="absolute top-0 right-0 p-2 bg-green-100 text-green-700 rounded-lg">
                  Copied!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="mt-40 text-center text-gray-600">
        No quotes found for this category.
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);

const { data: categoryData } = useFetch(`/api/categories/${id.value}`);

const category = computed(() => categoryData?.value?.data?.quotes || []);
const categoryName = computed(() => categoryData?.value?.data);

const copiedQuoteId = ref(null);

const copyQuote = (
  quoteText: Ref<string>,
  quoteAuthor: Ref<string>,
  quoteId: any
) => {
  const textToCopy = `"${quoteText}" - ${quoteAuthor}`;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copiedQuoteId.value = quoteId;

      // setTimeout(()=>{
      //   copiedQuoteId.value = null
      // }, 2000)
      console.log("Text copied Successfully", textToCopy);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
};

console.log("Category Name ", categoryName?.value);
console.log("Category data: ", category?.value);
</script>
