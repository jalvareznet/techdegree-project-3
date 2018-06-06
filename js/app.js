//1.- When the page loads, give focus to the first text field
document.getElementById('name').focus();

//2.- If job role is in other --> text field is revealed.
const fieldset = document.querySelector('fieldset');

fieldset.addEventListener('change', (e) => {
  const selected = e.target.value;
  const otherValue = document.querySelector('option[value="other"]');
  const other = otherValue.value;

  if (selected === other ) {
      //2.1.- create input element with text type.
      const inputField = document.createElement('input');
      inputField.type = 'text';
      //2.2.- create atribute id and placeholder, assign the value and set it to the input.
      const idAttr = document.createAttribute('id');
      const placeholderAttr = document.createAttribute('placeholder');
      idAttr.value = 'other-title';
      placeholderAttr.value = 'Your Job Role';
      inputField.setAttributeNode(idAttr);
      inputField.setAttributeNode(placeholderAttr);
      //2.3.- append input to the fieldset.
      fieldset.appendChild(inputField);
    }
    if( selected !== other ){
      const inputField = document.querySelector('#other-title')
    fieldset.removeChild(inputField);
  }
});

// //3.1 only display the color options that match the design selected.
//
// const shirtFieldset = document.querySelector('.shirt');
//
// shirtFieldset.addEventListener('click', (e) => {
//
//   const selected = e.target.value;
//
//   const jsPunsValue = document.querySelector('option[value="js puns"]');
//   const jsPuns = jsPunsValue.value;
//
//   const heartJsValue = document.querySelector('option[value="heart js"]');
//   const heartJs = heartJsValue.value;
//
//   if ( selected === jsPuns ) {
//     const tomato = document.querySelector('option[value="tomato"]');
//     tomato.style.display = 'none';
//     const steelblue = document.querySelector('option[value="steelblue"]');
//     steelblue.style.display = 'none';
//     const dimgrey = document.querySelector('option[value="dimgrey"]');
//     dimgrey.style.display = 'none';
//   } else if ( selected === heartJs ) {
//       const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
//       cornflowerblue.style.display = 'none';
//       const darkslategrey = document.querySelector('option[value="darkslategrey"]');
//       darkslategrey.style.display = 'none';
//       const gold = document.querySelector('option[value="gold"]');
//       gold.style.display = 'none';
//       }
// });
