// articleRoutes.js

const express = require('express');
const router = express.Router();
const article2Controllers = require('../Controllers/article2Controllers')

router.get('/', article2Controllers.getAllArticles);
router.get('/:id', article2Controllers.getArticleById);
router.post('/', article2Controllers.createArticle);
router.put('/:id', article2Controllers.updateArticle);
router.delete('/:id', article2Controllers.deleteArticle);

module.exports = router;
