import data from "../data/questions.json";

const fakeAnswers = [
  "Febtober!",
  "I'm Batman",
  "I don't know where it went, I'm confused.",
  "Threeve. A combination of 3 and 5 and you wagered Texas.",
];

const fakeFetch = (response) => {
  const waitTime = parseInt(Math.random() * 800);
  const p = new Promise((resolve) =>
    setTimeout(() => resolve(response), waitTime)
  );
  return p;
};

export default {
  computed: {
    categories() {
      // get set of the unique categories in the data
      return [...new Set(data.map(({ category }) => category))].slice(0, 5);
    },
  },

  methods: {
    allQuestionsCompleted() {

    },
    checkAnswer(question, ans) {
      const found = data.find((q) => q.question === question);
      if (!found) {
        return false;
      }
      return fakeFetch(found.answer === ans);
    },
    getTotalQuestions() {
      return data.filter(({ category }) => this.categories.includes(category)).length;
    },
    // Return a list of questions
    fetchQuestions() {
      const questions = {};

      // I took the liberty of improving the structure of this data in order to perform the item search by category.

      data
        .filter(({ category }) => this.categories.includes(category))
        .forEach(({ category, value, question, answer }) => {
          if (!questions[category]) {
            questions[category] = [];
          }

          questions[category] = [
            ...questions[category],
            { 
              value,
              question,
              answers: [...fakeAnswers, answer],
              correctAnswer: answer,
              category,
            },
          ];
        });

      return fakeFetch(questions);
    },
  },
};
