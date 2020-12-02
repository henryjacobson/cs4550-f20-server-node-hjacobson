const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () =>
    quizzesModel.find()

const findQuizById = (quizId) =>
    quizzesModel.findOne({"_id": quizId}).populate("questions")

module.exports = { findAllQuizzes, findQuizById }
