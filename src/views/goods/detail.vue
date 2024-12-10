<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";

onMounted(() => {});

const state = reactive({
  goods: {
    name: "白果",
    videoUrl:
      "https://vd3.bdstatic.com/mda-qgv3fqdisrk9kuqp/hd/h264/1722306398919481671/mda-qgv3fqdisrk9kuqp.mp4",
    introduction:
      "白果又称银杏、公孙树子。个如杏核大小色洁白如玉，其味甘、苦、涩，过食易引起腹泄。",
    nutrition:
      "白果是营养丰富的高级滋补品，含有粗蛋白、粗脂肪、还原糖、核蛋白、矿物质、粗纤维及多种维生素等成份。据科学得出结论：每100g鲜白果中含蛋白质13.2g，碳水化合物72.6g，脂肪1.3g，且含有维生素C、核黄素、胡萝卜素、及钙、磷、铁、硒、钾、镁等多种微量元素，8种氨基酸，具有很高的食用价值、药用价值、保健价值。",
    effect:
      "1、抗衰老：具有通畅血管、改善大脑功能、延缓老年人大脑衰老、增强记忆能力等功效。\n2、保护肝脏：保护肝脏、减少心律不齐、防止过敏反应中致命性的支气管收缩。\n3、防治心血管疾病：对脑血栓、老年性痴呆、高血压、高血脂、冠心病等疾病具有特殊的预防和治疗效果。",
    ediblePeople: "一般人群均可食用，尤适宜肺结核咳嗽、老人虚弱哮喘者。",
    unediblePeople: "五岁以下小儿、有实邪者不可服用。",
    kill: "1、挑选白果应该以外壳光滑、洁白的为最佳。\n2、选购较新鲜，并且大小均匀、果仁饱满、坚实的果仁，选择无霉斑的最好。\n3、白果粒大、光亮、壳色白净者，品质新鲜。所以如果外壳泛糙米色，一般是陈货。\n4、用手抓一把白果摇动，无声音的果仁饱满，有声音的不是陈货就是僵仁。",
    images: [
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uHNCi.img?w=575&h=344&m=6",
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uHL3s.img?w=575&h=344&m=6",
    ],
  },
});
const { goods } = toRefs(state);
</script>

<template>
  <div class="bg-white min-h-screen">
    <van-swipe :autoplay="3000" lazy-render height="200">
      <van-swipe-item v-for="image in goods.images" :key="image">
        <img :src="image" class="w-full" />
      </van-swipe-item>
    </van-swipe>
    <div class="p-2">
      <h2 class="text-2xl">{{ goods.name }}</h2>
      <h4 class="pt-2">食材简介</h4>
      <p class="text-sm pt-1">
        {{ goods.introduction }}
      </p>
      <h4 class="pt-2">营养价值</h4>
      <p class="text-sm pt-1">
        {{ goods.nutrition }}
      </p>
      <h4 class="pt-2">食用功效</h4>
      <p class="text-sm pt-1 whitespace-pre-wrap">
        {{ goods.effect }}
      </p>
      <h4 class="pt-2">适用人群</h4>
      <p class="text-sm pt-1">
        {{ goods.ediblePeople }}
      </p>
      <h4 class="pt-2">禁忌人群</h4>
      <p class="text-sm pt-1">
        {{ goods.unediblePeople }}
      </p>
      <h4 class="pt-2">选购技巧</h4>
      <p class="text-sm pt-1 whitespace-pre-wrap">
        {{ goods.kill }}
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
