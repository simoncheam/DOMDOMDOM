const newDiv = document.createElement('div'); //create div
newDiv.className = 'header-container';  // names div

console.log(newDiv); //console log div name


document.addEventListener('DOMContentLoaded', function () {

    document.body.appendChild(newDiv);


    /// ( 1 ) When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body
});
    const myBtn = document.createElement('button'); // creating element of my button
    const btnText = document.createTextNode('Add Square'); // Create button text 
    myBtn.id='pizza'; ///assigning ID
    myBtn.appendChild(btnText);
    newDiv.appendChild(myBtn);



/// ( 2 ) When the button is clicked, a new div should be added to the page


let divCounter = 1; 

myBtn.addEventListener('click', function(){  // launch function via click event on button ID
    
    const div = document.createElement('div');
    div.className = 'square';
    div.id= divCounter; ///assigning ID via counter
    
   
    //div.textContent =  +divCounter;
    //div.textContent = box;
    document.body.appendChild(div);
    

    divCounter += 1;


    //console.log('Button Test here???');  // log if function worked
     });

/// The div should be a black square  XXXXXXXXX  -- DONE -- XXXXXXXXX
// The squares should flow horizontally across the page  XXXXXXXXX  -- DONE -- XXXXXXXXX
// When there is no more room, they should wrap to the next line  XXXXXXXXX  -- DONE -- XXXXXXXXX
//  All of these div elements added to the page should share a single class name of your choosing XXXXXXXXX  -- DONE -- XXXXXXXXX
// Each div should have an id with a numerical value equivalent to the total number of squares that have been added so far since page load when the Add Square button is clicked XXXXXXXXX  -- DONE -- XXXXXXXXX

 // Ex: 7 squares have been added to the page since page load. When the button is clicked, another square should be added to the page, and it should have id="8". XXXXXXXXX  -- DONE -- XXXXXXXXX

// You should not run into a case where two elements have the same id ever (even if squares are removed) XXXXXXXXX  -- DONE -- XXXXXXXXX

// When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square


div.addEventListener('mouseover', function(){

console.log('mouseover ' +divCounter);
div.textContent =  divCounter;

//div[i].style.color = random_item(colorArray);

}


)

/// >>>>>>>>>>>>>  RESUME HERE 6/23

// When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)  


//------------------------- Random color array

// {{{{   Create array of colors here }}}}

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966'];

function random_item(colorArray){
    return colorArray[Math.floor(Math.random()*colorArray.length)];
    };
    
    console.log(random_item(colorArray));


//-------------------------

// When a square is double clicked, the following should occur:

    // If the id of the square is even:
        // The square after the clicked square should be removed from the page
        // If there isn't a square after the clicked square, display an alert indicating so

    // If the id of the square is odd:
        // The square before the clicked square should be removed from the page
        // If there isn't a square before the clicked square, display an alert indicating so


