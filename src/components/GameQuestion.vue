<template>
  <div class="game-question">
    <div class="game-question-wrapper">
      <div class="game-question-inner">
        <h3 class="game-question-sentence">Question: {{ this.question }}</h3>
        <ul class="game-question-answers">
          <li
            class="game-question-answer"
            v-for="answer in answers"
            v-on:click="!answerSelected && onAnswerClicked(answer)"
            v-bind:class="{
              'game-question-answer--correct':
                answerSelected && answer === correctAnswer && answer === answerSelected,
              'game-question-answer--wrong':
                answerSelected && answer !== correctAnswer && answer === answerSelected,
            }"
            :key="answer"
          >
            {{ answer }}
          </li>
        </ul>
      </div>
    </div>
    <div class="game-question-overlay"></div>
  </div>
</template>

<script>
import JeopardyGame from "../mixins/Jeopardy";

export default {
  name: "GameQuestion",
  mixins: [JeopardyGame],
  data: function() {
    return {
      answerSelected: null,
    };
  },
  props: {
    question: {
      required: true,
      type: String,
    },
    answers: {
      required: true,
      type: Array,
    },
    correctAnswer: {
      required: true,
      type: String,
    },
  },
  methods: {
    onAnswerClicked: async function(answer) {
      this.answerSelected = answer;
      this.$emit("on-answer-clicked", answer);
    },
  },
};
</script>

<style scoped>
.game-question {
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.game-question-wrapper {
  align-items: center;
  background-color: #fff;
  display: flex;
  font-size: 20px;
  position: absolute;
  width: 50%;
  height: 70%;
  padding: 0px 40px 0px 40px;
  z-index: 2;
}

.game-question-inner {
  width: 100%;
}

.game-question-close-button:hover {
  background-color: #fff;
  border: 2px solid #452651;
  color: #452651;
}

.game-question-overlay {
  background-color: #1b0c21;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.game-question-sentence {
  color: #1b0c21;
  margin-bottom: 40px;
}

.game-question-answers {
  padding-left: 0;
}

.game-question-answer {
  border: 1px solid #1b0c21;
  color: #1b0c21;
  cursor: pointer;
  list-style: none;
  margin-bottom: 20px;
  padding: 20px;
  max-width: 100%;
}

.game-question-answer:hover {
  background-color: #1b0c21;
  color: #fff;
}

.game-question-answer--correct,
.game-question-answer--correct:hover {
  background-color: green;
  border: 1px solid green;
  color: #fff;
  font-weight: bold;
}

.game-question-answer--wrong,
.game-question-answer--wrong:hover {
  background-color: red;
  border: 1px solid red;
  color: #fff;
}
</style>
