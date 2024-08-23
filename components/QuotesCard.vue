<template>
    <div>
<section>
    <div class="py-16">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
            <div class="text-center">
                <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Quickstart with boilerplates</h2>
                <p class="mt-6 text-gray-700 dark:text-gray-300">Harum quae dolore inventore repudiandae? orrupti aut temporibus ariatur.</p>
            </div>
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div href="#" class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffEKFCCusOFWVjR5PTIqzNzlHfzwbLa_J5g&s"/>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
                        </div>

                        <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                            <a href="#" download="/" class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                <span>category name</span>
                            </a>
                            <a href="#i" class="text-center flex justify-center items-center">
                              Copy Icon
                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps({
    quoteCategory: {
        type: String,
        require: true,
    }
  })



  </script>
  