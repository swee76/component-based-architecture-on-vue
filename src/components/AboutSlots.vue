<template>
  <div>
    <!-- Slots can be used to pass Images, html tags instead of passing only Strings, numbers, Boolean values etc  -->
    <!-- In here we are using opening and closing component without using self closed components -->
    <CardComponent>Card Content</CardComponent>
    <CardComponent><h2>Card Content</h2> </CardComponent>
    <CardComponent><img src="https://picsum.photos/200" /></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent>
      <!-- v-slot followed by the slot name with the template tag -->
      <template v-slot:header><h3>Header</h3></template>
      <template v-slot:default
        ><img src="https://picsum.photos/200"
      /></template>
      <template v-slot:footer><button>View Details</button></template>
    </CardComponent>

    <h3>Slot Props</h3>

    <NameList
      ><template v-slot:default="slotProps"
        >{{ slotProps.firstName }} {{ slotProps.lastName }}</template
      ></NameList
    >
    <NameList
      ><template v-slot:default="slotProps"
        >{{ slotProps.lastName }}, {{ slotProps.firstName }}</template
      ></NameList
    >
    <NameList
      ><template v-slot:default="slotProps">{{
        slotProps.firstName
      }}</template></NameList
    >
  </div>
</template>

<script>
import CardComponent from "./Learn-Slots/CardComponent.vue";
import NameList from "./Learn-Slots/NameList.vue";
export default {
  name: "AboutSlots",
  components: {
    CardComponent,
    NameList,
  },
};
</script>

<style scoped></style>
