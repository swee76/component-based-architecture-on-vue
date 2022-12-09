<template>
  <div>
    <!-- Provide/ Inject - No need to pass props along the nested components can be directly pass that prop value to the component  -->
    <!-- 1. Provide the value in the App component -->
    <!-- 2. Inject the value in the component F -->
    <ComponentC />
  </div>
</template>

<script>
import ComponentC from "../components/Provide-Inject-nested-components/ComponentC.vue";
export default {
  name: "ProvideAndInject",
  components: {
    ComponentC,
  },
};
</script>

<style scoped></style>
