<template>
  <div>
    <h4>Options - {{ o_firstName }}</h4>
    <h4>Composition - {{ c_firstName }}</h4>
    <h5>Composition greet - {{ greet }}</h5>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DataComponent",
  //   This setup() is enter to the composition API
  setup() {
    const c_firstName = ref("Clark");
    // This is not just a single String, it is an object
    console.log(c_firstName);

    c_firstName.value = "Diana";

    const greet = `Hello ${c_firstName.value}!`;

    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style scoped></style>
