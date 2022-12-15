<template>
  <div>
    <ClickCounter />
    <HoverCounter />
  </div>
</template>

<script>
import ClickCounter from "./ClickCounter.vue";
import HoverCounter from "./HoverCounter.vue";

export default {
  name: "ReusabilityWithCompositionAPI",
  components: {
    ClickCounter,
    HoverCounter,
  },
};
</script>

<style scoped></style>
