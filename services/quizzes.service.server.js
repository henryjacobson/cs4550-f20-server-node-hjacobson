let quizzes = require("./quizzes.json")

const findAllQuizzes = () =>
    quizzes

const findQuizById   = (qid) =>
    quizzes.find(q => q._id === qid)

module.exports = {
    findAllQuizzes,
    findQuizById
}
