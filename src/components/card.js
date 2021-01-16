import axios from "axios";

const Card = (article) => {
  
  const cards = document.createElement('div');
  const head = document.createElement('div');
  const auth = document.createElement('div');
  const imgContain = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');
  
  cards.classList.add('card')
  head.classList.add('headline')
  auth.classList.add('author')
  imgContain.classList.add('img-container')

  head.textContent = `${article.headline}`;
  image.setAttribute('src', article.authorPhoto);
  span.textContent = `${article.authorName}`;

  cards.appendChild(head)
  head.appendChild(auth)
  auth.appendChild(imgContain)
  imgContain.appendChild(image)
  cards.appendChild(span)

  cards.addEventListener('click', (event) =>{
    console.log(head);
    console.log(cards);
  })
  return cards;
} 
  
  
  const cardAppender = (selector) => {
  const cardContain = document.querySelector(selector);
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    const javaArray = res.data.articles.javascript;
    javaArray.forEach((cards) => {
      cardContain.appendChild(Card(cards));
      console.log(res.data)
    });
  })
  .catch((err) => {
    console.log(err);
  });
  };

  export { Card, cardAppender }
// "articles": {
//   "bootstrap": [
//       {
//           "authorName": "FIDO WALKSALOT",
//           "authorPhoto": "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
//           "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//           "id": "a1048ef5-6a28-44b7-9d79-408cc7d77598"
//       },
//       {
//           "authorName": "MAX GOODBOYE",
//           "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
//           "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
//           "id": "cd8e700c-c62d-4db1-8832-285c9aadd490"
//       },
//       {
//           "authorName": "MAX GOODBOYE",
//           "authorPhoto": "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
//           "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
//           "id": "427bca68-1bc9-4db1-98ab-bbf90a7988ff"
//       }
//   ],

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

