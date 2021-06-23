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
    const box = document.createElement('box');
    //div.textContent = 'I am a new div added to the page, welcome div #' +divCounter;
    div.textContent = box;
    document.body.appendChild(div);
    div.appendChild(box);

    divCounter += 1;


    //console.log('Button Test here???');  // log if function worked
     });


    /// The div should be a black square


    // The squares should flow horizontally across the page

        // When there is no more room, they should wrap to the next line


//  All of these div elements added to the page should share a single class name of your choosing


// Each div should have an id with a numerical value equivalent to the total number of squares that have been added so far since page load when the Add Square button is clicked


    // Ex: 7 squares have been added to the page since page load. When the button is clicked, another square should be added to the page, and it should have id="8".


    // You should not run into a case where two elements have the same id ever (even if squares are removed)

// When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square



// When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)


// When a square is double clicked, the following should occur:

    // If the id of the square is even:
        // The square after the clicked square should be removed from the page
        // If there isn't a square after the clicked square, display an alert indicating so

    // If the id of the square is odd:
        // The square before the clicked square should be removed from the page
        // If there isn't a square before the clicked square, display an alert indicating so


