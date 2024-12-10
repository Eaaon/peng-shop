<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import GoodsCard from "@/components/GoodsCard.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import { showToast } from "vant";
const sidebarActive = ref(0);
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  soupList: [
    {
      name: "参芪猴头菇排骨汤",
      picUrl:
        "https://i3.meishichina.com/atta/recipe/2012/04/13/20120413131449848162820.jpg?x-oss-process=style/p800",
      efficacy: "补气固表、止汗脱毒、生肌、利尿、退肿之功效。",
      desc: "黄芪有补气固表、止汗脱毒、生肌、利尿、退肿之功效。用于治疗气虚乏力，中气下陷，久泻脱肛，便血崩漏，表虚自汗，糖尿病等。",
      content:
        "排骨：350克、猴头菇：5-6朵、盐：适量、胡椒粉：少许、党参：5克、黄芪：3克、葱段：3段、姜片：4片、山楂片：5片",
      step: "1、小块的排骨用清水泡去血水。\n2、配料准备好。\n3、排骨凉水下锅加入绍酒和姜丝焯水。\n4、焯水后洗净捞出。\n5、猴头菇提前泡发洗净。\n6、排骨放入汤锅煮开去掉浮沫，加入配料转小火慢慢煮一个半小时左右。\n7、放入猴头菇煮开转小火接着煮40分钟左右。\n8、加入盐和胡椒粉调味即可，喜欢香菜的可以撒点香菜。\n9、这款【参芪猴头菇排骨汤】就做好了！",
    },
    {
      name: "参芪猴头菇排骨汤",
      picUrl:
        "https://i3.meishichina.com/atta/recipe/2012/04/13/20120413131449848162820.jpg?x-oss-process=style/p800",
      efficacy: "补气固表、止汗脱毒、生肌、利尿、退肿之功效。",
      desc: "黄芪有补气固表、止汗脱毒、生肌、利尿、退肿之功效。用于治疗气虚乏力，中气下陷，久泻脱肛，便血崩漏，表虚自汗，糖尿病等。",
      content:
        "排骨(350克）、猴头菇(5-6朵)、盐(适量)、胡椒粉(少许)、党参(5克)、黄芪(3克)、葱段(3段)、姜片(4片)、山楂片(5片)",
      step: "1、小块的排骨用清水泡去血水。\n2、配料准备好。\n3、排骨凉水下锅加入绍酒和姜丝焯水。\n4、焯水后洗净捞出。\n5、猴头菇提前泡发洗净。\n6、排骨放入汤锅煮开去掉浮沫，加入配料转小火慢慢煮一个半小时左右。\n7、放入猴头菇煮开转小火接着煮40分钟左右。\n8、加入盐和胡椒粉调味即可，喜欢香菜的可以撒点香菜。\n9、这款【参芪猴头菇排骨汤】就做好了！",
    },
  ],
  cateList: [
    {
      title: "热门推荐",
      paneKey: "2093",
    },
    {
      title: "清热解毒",
      paneKey: "2094",
    },
    {
      title: "补品",
      paneKey: "2095",
    },
    {
      title: "祛湿",
      paneKey: "2096",
    },
  ],
});

const onChange = (index: number) => showToast(index + "11");
const goDetail = () => {
  router.push({ path: "/other/detail", query: { id: "1" } });
};

const { cateList, soupList } = toRefs(state);
</script>

<template>
  <van-notice-bar left-icon="volume-o" scrollable text="靓汤推荐，美味实在" />
  <main class="flex w-full">
    <div>
      <van-sidebar
        v-model="sidebarActive"
        class="sidebar overflow-y-auto"
        @change="onChange"
      >
        <van-sidebar-item
          v-for="item of cateList"
          :key="item.paneKey"
          :title="item.title"
        />
      </van-sidebar>
    </div>
    <div class="flex-1 sidebar overflow-y-auto">
      <GoodsCard
        v-for="goods in soupList"
        :goods="goods"
        @click="goDetail"
      ></GoodsCard>
    </div>
  </main>
  <Tabbar style="height: 50px"></Tabbar>
</template>
