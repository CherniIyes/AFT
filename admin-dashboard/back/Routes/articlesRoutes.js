// articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articlesControllers');

router.get('/getall', articleController.getAllArticles);
router.get('/getone/:id', articleController.getArticleById);
router.post('/add', articleController.createArticle);
router.put('/update/:id', articleController.updateArticle);
router.delete('/del/:id', articleController.deleteArticle);

module.exports = router;
