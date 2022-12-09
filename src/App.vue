<template>
  <div>
    <GreetVue name="Bruce" hero-name="Batman" />
    <GreetVue name="Clark" hero-name="Spiderman" />
    <GreetVue name="Diana" hero-name="Wonder Woman" />

    <GreetVue :name="name" :hero-name="channel" />
    <PropTypesAndValidations
      title="Let's learn props types"
      :likes="50"
      :isPublished="true"
    />
    <NonPropAttributes
      id="myArticle"
      title="Learn Non prop attributes"
      :likes="32"
      :isPublished="false"
    />
  </div>
</template>

<script>
import GreetVue from "./components/Greet.vue";
import PropTypesAndValidations from "./components/PropTypesAndValidations.vue";
import NonPropAttributes from "./components/NonPropAttributes.vue";
export default {
  name: "App",
  components: {
    GreetVue,
    PropTypesAndValidations,
    NonPropAttributes,
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
