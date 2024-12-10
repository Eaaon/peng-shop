<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";

onMounted(() => {});

const state = reactive({
  goods: {
    name: "参芪猴头菇排骨汤",
    images: [
      "https://i3.meishichina.com/atta/recipe/2012/04/13/20120413131449848162820.jpg?x-oss-process=style/p800",
    ],
    desc: "黄芪有补气固表、止汗脱毒、生肌、利尿、退肿之功效。用于治疗气虚乏力，中气下陷，久泻脱肛，便血崩漏，表虚自汗，糖尿病等。",
    content:
      "排骨：350克、猴头菇：5-6朵、盐：适量、胡椒粉：少许、党参：5克、黄芪：3克、葱段：3段、姜片：4片、山楂片：5片",
    step: "1、小块的排骨用清水泡去血水。\n2、配料准备好。\n3、排骨凉水下锅加入绍酒和姜丝焯水。\n4、焯水后洗净捞出。\n5、猴头菇提前泡发洗净。\n6、排骨放入汤锅煮开去掉浮沫，加入配料转小火慢慢煮一个半小时左右。\n7、放入猴头菇煮开转小火接着煮40分钟左右。\n8、加入盐和胡椒粉调味即可，喜欢香菜的可以撒点香菜。\n9、这款【参芪猴头菇排骨汤】就做好了！",
  },
});
const { goods } = toRefs(state);
</script>

<template>
  <div class="bg-white min-h-screen">
    <van-swipe :autoplay="3000" lazy-render height="200">
      <van-swipe-item v-for="image in goods.images" :key="image">
        <van-image :src="image" fit="cover" position="center" width="375" height="200"/>
      </van-swipe-item>
    </van-swipe>
    <div class="p-2">
      <h2 class="text-2xl">{{ goods.name }}</h2>
      <h4 class="pt-2">功效</h4>
      <p class="text-sm pt-1">
        {{ goods.desc }}
      </p>
      <h4 class="pt-2">食材</h4>
      <p class="text-sm pt-1">
        {{ goods.content }}
      </p>
      <h4 class="pt-2">步骤</h4>
      <p class="text-sm pt-1 whitespace-pre-wrap">
        {{ goods.step }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
