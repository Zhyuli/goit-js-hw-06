const nameInput = document.querySelector('#name-input');
// console.log(nameInput);

const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

const input = (event) => {
    nameOutput.textContent = nameInput.value !== ''
        ? event.currentTarget.value : 'Anonymous';
   
};
 
nameInput.addEventListener("input", input)
 

