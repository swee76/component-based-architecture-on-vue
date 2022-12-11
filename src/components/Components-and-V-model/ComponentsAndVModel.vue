<template>
  <div><InputElement v-model="testName" @input="$emit('$update:modalValue')" /></div>
</template>

<script>
import InputElement from "./Input.vue";
export default {
  name: "ComponentsAndVModel",
  components: {
    InputElement,
  },
  data() {
    return {
      testName: "",
    };
  },
};
</script>

<style scoped></style>
