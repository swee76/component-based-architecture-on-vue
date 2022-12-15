<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
// import CounterMixin from "../../mixins/Counter";
import useCounter from "../../composables/useCounter";
export default {
  name: "ClickCounter",

  setup() {
    const { count, incrementCount } = useCounter(100, 10);

    return {
      count,
      incrementCount,
    };
  },
  //   mixins: [CounterMixin],

  // We can add data property and initialize the counter value as 100, then  count will be 100 at initially,
  // So the prriority of the counter value will be definetely taken from the component, not from the mixins

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
