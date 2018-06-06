//1.- When the page loads, give focus to the first text field
document.getElementById('name').focus();

//2.- If job role is in other --> text field is revealed.
const fieldset = document.querySelector('fieldset');

fieldset.addEventListener('change', (e) => {
  const selected = e.target.value;
  const otherValue = document.querySelector('option[value="other"]');
  const other = otherValue.value;

//if inputField already exists remove it. This is for remove when the option change.
  if( inputField = document.querySelector('#other-title')){
  fieldset.removeChild(inputField);
}
//if selected is equal to other then create and append the new field.
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
});

//question 1 --
//3.1 only display the color options that match the design selected.

  const shirtFieldset = document.querySelector('.shirt');
  const tomato = document.querySelector('option[value="tomato"]');
  const steelblue = document.querySelector('option[value="steelblue"]');
  const dimgrey = document.querySelector('option[value="dimgrey"]');
  const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
  const darkslategrey = document.querySelector('option[value="darkslategrey"]');
  const gold = document.querySelector('option[value="gold"]');

shirtFieldset.addEventListener('click', (e) => {

  const selected = e.target.value;

  const jsPunsValue = document.querySelector('option[value="js puns"]');
  const jsPuns = jsPunsValue.value;

  const heartJsValue = document.querySelector('option[value="heart js"]');
  const heartJs = heartJsValue.value;

  if ( selected === jsPuns ) {
    tomato.style.display = 'none';
    steelblue.style.display = 'none';
    dimgrey.style.display = 'none';
    cornflowerblue.style.display = 'block';
    darkslategrey.style.display = 'block';
    gold.style.display = 'block';
    }
  if ( selected === heartJs ) {
    tomato.style.display = 'block';
    steelblue.style.display = 'block';
    dimgrey.style.display = 'block';
    cornflowerblue.style.display = 'none';
    darkslategrey.style.display = 'none';
    gold.style.display = 'none';
    }
});
