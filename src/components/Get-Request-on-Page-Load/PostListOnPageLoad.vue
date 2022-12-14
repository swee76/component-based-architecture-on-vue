<template>
  <div>
    <h3>Get Request on Page Load</h3>
    <h6>This uses created() function in script tag</h6>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostListOnPageLoad",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMsg = error.message;
        });
    },
  },
};
</script>

<style scoped></style>
