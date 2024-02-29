// articleModel.js

const db = require('../database/index');

const Article2 = {
  getAllArticles: (callback) => {
    db.query('SELECT * FROM article2', callback);
  },
  
  getArticleById: (id, callback) => {
    db.query('SELECT * FROM article2 WHERE id = ?', [id], callback);
  },
  
  createArticle: (articleData, callback) => {
    db.query('INSERT INTO article2 SET ?', [articleData], callback);
  },
  
  updateArticle: (id, articleData, callback) => {
    db.query('UPDATE article2 SET ? WHERE id = ?', [articleData, id], callback);
  },
  
  deleteArticle: (id, callback) => {
    db.query('DELETE FROM article2 WHERE id = ?', [id], callback);
  }
};

module.exports = Article2;
