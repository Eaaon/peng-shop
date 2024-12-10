<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import GoodsCard from "@/components/GoodsCard.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import { showToast } from "vant";
const sidebarActive = ref(0);
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  goodsList: [
    {
      name: "新疆红枣",
      picUrl:
        "https://img10.360buyimg.com/n2/s270x270_jfs/t1/241645/34/22289/183526/6736b30dFd6b8ec03/7b4acf39c4f209c8.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "补气养血 红枣中含有大量的糖类物质，还含有与人参中类似的达玛烷型皂甙，具有增强人体耐力和抗疲劳的作用。 同时红枣中富大量的维生素、以及钙和铁，有补气养血之功效。",
    },
    {
      name: "宁夏枸杞王",
      picUrl:
        "https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用",
    },
    {
      name: "野山参长白山人参",
      picUrl:
        "https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成",
    },
    {
      name: "宁夏枸杞王",
      picUrl:
        "https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用",
    },
    {
      name: "野山参长白山人参",
      picUrl:
        "https://img13.360buyimg.com/n2/s270x270_jfs/t1/150667/24/43217/158796/662c6969F3e672b34/2ea7b90aede6cd7f.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "人参能 抗休克、强心、降血压、抗缺氧 和 保护心肌 、改善血液流变学和抗血栓形成",
    },
    {
      name: "宁夏枸杞王",
      picUrl:
        "https://img10.360buyimg.com/n2/s270x270_jfs/t1/88669/21/44256/304291/65d2b0d9Facf31435/f3b54588efee1720.jpg!q70.webp",
      taste: "甘、苦、涩，平；有毒。",
      desc: "枸杞子的功效与作用包括滋补肝肾、益精明目，从西医角度而言，还有补充营养、降血脂、降血糖等功效与作用",
    },
  ],
  cateList: [
    {
      title: "补品",
      paneKey: "2093",
    },
    {
      title: "菌类",
      paneKey: "2094",
    },
    {
      title: "药材干货",
      paneKey: "2095",
    },
    {
      title: "海味",
      paneKey: "2096",
    },
    {
      title: "煲汤配方",
      paneKey: "2097",
    },
    {
      title: "品牌茶类",
      paneKey: "2098",
    },
    {
      title: "品牌红酒",
      paneKey: "2099",
    },
  ],
});

const onChange = (index: number) => showToast(index + "11");
const goDetail = () => {
  router.push({ path: "/goods/detail", query: { id: "1" } });
};

const { goodsList, cateList } = toRefs(state);
</script>

<template>
  <van-notice-bar
    left-icon="volume-o"
    scrollable
    text="鹏发批发商行，价美物廉，值得信懒"
  />
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
        v-for="goods in goodsList"
        :goods="goods"
        @click="goDetail"
      ></GoodsCard>
    </div>
  </main>
  <Tabbar style="height: 50px"></Tabbar>
</template>
