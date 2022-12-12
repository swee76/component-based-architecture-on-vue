<template>
  <div>TabC Content</div>
  <!-- User may wants to keeping Dynamic components alive, that means when the user wants to fill a form by moving to different tabs, the entered data should be cached -->
  <!-- Vue every time creates a new instance for tab components, therefore entered data should cached using, we can use keep-alive wrapper tag which is unique to the vue -->
  <input type="text" v-model="name" />
</template>

<script>
export default {
  name: "TabC",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped></style>
