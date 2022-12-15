<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName">Change Name</button>

    <h2>{{ count }}</h2>
    <button @click="incrementCount">Increment Count</button>

    <h6>toRefs and reactive</h6>

    <h3>{{ first }} {{ last }}</h3>
    <button @click="changeHero">Change hero</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "MethodsComponent",
  setup() {
    const count = ref(0);

    function incrementCount() {
      count.value++;
    }

    const state = reactive({
      first: "Martha",
      last: "Nicholas",
    });

    function changeHero() {
      (state.first = "Mani"), (state.last = "nick");
    }

    return {
      count,
      incrementCount,
      ...toRefs(state),
      changeHero,
    };
  },
  data() {
    return {
      name: "Rayan",
    };
  },
  methods: {
    setName() {
      this.name = "Tom";
    },
  },
};
</script>

<style scoped></style>
