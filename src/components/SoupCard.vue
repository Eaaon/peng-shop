<script setup lang="ts">
import { defineProps } from "vue";

interface SoupObjectType {
  name: string;
  picUrl: string;
  desc: string;
  content: string;
  step: string;
}
defineProps<{
  item: SoupObjectType;
}>();
</script>

<template>
  <div class="feeds_col">
    <div class="goods">
      <div class="mt-2">
        <van-image width="100" height="100" fit="cover" radius="8" :src="item.picUrl" />
      </div>

      <div class="goods_info">
        <div class="goods_name">
          {{ item.name }}
        </div>
        <div class="goods_desc">
          <div class="title">功效：</div>
          <div>{{ item.desc }}</div>
        </div>
        <div class="goods_desc">
          <div class="title">食材：</div>
          <div>{{ item.content }}</div>
        </div>
        <div class="goods_desc">
          <div class="title">步骤：</div>
          <div style="white-space: pre-wrap;">{{ item.step }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feeds_col {
  width: 100%;
}
.goods {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 6px;
  display: flex;
}
.goods_info {
  padding: 4px 6px;
}
.goods_name {
  font-size: 14px;
  overflow: hidden;
  color: #434343;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  word-break: break-all;
  -webkit-box-orient: vertical;
}
.goods_desc {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
}
.van-image {
  display: block;
}
.mt-2{
  padding-top: 8px;
}
.title{
  font-weight: 700;
}
</style>
