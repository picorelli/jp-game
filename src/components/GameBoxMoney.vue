<template>
  <div
    class="game-box-money"
    v-on:click="!isDisabled && $emit('on-press')"
    v-bind:class="{ 'game-box-money--disabled': isDisabled }"
  >
    {{ this.value }}
  </div>
</template>

<script>
export default {
  name: "GameboxMoney",
  props: {
    value: {
      required: true,
      type: String,
    },
    isDisabled: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.game-box-money {
  border: 4px solid #CCC9CF;
  background-color: #1B0C21;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  width: 300px;
}

.game-box-money:hover {
  background-color: #452651;
}

.game-box-money--disabled {
  opacity: 0.5;
}
</style>
