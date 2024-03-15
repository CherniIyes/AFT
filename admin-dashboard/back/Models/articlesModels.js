const db = require('../database/index');

const Article = {
  getAllArticles: (callback) => {
    db.query('SELECT * FROM article', callback);
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
