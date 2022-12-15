<template>
  <div>
    <h3>Props and composition API</h3>
    <PersonComponent />
  </div>
</template>

<script>
import PersonComponent from "./Person.vue";
export default {
  name: "PropsAndCompositionAPI",
  components: {
    PersonComponent,
  },
};
</script>

<style scoped></style>
