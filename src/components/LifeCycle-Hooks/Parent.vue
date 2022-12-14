<template>
  <div>Parent Component</div>
  <button @click="showChild = !showChild">Toggle Child</button>
  <ChildComponent v-if="showChild" />
</template>

<script>
import ChildComponent from "./Child.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      showChild: true,
    };
  },
  beforeCreate() {
    console.log("Parent beforeCreate()");
  },
  created() {
    console.log("Parent created()");
  },
  beforeMount() {
    console.log("Parent beforeMount()");
  },
  mounted() {
    console.log("Parent mounted()");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate()");
  },
  updated() {
    console.log("Parent updated()");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmount()");
  },
  unmounted() {
    console.log("Parent unmounted()");
  },
};
</script>

<style scoped></style>
