<template>
  <div>
    <!-- <h2>{{ fName }} {{ lName }}</h2> -->

    <h2>{{ firstName }} {{ lastName }}</h2>
    <!-- Above statement directly access the key value of the reactive -->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "DemoTwo",
  setup() {
    const personData = reactive({ firstName: "John", lastName: "Bronad" });

    setTimeout(() => {
      personData.firstName = "Mary";
      personData.lastName = "Anjela";
    }, 2000);

    return toRefs(personData);

    // return {
    //   fName: personData.firstName,
    //   lName: personData.lastName,
    // };
  },
};
</script>

<style scoped></style>
