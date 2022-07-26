<template>
  <div class="game-points">
    <div class="game-points-header">
      <h4 class="game-points-title">Player Points</h4>
    </div>
    <div class="game-points-score">
      $ {{ points }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GamePoints',
    props: {
        points: {
            required: true,
            type: Number
        }
    }
  }
</script>

<style scoped>
  .game-points {
    background-color: #1B0C21;
    border: 4px solid #F6C151;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0px 0px 10px #F6C151;
    text-align: center;
    width: 300px;
  }

  .game-points-header {
    background-color: #fff;
  }

  .game-points-header h4 {
    color: #000;
    margin: 0;
  }

  .game-points-header,
  .game-points-score {
    padding: 20px;
  }
</style>
