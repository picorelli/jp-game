<template>
  <div class="game-over">
    <div>
      <h1 class="game-over-title">
        Game Over
      </h1>
      <div class="game-over-points">
        You have achieved $ {{ points }}.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameOver",
  props: {
    points: {
      required: true,
      type: Number,
      default: 0,
    }
  }
};
</script>

<style scoped>
.game-over {
  align-items: center;
  background-color: #1B0C21;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
}

.game-over h1 {
  font-size: 60px;
}

.game-over-points {
  font-size: 40px;
}

</style>
