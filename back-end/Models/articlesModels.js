// articleModel.js

const db = require('../database/index');

const Article = {
  getAllArticles: (callback) => {
    db.query('SELECT * FROM article', callback);
  },
  
  getArticleById: (id, callback) => {
    db.query('SELECT * FROM article WHERE id = ?', [id], callback);
  },
  
  createArticle: (articleData, callback) => {
    db.query('INSERT INTO article SET ?', [articleData], callback);
  },
  
  updateArticle: (id, articleData, callback) => {
    db.query('UPDATE article SET ? WHERE id = ?', [articleData, id], callback);
  },
  
  deleteArticle: (id, callback) => {
    db.query('DELETE FROM article WHERE id = ?', [id], callback);
  }
};

module.exports = Article;
