<template>
  <div>
    <button @click="showPopup = true">Show Popup</button>
    <PopupComponent v-show="showPopup" @close="closePopup" />
  </div>
</template>

<script>
import PopupComponent from "./Popup.vue";
export default {
  name: "ComponentEvents",
  components: {
    PopupComponent,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("name", name);
    },
  },
};
</script>

<style scoped></style>
