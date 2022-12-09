<template>
  <h2>Props types and Validations Component</h2>
  <h3>{{ title }}</h3>
  <h2>Likes - {{ likes }}</h2>
  <h3>Published - {{ isPublished ? "Yes" : "No" }}</h3>
</template>

<script>
export default {
  name: "PropTypesAndValidations",
  props: {
    title: {
      type: String,
      required: true,
      default: "Default Article Title",
    },
    likes: Number,
    isPublished: Boolean,
  },
};
</script>

<style scoped></style>
