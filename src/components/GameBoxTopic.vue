<template>
  <div class="game-box-topic">
    {{ this.value }}
  </div>
</template>

<script>
export default {
  name: "GameBoxTopic",
  props: {
    value: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.game-box-topic {
  border: 4px solid #F6C151;
  background: radial-gradient(circle, rgba(246,193,81,1) 0%, rgba(112,133,42,1) 100%);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  width: 300px;
  text-transform: uppercase;
}
</style>
