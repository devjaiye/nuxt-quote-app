<template>
 <div class="mx-auto  max-w-8xl lg:mt-20 lg:px-8">
        <div   class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0" src="https://images.unsplash.com/photo-1502122184877-d174df5eb072?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#9946ff] to-[#262545] opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
          </div>
          <div  class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#9946ff] to-[#262545] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
          </div>
          <div v-for="randomQ in random" :key="randomQ.id"  class="relative mx-auto max-w-2xl lg:mx-0">
            <!-- <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" /> -->
             <span class="text-red-200 text-3xl pacifico-regular">QouteLify*</span>
            <figure>
              <blockquote class="andika-regular mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                 <p>"{{randomQ?.quote }}"</p> 
              </blockquote>
              <figcaption class="mt-6 text-base text-white">
                <div class="font-semibold andika-regular-italic">{{ randomQ.author }}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
  
    <slot/>
  </template>
  

<script setup lang="ts">
import { useRandomQuoteQuery } from '~/queries';

 const {data: random} = useRandomQuoteQuery()

</script>
