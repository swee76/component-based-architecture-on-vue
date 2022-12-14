<template>
  <div>
    <input type="text" ref="inputRef" />
    <PostListOnPageLoad ref="postListRef" />
  </div>
</template>

<script>
import PostListOnPageLoad from "../Get-Request-on-Page-Load/PostListOnPageLoad.vue";
export default {
  name: "TemplateRef",
  components: { PostListOnPageLoad },
  mounted() {
    this.$refs.inputRef.focus();
    console.log("PostListref", this.$refs.postListRef);
  },
};
</script>

<style scoped></style>
