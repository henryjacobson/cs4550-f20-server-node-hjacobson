const quizzesService = require("../services/quizzes.service.server")

module.exports = (app) => {

    const findAllQuizzes = (req, res) =>
        res.send(quizzesService.findAllQuizzes())

    const findQuizById   = (req, res) =>
        res.send(quizzesService.findQuizById(req.params['qid']))

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}
