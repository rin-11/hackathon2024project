// MyNews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyNews.css'; // Assuming you create a separate CSS file for MyNews

const MyNews = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/news`);
      setNewsArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="my-news">
      <div className="my-news-container">
        {newsArticles.length > 0 ? (
          newsArticles.map((article, index) => (
            <div key={index} className="my-news-item">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2>{article.title}</h2>
                <img src={article.thumbnail} alt="article-thumbnail" className="my-news-image" />
                <p>Published: {new Date(article.published).toLocaleDateString()}</p>
                <p>Source: {article.source}</p>
              </a>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyNews;
