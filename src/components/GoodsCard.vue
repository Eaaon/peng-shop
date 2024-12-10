<script setup lang="ts">
import { defineProps } from "vue";

interface GoodsObjectType {
  name: string;
  picUrl: string;
  desc: string;
  taste: string;
  efficacy: string;
}
defineProps<{
  goods: GoodsObjectType;
}>();
</script>

<template>
  <div class="flex bg-white p-2 relative my-2 mx-1">
    <div>
      <van-image width="80" height="80" block radius="4" :src="goods.picUrl" />
    </div>
    <div class="px-2">
      <h4>{{ goods.name }}</h4>
      <p class="text-xs pt-2" v-if="goods.taste"> 性味：{{goods.taste}}</p>
      <p class="text-xs pt-2" v-if="goods.efficacy"> 功效：{{goods.efficacy}}</p>
      <div class="absolute right-2 bottom-2 bg-lime-600 text-white px-3 py-1 rounded-full text-sm">
        查看
      </div>
    </div>
  </div>
</template>
