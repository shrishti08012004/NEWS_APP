# NEWS_APP
This is NewsApp

A dynamic web application that displays the latest news articles using a News API. Built using **HTML**, **CSS**, and **JavaScript**, this project demonstrates asynchronous data fetching, DOM manipulation, and modular JavaScript architecture.

## 📸 Demo

<img width="1873" height="944" alt="image" src="https://github.com/user-attachments/assets/ad7ce015-646d-4da3-a73f-883d3f362a37" />


## ✅ Features

- Fetches real-time news articles from an API
- Displays headline, description, image, and source
- Modular JavaScript with separate service and model layers
- Asynchronous data handling using `async/await`
- Clean and responsive UI layout

## 📁 Folder Structure

NewsApp/
│
├── index.html # Main HTML file
├── style.css # Stylesheet
├── main.js # Entry point for DOM handling
├── api-client.js # Handles fetch requests from the News API
├── news-model.js # Defines the News class structure
├── news-service.js # Processes data and maps it to News objects
└── README.md # Project documentation

markdown
Copy
Edit

## ⚙️ How It Works

1. **main.js** calls `prepareNews()` to initiate the app.
2. `newsService.readNews()` in `news-service.js` fetches the news using `api-client.js`.
3. Data is converted into `News` objects via `news-model.js`.
4. The app then dynamically generates HTML elements and displays each news article.

#Live Demo:  https://shrishti08012004.github.io/NEWS_APP/

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NewsApp.git
   cd NewsApp
Open index.html in your browser.

(Optional) If you're using a live API key, configure it in api-client.js.

📦 Tech Stack
HTML

CSS

JavaScript (ES6+)

Fetch API
