<template>
  <div>
    <!-- By default component styles are applied globally in the component tree -->
    <!-- Even the app component has added scoped attribute to the style tag, if child component doesn't has own root element, as a div scoped attribute won't work and child component behave like his scope has spread over the parent component-->
    <h4>Child Styles Component Text</h4>
    <h6>======================================</h6>
    <!-- Slot take the passed value -->
    <!-- When using slots, the parent components styles are applied and and not the child component styles even through the content is embedded inside the child component -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChildStyles",
};
</script>

<style scoped>
h4 {
  color: olivedrab;
}
</style>
