
// setup container div
const container = document.createElement('div'); //create div
container.className = 'header-container';  // create class name for div

// button div
const buttonDiv = document.createElement('div'); //create div for button

// square div
const squareDiv = document.createElement('div'); //create div for square
squareDiv.id = 'squareDivId'; // create ID for square div

/// put buttondiv and squarediv >>> container
container.appendChild(buttonDiv);
container.appendChild(squareDiv);

//************************************************
 /// ( 1 ) When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body 
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(container);
   
});

//*****

    const myBtn = document.createElement('button'); // create button element
    const btnText = document.createTextNode('Add Square'); //add text to button element
    myBtn.id='pizza'; ///assigning ID to button div
    myBtn.appendChild(btnText); // append the button text to the button
    buttonDiv.appendChild(myBtn); // append the button element to the button div
    buttonDiv.classList.add('button-container'); //adds button-container class to the buttondiv

   // const newSquare = document.createElement('div');

/// ( 2 ) When the button is clicked, a new div should be added to the page ********  -- DONE -- ********

let divCounter = 1; // set up counter for button div id

myBtn.addEventListener('click', function(){  // launch function via click event on button ID

    console.log('clicked!'); //click check

    const newSquare = document.createElement('div'); //create new square element div
    newSquare.className = 'div'; //create class name for newSquare element
    newSquare.id= divCounter; ///assigning ID via counter
    //container.appendChild(newSquare);
    
    divCounter += 1;  // increment ID #
    squareDiv.appendChild(newSquare); //appends new square to the squarediv
    squareDiv.classList.add('square-container'); // adds square-container class name to the squarediv


    // Mouseover event 
    newSquare.addEventListener('mouseover', function(){         // mouseover = fires function for labeling

        console.log('mouseover square # ' +newSquare.id);
        newSquare.textContent = newSquare.id;
    });

        // Mouseout event 
        newSquare.addEventListener('mouseout', function(){  // mouseoute = fires function for label removal

            console.log('mouse out square # ' +newSquare.id);
            newSquare.textContent = '';

        }); /// OK
        
            // Click event 
            newSquare.addEventListener('click', function(){           // click = fires random bg color assignment
                console.log('clicked square # ' +newSquare.id);
                newSquare.textContent = '';
                // When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)  
                /// rgd(r,g,b);
                const r = Math.floor(Math.random()*256);
                const g = Math.floor(Math.random()*256);
                const b = Math.floor(Math.random()*256);
                newSquare.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';  // random 16M color possibility calc
            });
        
            // Double click event

                // When a square is double clicked, the following should occur:

                
                    // If the id of the square is ODD:
                        // The square before the clicked square should be removed from the page
                        // If there isn't a square before the clicked square, display an alert indicating so

                newSquare.addEventListener('dblclick', function(){   // bdl = fires square removal logic

                    //console log current/previous/next square

                    console.log('Current Shape: \t', newSquare);
                    console.log('Previous Shape: \t', newSquare.previousSibling);
                    console.log('Next Shape: \t', newSquare.nextSibling);

                        // If the id of the square is EVEN:
                            // The square after the clicked square should be removed from the page
                            // If there isn't a square after the clicked square, display an alert indicating so

                //*******************************************//

                //  EVEN - ODD Square Sibling Removal Logic 

                //*******************************************//



                    // EVEN = removes next sibling
                    if (newSquare.id % 2 == 0){   // If even logic ( IF - ELSE)

                        console.log('dblclick = EVEN: ');
                        console.log('Next Shape Should be removed: \t', newSquare.nextSibling);

                        
                        if ( newSquare.nextSibling == null){       // nested if: Even + next is null, then error
                            alert('ERROR! Cannot remove next sibling :( ');
                            console.log('ERROR! Cannot remove next sibling :( ');
                            
                        } else {   // else removes next sibling
                            
                        
                            // EVEN = removes next sibling
                            squareDiv.removeChild(newSquare.nextSibling); /// remove next sibling from parent

            
                        };

                    }

                    // ODD = removes previous sibling
                    if (newSquare.id % 2 == 1){    /// IF Even >>> (IF/ELSE)

                        console.log('dblclick = ODD: ');
                        console.log('Previous Shape Should be removed: \t', newSquare.previousSibling);

                        if ( newSquare.previousSibling == null){             // if previous sib is null >>> Error
                            alert('ERROR! Cannot remove previous sibling :( ');
                            console.log('ERROR! Cannot remove previous sibling :( ');
                            
                        } else {   // Else removes previous sibling
                            
                            // ODD = remove previous sibling
                            squareDiv.removeChild(newSquare.previousSibling); /// remove next previous from parent

                        };
                        

                    }


                })

});
   



