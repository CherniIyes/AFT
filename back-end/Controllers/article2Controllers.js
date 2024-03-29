// articleController.js

const Article2 = require('../Models/article2Models');

exports.getAllArticles = (req, res) => {
  Article2.getAllArticles((err, articles) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(articles);
  });
};

exports.getArticleById = (req, res) => {
  const { id } = req.params;
  Article2.getArticleById(id, (err, article) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  });
};

exports.createArticle = (req, res) => {
  const articleData = req.body;
  Article2.createArticle(articleData, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'Article created successfully', id: result.insertId });
  });
};

exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const articleData = req.body;
  Article2.updateArticle(id, articleData, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Article updated successfully' });
  });
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  Article2.deleteArticle(id, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Article deleted successfully' });
  });
};
