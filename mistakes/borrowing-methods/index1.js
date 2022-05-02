const student = {
  scores: [10, 9, 8, 10, 10],
  avgScore: null,
  calculateAvgScore: function () {
    let sum = 0;
    for (const score of this.scores) {
      sum = sum + score;
    }
    this.avgScore = sum / this.scores.length;
  },
};

const anotherStudent = {
  scores: [10, 9, 9, 10, 10],
  avgScore: null,
};

anotherStudent.avgScore = student.calculateAvgScore();
