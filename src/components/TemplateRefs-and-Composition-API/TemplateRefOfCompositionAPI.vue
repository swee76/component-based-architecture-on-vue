<template>
  <div>
    <h3>TemplateRef Of Composition API</h3>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "TemplateRefOfCompositionAPI",
  setup() {
    const inputRef = ref(null);

    onMounted(() => {
      inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
  //   mounted() {
  //     this.$refs.inputRef.focus();
  //   },
};
</script>

<style scoped></style>
