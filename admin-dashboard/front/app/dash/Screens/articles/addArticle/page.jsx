'use client'
import React, { useState } from 'react';
import axios from 'axios';
import "./addArticle.css"

const AddArticle = () => {
      const [article, setArticle] = useState({
            content: '',
            Author: '',
            img: '',
            date: '',
            title: ''
      });

      const handleChange = (e) => {
            const { name, value, files } = e.target;
            // If the input type is file, handle the file upload
            if (name === 'img' && files && files[0]) {
                  const reader = new FileReader();
                  reader.onload = function (event) {
                        setArticle({ ...article, [name]: event.target.result });
                  };
                  reader.readAsDataURL(files[0]);
            } else {
                  setArticle({ ...article, [name]: value });
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await axios.post('http://localhost:4646/articles/add', article);
                  setArticle({
                        content: '',
                        Author: '',
                        img: '',
                        date: '',
                        title: ''
                  });
                  alert('Article submitted successfully!');
            } catch (error) {
                  console.error('Error submitting article:', error);
                  alert('Failed to submit article.');
            }
      };

      return (
            <div className="full_addArticle_container">
                  <form onSubmit={handleSubmit} className="form">
                        <input type="text" placeholder="title" name="title" required onChange={handleChange} value={article.title} />
                        <input type="text" placeholder="Author" name="Author" required onChange={handleChange} value={article.Author} />
                        <input
                              type="date" // Change input type to date
                              placeholder="date"
                              name="date"
                              required
                              value={article.date}
                              onChange={handleChange}
                        />
                        <input type="file" accept="image/*" placeholder="img" name="img" onChange={handleChange} />
                        <textarea
                              name="content"
                              id="content"
                              rows="16"
                              placeholder="content"
                              onChange={handleChange}
                              value={article.content}
                        ></textarea>
                        <button type="submit">Submit</button>
                  </form>
            </div>
      );
};

export default AddArticle;
