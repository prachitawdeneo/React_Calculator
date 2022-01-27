// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="calc-screen" disabled> element
const display = document.querySelector('.calc-screen');

// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

  //getting div id for displaying history
  const history=document.getElementById("history");

// calculate function
function calculate(event) {
    console.log(event);
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
    console.log(clickedButtonValue);

    
    
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
        history.append(clickedButtonValue);
        history.append(display.value);
        linebreak = document.createElement("br");
        history.appendChild(linebreak);
        
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
      linebreak = document.createElement("br");
      history.appendChild(linebreak);
    } /* else if (clickedButtonValue === '**') {
        const val=display.value;
        display.value= 
        console.log(display.value);
        console.log(val);
        
        history.append(clickedButtonValue);
    } */else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
      history.append(clickedButtonValue);
      
    }
  }
  
  

  







