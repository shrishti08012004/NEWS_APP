//Talking to View Layer (HTML)
//Talk to HTML (DOM)

import { newsService } from "../services/news-service.js";

  

//News Card Generate Dynamically (Based on JSON Data)
 /*
    <div class="col-4 mb-4">
        <div class="card" style="width: 100%;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
 */

// async  function prepareNews(){
//   //Get the Data from the Web API (api-client.js)
//   //Once you get the data then iterate the data and prepare the HTML (DOM)
//   const allNews = await newsService.readNews();
//   allNews.forEach(news=>printNews(news));
//   console.log('All News are ', allNews);
// }

async function prepareNews() {
  try {
    const allNews = await newsService.readNews();

    if (!Array.isArray(allNews)) {
      console.error("Expected an array, but got:", allNews);
      return; // Prevent further execution
    }

    allNews.forEach(news => printNews(news));
    console.log('All News are', allNews);
  } catch (err) {
    console.error("Error while preparing news:", err);
  }
}


function printNews(news){
 const newsId = document.querySelector('#news'); // get id
  const colDiv = document.createElement('div'); //<div> </div>
  colDiv.className = 'col-4'; // <div class = 'col-4>
  const cardDiv = document.createElement('div'); // <div class="card" style="width: 18rem;">
  cardDiv.className = 'card';
  cardDiv.style.width='100%';
  colDiv.appendChild(cardDiv);
   //<img src="..." class="card-img-top" alt="...">
   const img = document.createElement('img');
   img.src = news.image;
   img.className = 'card-img-top';
   cardDiv.appendChild(img);
   // <div class="card-body">
   const cardBody = document.createElement('div');
   cardBody.className = 'card-body';
   cardDiv.appendChild(cardBody);
   // <h5 class="card-title">Card title</h5>
   const h5 = document.createElement('h5');
   h5.className = 'card-title';
   h5.innerText = news.title;
   cardBody.appendChild(h5);
   // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
   const pTag = document.createElement('p');
   pTag.innerText = news.desc;
   pTag.className = 'card-text';
   cardBody.appendChild(pTag);
   //  <a href="#" class="btn btn-primary">Go somewhere</a>
   const aTag = document.createElement('a');
   aTag.href = news.url;
   aTag.className = 'btn btn-primary';
   aTag.innerText = 'Read more';
   cardBody.appendChild(aTag);
   
   newsId.appendChild(colDiv);
}

prepareNews();