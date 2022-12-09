<template>
  <div>
    <h2>Non Prop Attributes</h2>
    <!-- Normally Non prop attributes are id, class, 
    style attributes it apply only if it have one root element otherwise it will not appear on the element-->

    <!-- But if you want to add the relevant non prop attribute into a particular element: you can add it with v-bind="$attr" -->
    <h3 v-bind="$attrs">{{ title }}</h3>
    <h2>Likes - {{ likes }}</h2>
    <h3>Published - {{ isPublished ? "Yes" : "No" }}</h3>
  </div>
</template>

<script>
export default {
  name: "NonPropAttributes",
  props: {
    title: {
      type: String,
      required: true,
      default: "Default Article Title",
    },
    likes: Number,
    isPublished: Boolean,
  },
  // Remove the non prop attribute being applied to the root element
  inheritAttrs: false,
};
</script>

<style scoped></style>
