import {URL} from '../utils/config.js';
 export async function getNews(URL){
  //ES8 onwards (await and async)
  try{
  const response = await fetch(URL);
  const data = await response.json();
  console.log('Data is ', data);
  return data; //Wrap Promise 
  }
  catch(error){
    throw error;
  }
  //Make API Call
  //fetch - ES6 (2015) , Promise
  //Async (Non Blocking)
  /*const promise = fetch(URL); // Wrapper Method XMLHttpRequest (2000)
  console.log('Promise is ', promise);
  promise.then(function(response){
     //response - Header + Body (JSON)
     const pr = response.json(); //JSON Convert Object
     pr.then(function(data){
       console.log('Data Rec ', data);
     }).catch(function(error){
       console.log('Invalid JSON ', error);
     })
  }).catch(function(error){
    console.log('Error During Fetch News ', err);
  })*/
  //Promise Stages
  // 1. Pending Stage
  // 2. Fullfilled Stage
  // 3. Rejeted Stage
}
// getNews(URL); // Function call for Testing