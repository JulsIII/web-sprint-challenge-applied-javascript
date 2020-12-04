// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    ///int eles
    const hCont = document.querySelector('.header-container');
    const hMain = document.createElement('div');
    const hSpanA = document.createElement('span');
    const hH1 = document.createElement('h1');
    const hSpanB = document.createElement('span');

    //set classes, atrib, text
    hMain.classList.add('header');
    hSpanA.classList.add('date');
    hSpanA.textContent = `MARCH 28, 2020`;
    hH1.textContent = `Lambda Times`;
    hSpanB.classList.add('temp');
    hSpanB.textContent = `98°`;

    //hierarchy
    hCont.appendChild(hMain);
    hMain.appendChild(hSpanA);
    hMain.appendChild(hH1);
    hMain.appendChild(hSpanB);

    //return
    return hMain;
}

Header();