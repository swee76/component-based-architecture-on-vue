<template>
  <div>
    <h4>Options - {{ o_firstName }}</h4>
    <h4>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h4>

    <h4>Composition - {{ c_firstName }}</h4>
    <h5>Composition greet - {{ greet }}</h5>

    <h4>
      Composition - {{ c_firstName }} {{ c_lastName }} a.k.a {{ c_heroName }}
    </h4>
    <h5>Compositin - {{ greetHero }}</h5>

    <h4>
      Composition reactive - {{ state.firstName }} {{ state.lastName }} a.k.a
      {{ state.heroName }}
    </h4>
    <h5>Composition reactive - {{ reactiveGreetHero }}</h5>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "ReplacingDataWithReactive",
  //   This setup() is enter to the composition API
  setup() {
    // Basically, ref is dealing with primitive types
    const c_firstName = ref("Clark");
    const c_lastName = ref("Kent");
    const c_heroName = ref("Superman");
    // This is not just a single String, it is an object
    console.log(c_firstName);

    // c_firstName.value = "Diana";

    const greet = `Hello ${c_firstName.value}!`;
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}!`;

    // Unlike the ref, reactive accepts the objects as an argument
    // Reactive is dealing with only objects
    const state = reactive({
      firstName: "Prince",
      lastName: "Charles",
      heroName: "Spiderman",
    });

    // Reduced ref use multiple times and reduced value use multiple times

    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}!`;

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      state,
      reactiveGreetHero,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "Batman",
    };
  },
};
</script>

<style scoped></style>
