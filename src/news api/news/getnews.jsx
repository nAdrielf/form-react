import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Konten from '..';

const GetNews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const artkl = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=car&from=2021-12-04&sortBy=publishedAt&apiKey=1841a9636e894c1ca4320c39eaf63ed2'
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    artkl();
  }, []);
  return (
    <div>
      {articles.map((article, index) => {
        console.log(index);
        return (
          <Konten
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default GetNews;
