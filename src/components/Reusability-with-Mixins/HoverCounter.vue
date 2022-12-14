<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
import CounterMixin from "../../mixins/Counter";
export default {
  name: "HoverCounter",
  mixins: [CounterMixin],
  //   data() {
  //     return {
  //       count: 0,
  //     };
  //   },
  //   methods: {
  //     incrementCount() {
  //       this.count += 1;
  //     },
  //   },
};
</script>

<style scoped></style>
