<template>
  <div>
    <!-- Prevent ensures that when submit the form, page doesn't refresh -->
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post body</label>
        <input type="text" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style scoped></style>
