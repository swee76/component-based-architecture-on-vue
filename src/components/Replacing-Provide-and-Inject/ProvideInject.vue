<template>
  <div>
    <h3>Parent Component {{ name }}</h3>
    <h3>Parent Component count {{ count }}</h3>
    <h3>Parent Component hero {{ firstName }} {{ lastName }}</h3>
    <button @click="incrementCount">Increment Count</button>
    <ChildA />
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import { provide, ref, reactive, toRefs } from "vue";
export default {
  name: "ProvideInject",
  components: { ChildA },
  setup() {
    provide("c_userName", "Code pen");

    const count = ref(0);

    function incrementCount() {
      count.value++;
    }

    const state = reactive({ firstName: "John", lastName: "Wayne" });

    provide("c_count", count);
    provide("c_state", state);
    provide("c_incrementCount", incrementCount);

    return {
      count,
      ...toRefs(state),
      incrementCount,
    };
  },
  data() {
    return {
      name: "Brayan",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style scoped></style>
