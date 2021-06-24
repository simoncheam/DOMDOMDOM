
// setup container div
const container = document.createElement('div'); //create div
container.className = 'header-container';  // names div

// button div
const buttonDiv = document.createElement('div'); //create div

// square div
const squareDiv = document.createElement('div'); //create div

/// put divs >>> container
container.appendChild(buttonDiv);
container.appendChild(squareDiv);

//************************************************

document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(container);
    /// ( 1 ) When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body (DONE)
});

//*****

    const myBtn = document.createElement('button'); 
    const btnText = document.createTextNode('Add Square'); 
    myBtn.id='pizza'; ///assigning ID
    myBtn.appendChild(btnText);
    buttonDiv.appendChild(myBtn);

   // const newSquare = document.createElement('div');

/// ( 2 ) When the button is clicked, a new div should be added to the page ********  -- DONE -- ********

let divCounter = 1; 

myBtn.addEventListener('click', function(){  // launch function via click event on button ID
    console.log('clicked!');
    const newSquare = document.createElement('div');
    newSquare.className = 'div';
    newSquare.id= divCounter; ///assigning ID via counter
    //container.appendChild(newSquare);
    
    divCounter += 1;  // increment ID #
    squareDiv.appendChild(newSquare);


    // Mouseover event 
    newSquare.addEventListener('mouseover', function(){

        console.log('mouseover square # ' +newSquare.id);
        newSquare.textContent = newSquare.id;
    });

        // Mouseout event 
        newSquare.addEventListener('mouseout', function(){

            console.log('mouse out square # ' +newSquare.id);
            newSquare.textContent = '';
        });
        
            // Click event 
            newSquare.addEventListener('click', function(){
                console.log('clicked square # ' +newSquare.id);
                newSquare.textContent = '';
                // When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)  
                /// rgd(r,g,b);
                const r = Math.floor(Math.random()*256);
                const g = Math.floor(Math.random()*256);
                const b = Math.floor(Math.random()*256);
                newSquare.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            });
        
            // Double click event

                // When a square is double clicked, the following should occur:

                
                    // If the id of the square is ODD:
                        // The square before the clicked square should be removed from the page
                        // If there isn't a square before the clicked square, display an alert indicating so

                newSquare.addEventListener('dblclick', function(){

                console.log('Current Shape: \t', newSquare);
                console.log('Previous Shape: \t', newSquare.previousSibling);
                console.log('Next Shape: \t', newSquare.nextSibling);

                    // If the id of the square is EVEN:
                        // The square after the clicked square should be removed from the page
                        // If there isn't a square after the clicked square, display an alert indicating so

                        //*******************************************//

//  EVEN - ODD Square Sibling Removal Logic 

                if (newSquare.id % 2 == 0){

                    console.log('dblclick = EVEN: ');
                    console.log('Next Shape Should be removed: \t', newSquare.nextSibling);

                    // remove next sibling
                    squareDiv.removeChild(newSquare.nextSibling); /// remove next sibling from parent

                    if ( newSquare.nextSibling === null){
                        alert('ERROR! Cannot remove next sibling :( ');
                        console.log('ERROR! Cannot remove next sibling :( ');

                    } else {
                
                    console.log('dblclick = ODD: ');
                    };

                }

                if (newSquare.id % 2 == 1){  

                    console.log('dblclick = ODD: ');
                    console.log('Previous Shape Should be removed: \t', newSquare.previousSibling);

                    // remove previous sibling
                    squareDiv.removeChild(newSquare.previousSibling); /// remove next previous from parent

                    if ( newSquare.previousSibling === null){
                        alert('ERROR! Cannot remove previous sibling :( ');
                        console.log('ERROR! Cannot remove previous sibling :( ');


                    };


                    // If the id of the square is odd:
                        // The square before the clicked square should be removed from the page
                        // If there isn't a square before the clicked square, display an alert indicating so


                }

                })

});
   
        
/// The div should be a black square  ********  -- DONE -- ********
// The squares should flow horizontally across the page  ********  -- DONE -- ********
// When there is no more room, they should wrap to the next line  ********  -- DONE -- ********
//  All of these div elements added to the page should share a single class name of your choosing ********  -- DONE -- ********
// Each div should have an id with a numerical value equivalent to the total number of squares that have been added so far since page load when the Add Square button is clicked ********  -- DONE -- ********

 // Ex: 7 squares have been added to the page since page load. When the button is clicked, another square should be added to the page, and it should have id="8". ********  -- DONE -- ********

// You should not run into a case where two elements have the same id ever (even if squares are removed) ********  -- DONE -- ********

// When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square ********  -- DONE -- ********



