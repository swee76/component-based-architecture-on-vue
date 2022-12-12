<template>
  <div>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab AC</button>

    <!-- For the Dynamic Component we can use component HTML tag and v-bind directive with is attribute by specifying the data attribute that is used to change the component  -->
    <component :is="activeTab" />

    <!-- This is not best approach -->
    <!-- <TabA v-if="activeTab === 'TabA'" />
    <TabB v-if="activeTab === 'TabB'" />
    <TabC v-if="activeTab === 'TabC'"/> -->
  </div>
</template>

<script>
import TabA from "./TabA.vue";
import TabB from "./TabB.vue";
import TabC from "./TabC.vue";
export default {
  name: "DynamicComponents",
  components: {
    TabA,
    TabB,
    TabC,
  },
  data() {
    return {
      activeTab: "TabA",
    };
  },
};
</script>

<style scoped></style>
