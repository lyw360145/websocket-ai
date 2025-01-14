<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/assets/img/logo.svg'
import Message from '@/assets/img/message.svg'
import Picture from '@/assets/img/picture.svg'

defineProps<{ msg: string }>()

const current = ref({
   title: 'Model Y'
});
const navigationList = [

  {
    title: 'Model Y'
  },
  {
    title: 'Model Z'
  },
  {
    title: 'Model C'
  },
  {
    title: 'Model R'
  },
  {
    title: '关于我们'
  }
]
</script>

<template>
  <div>
    <div class="flex  justify-between border-b border-[#2F2F2F] ">
      <div class="flex">
        <div class="pl-4 pr-32">
          <img :src="Logo" alt="">
        </div>
        <div class="flex">
          <div v-for="item in navigationList" @click="current =item" class="text-white/80 text-sm p-5 leading-normal cursor-pointer" :class="current.title === item.title ? 'active': ''">{{
            item.title }}</div>
        </div>
      </div>
      <div class="flex">
        <div class="flex px-5"><img :src="Message" alt=""></div>
        <div class="flex px-4"><img :src="Picture" alt=""></div>
      </div>
    </div>
    <div class="mx-auto w-[1440px]">
      <div  class="text-white/80 mt-12">
      {{ current.title }}
    </div>
    </div>
 
  </div>
</template>

<style scoped>
.active {
  background: #2F2F2F;
}
</style>
