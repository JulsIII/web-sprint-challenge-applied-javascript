// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from "axios";
console.log(axios);



axios
.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((res) => {
    console.log(res.data.topics);
    const topics = res.data.topics;
   
    topics.forEach(topic => { //takes callback that had array images
        // create dog card
      const newTopicTab = tabMaker(topic) //for each image use dogCardmaker, making cards. Dog Name can be changed!
        // console log done
      console.log('done') //confirm done making cards
        // append to entry point
        topicsDiv.appendChild(newTopicTab); //append the entry point area of website, and add the cards
    });

    }) 
.catch((err) => {

    console.log('err1 log', err)
});


const topicsDiv = document.querySelector('.topics');

function tabMaker(data) {
//inst elements
const tDiv = document.createElement('div');

//set stuff
tDiv.classList.add('tab');
//tDiv.textContent = data.topics;
//appends is above


//return
return tDiv;
}




