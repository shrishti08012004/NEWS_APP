import News from "../models/news.js";
import { URL } from "../utils/config.js"
import { getNews } from "./api-client.js";

/*
Bring the data and store it in model 
CRUD
Create , Read, Update, Delete
*/


export const newsService = {
  async readNews() {
    const news = await getNews(URL);
    console.log('News are ', news.articles);
    
    if (!news.articles || !Array.isArray(news.articles)) {
      return []; // handle edge case gracefully
    }

    // Map to News model and RETURN the array
    const allNews = news.articles.map((currentNews) =>
      new News(
        currentNews['title'],
        currentNews['description'],
        currentNews['url'],
        currentNews['urlToImage']
      )
    );
    
    return allNews; 
  },

  markRead() { },

  markReadLater() { }
}

