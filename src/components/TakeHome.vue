<template>
  <div class="take-home">
    <div>
      <div v-if="topics.length" class="take-home-points">
        <GamePoints :points="points" />
      </div>
      <div class="take-home-game-boarding">
        <div v-for="topic in topics" :key="topic">
          <div class="take-home-box">
            <GameBoxTopic :value="topic" />
          </div>
          <div class="take-home-box" v-for="item in questions[topic]" :key="item.value">
            <GameBoxMoney
              @on-press="onPressBoxItem(item)"
              :value="item.value"
              :isDisabled="isAnsweredCategoryItem(topic, item.value)"
            />
          </div>
        </div>
      </div>
    </div>
    <GameQuestion
      @on-answer-clicked="onAnswerClicked"
      @on-question-closed="onQuestionClosed"
      v-if="selectedOption"
      :question="this.selectedOption.question"
      :answers="this.selectedOption.answers"
      :correct-answer="this.selectedOption.correctAnswer"
    />
    <GameOver v-if="isGameCompleted" :points="points" />
  </div>
</template>

<script>
import JeopardyGame from "../mixins/Jeopardy";
import GameBoxMoney from "../components/GameBoxMoney";
import GameBoxTopic from "../components/GameBoxTopic";
import GameQuestion from "../components/GameQuestion";
import GamePoints from "../components/GamePoints";
import GameOver from "../components/GameOver";

export default {
  name: "TakeHome",
  mixins: [JeopardyGame],
  components: {
    GameBoxMoney,
    GameBoxTopic,
    GameQuestion,
    GamePoints,
    GameOver,
  },
  methods: {
    onPressBoxItem: function(item) {
      this.selectedOption = item;
    },
    onQuestionClosed: function() {
      this.selectedOption = null;
    },
    onAnswerClicked: async function(answer) {
      if (!this.selectedOption) {
        return;
      }

      const { category } = this.selectedOption;
      
      const isCorrect = await this.checkAnswer(
        this.selectedOption.question,
        answer
      );

      const questionPoints = parseInt(
        this.selectedOption.value.replace("$", "")
      );

      if (isCorrect) {
        this.points += questionPoints;
      } else if (this.points >= questionPoints) {
        this.points -= questionPoints;
      } else {
        this.points = 0;
      }

      if (!this.answeredQuestions[category]) {
        this.answeredQuestions[category] = [];
      }

      this.answeredQuestions[category].push(
        this.selectedOption.value
      );

      if (this.remainingQuestions > 0) {
        this.remainingQuestions--;
      }
      
      setTimeout(() => {
        this.selectedOption = null;
        this.isGameCompleted = this.remainingQuestions === 0;
      }, 2000);
    },
    isAnsweredCategoryItem: function(category, value) {
      const answeredQuestions = this.answeredQuestions[category];

      if (answeredQuestions && answeredQuestions.includes(value)) {
        return true;
      }

      return false;
    },
  },
  data: function() {
    return {
      questions: {},
      topics: [],
      answeredQuestions: {},
      selectedOption: null,
      points: 0,
      remainingQuestions: 0,
      isGameCompleted: false,
    };
  },
  created: async function() {
    this.questions = await this.fetchQuestions();
    this.remainingQuestions = this.getTotalQuestions();
    this.topics = Object.keys(this.questions).map((key) => key);
  },
};
</script>

<style scoped>
.take-home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
}

.take-home-points {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.take-home-game-boarding {
  display: flex;
  justify-content: space-between;
}

.take-home-box {
  margin: 10px;
}
</style>
