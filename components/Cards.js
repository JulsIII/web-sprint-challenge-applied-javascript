// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// import axios from "axios";
// console.log(axios);

axios
.get(`https://lambda-times-api.herokuapp.com/articles`)
.then((res) => {
    console.log(res.data.articles);
    
    const articles = res.data.articles;

    Object.keys(articles).forEach(topic => {
        
        articles[topic].forEach(tInfo => {
            const newACard = artCardMaker(tInfo)
            cardsDiv.appendChild(newACard)

        })
    })
}) 
.catch((err) => {
    console.log('err log', err)
});

const cardsDiv = document.querySelector('.cards-container');

function artCardMaker(aIndex) {

    ///int eles
    const aCard = document.createElement('div');
    const aHeadline = document.createElement('div');
    const aAuthor = document.createElement('div');
    const aImgCont = document.createElement('div');
    const aImg = document.createElement('img');
    const aSpan = document.createElement('span');

    //set classes, atrib, text
    aCard.classList.add('card');
    aHeadline.classList.add('headline');
    aAuthor.classList.add('author');
    aHeadline.textContent = aIndex.headline;
    aImgCont.classList.add('img-container');
    aImg.src = aIndex.authorPhoto;
    aSpan.textContent = `By ${aIndex.authorName}`

    //hierarchy
    aCard.appendChild(aHeadline);
    aCard.appendChild(aAuthor);
    aAuthor.appendChild(aImgCont);
    aAuthor.appendChild(aSpan);
    aImgCont.appendChild(aImg);

    //interact
    aCard.addEventListener('click', () => {
    console.log(aIndex.headline);
  })

    //return
    return aCard;
}