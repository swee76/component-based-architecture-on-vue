<template>
  <div>
    <GreetVue name="Bruce" hero-name="Batman" />
    <GreetVue name="Clark" hero-name="Spiderman" />
    <GreetVue name="Diana" hero-name="Wonder Woman" />

    <GreetVue :name="name" :hero-name="channel" />
  </div>
</template>

<script>
import GreetVue from "./components/Greet.vue";
export default {
  name: "App",
  components: {
    GreetVue,
  },
  data() {
    return {
      name: "Vishwas",
      channel: "Code Academy",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
