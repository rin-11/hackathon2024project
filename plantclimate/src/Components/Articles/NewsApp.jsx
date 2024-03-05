import React, { useEffect, useState } from 'react';
import './NewsApp.css'; 
import axios from 'axios';

const NewsApp = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  // Function to fetch all news articles
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
    <div className="news">
      <div className="news-container">
        {newsArticles.length > 0 ? (
          newsArticles.map((article, index) => (
            <div key={index} className="news-item">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2>{article.title}</h2>
                <img src={article.thumbnail} alt="article-thumbnail" className="news-image" />
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

export default NewsApp;
