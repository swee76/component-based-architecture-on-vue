<template>
  <div>
    <h2>Child Component C</h2>
    <h3>Child Component c username - {{ username }}</h3>

    <h3>Child Component c composition username - {{ childUserName }}</h3>
    <h3>Child Component c composition count - {{ childCount }}</h3>
    <h3>
      Child Component c composition heroname - {{ firstName }} {{ lastName }}
    </h3>
    <button @click="childIncrementCount">Increment count from Child</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildC",
  setup() {
    const childUserName = inject("c_userName", "Default username");

    const childCount = inject("c_count", 0);
    const childHero = inject("c_state", {});
    const childIncrementCount = inject("c_incrementCount");

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      childIncrementCount,
    };
  },
  inject: ["username"],
};
</script>

<style scoped></style>
