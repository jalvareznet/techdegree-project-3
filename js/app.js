//1.- When the page loads, give focus to the first text field
const inputName = document.getElementById('name');
inputName.focus();
const inputMail = document.getElementById('mail');
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

//3.1 only display the color options that match the design selected.

  const shirtFieldset = document.querySelector('.shirt');
  const tomato = document.querySelector('option[value="tomato"]');
  const steelblue = document.querySelector('option[value="steelblue"]');
  const dimgrey = document.querySelector('option[value="dimgrey"]');
  const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
  const darkslategrey = document.querySelector('option[value="darkslategrey"]');
  const gold = document.querySelector('option[value="gold"]');

  const divColors = document.querySelector('#colors-js-puns');
  divColors.style.display = 'none';

shirtFieldset.addEventListener('change', (e) => {

  const selected = e.target.value;

  const jsPunsValue = document.querySelector('option[value="js puns"]');
  const jsPuns = jsPunsValue.value;

  const heartJsValue = document.querySelector('option[value="heart js"]');
  const heartJs = heartJsValue.value;

  const selectedAttr = document.createAttribute('selected');

  if ( selected === jsPuns ) {
    divColors.style.display = 'block';
    tomato.removeAttribute('selected');
    cornflowerblue.setAttributeNode(selectedAttr);
    tomato.style.display = 'none';
    steelblue.style.display = 'none';
    dimgrey.style.display = 'none';
    cornflowerblue.style.display = 'block';
    darkslategrey.style.display = 'block';
    gold.style.display = 'block';
    }
  if ( selected === heartJs ) {
    divColors.style.display = 'block';
    cornflowerblue.removeAttribute('selected');
    tomato.setAttributeNode(selectedAttr);
    tomato.style.display = 'block';
    steelblue.style.display = 'block';
    dimgrey.style.display = 'block';
    cornflowerblue.style.display = 'none';
    darkslategrey.style.display = 'none';
    gold.style.display = 'none';
    }
  if ( selected === 'Select Theme') {
    divColors.style.display = 'none';
  }
});

//3.1 ”Register for Activities” section of the form:
const fieldsetActivities = document.querySelector('.activities');

const all = document.querySelector('input[name="all"]');
const frameworks = document.querySelector('input[name="js-frameworks"]');
const libs = document.querySelector('input[name="js-libs"]');
const express = document.querySelector('input[name="express"]');
const node = document.querySelector('input[name="node"]');
const buildTools = document.querySelector('input[name="build-tools"]');
const npm = document.querySelector('input[name="npm"]');

const disabledAttr = document.createAttribute('disabled');

const allPrice = document.createAttribute('price')
const frameworksPrice = document.createAttribute('price')
const libsPrice = document.createAttribute('price')
const expressPrice = document.createAttribute('price')
const nodePrice = document.createAttribute('price')
const buildToolsPrice = document.createAttribute('price')
const npmPrice = document.createAttribute('price')

const totalPriceDiv = document.createElement('div');

fieldsetActivities.addEventListener('change', () => {

if (all.checked) {
  allPrice.value = 200;
} else {
  allPrice.value = 0;
}
if ( frameworks.checked ) {
  express.disabled = true;
  frameworksPrice.value = 100;
  if (true) {
    express.parentNode.style.color = 'grey';
  }
} else {
  express.disabled = false;
  express.parentNode.style.color = '';
  frameworksPrice.value = 0;
}
if ( express.checked ) {
  frameworks.disabled = true;
  expressPrice.value = 100;
  if (true) {
    frameworks.parentNode.style.color = 'grey';
  }
} else {
  frameworks.disabled = false;
  frameworks.parentNode.style.color = '';
  expressPrice.value = 0;
}
if ( libs.checked ) {
  node.disabled = true;
  libsPrice.value = 100;
  if (true) {
    node.parentNode.style.color = 'grey';
  }
} else {
  node.disabled = false;
  node.parentNode.style.color = '';
  libsPrice.value = 0;
}
if ( node.checked ) {
  libs.disabled = true;
  nodePrice.value = 100;
  if (true) {
    libs.parentNode.style.color = 'grey';
  }
} else {
  libs.disabled = false;
  libs.parentNode.style.color = '';
  nodePrice.value = 0;
}

if (buildTools.checked) {
  buildToolsPrice.value = 100;
} else {
  buildToolsPrice.value = 0;
}

if (npm.checked) {
  npmPrice.value = 100;
} else {
  npmPrice.value = 0;
}

//3.3 total amount $ in courses
all.setAttributeNode(allPrice);
frameworks.setAttributeNode(frameworksPrice);
libs.setAttributeNode(libsPrice);
express.setAttributeNode(expressPrice);
node.setAttributeNode(nodePrice);
buildTools.setAttributeNode(buildToolsPrice);
npm.setAttributeNode(npmPrice);

const total =
+all.getAttribute('price') +
+frameworks.getAttribute('price') +
+libs.getAttribute('price') +
+express.getAttribute('price') +
+node.getAttribute('price') +
+buildTools.getAttribute('price') +
+npm.getAttribute('price');


totalPriceDiv.innerHTML = "<h3> Total: $" + total + "<h3>";
fieldsetActivities.appendChild(totalPriceDiv);

if ( total === 0 ) {
  fieldsetActivities.removeChild(totalPriceDiv);
}
});


//4.- Payment Info section of the form:

const divCreditCard = document.querySelector('#credit-card');
divCreditCard.style.display = 'block';

const divPaypal = divCreditCard.nextElementSibling;
divPaypal.style.display = 'none';

const divBitcoin = divPaypal.nextElementSibling;
divBitcoin.style.display = 'none';

const lastFieldset = divCreditCard.parentNode;

const creditCard = document.querySelector('[value="credit card"]');
const selectedAttr = document.createAttribute('selected');
creditCard.setAttributeNode(selectedAttr);


lastFieldset.addEventListener('change', (e) => {
  const selected = e.target.value;

  if ( selected === 'credit card' ) {
    divCreditCard.style.display = 'block';
    divPaypal.style.display = 'none';
    divBitcoin.style.display = 'none';
  }
  if ( selected === 'paypal') {
    divPaypal.style.display = 'block';
    divBitcoin.style.display = 'none';
    divCreditCard.style.display = 'none';
  }
  if ( selected === 'bitcoin') {
    divBitcoin.style.display = 'block';
    divPaypal.style.display = 'none';
    divCreditCard.style.display = 'none';
  }
  if ( selected === 'select_method') {
    divBitcoin.style.display = 'none';
    divPaypal.style.display = 'none';
    divCreditCard.style.display = 'none';
  }
});


const requiredAttrName = document.createAttribute('required');
const requiredAttrMail = document.createAttribute('required');
const requiredNumberCreditCard = document.createAttribute('required minlength="6" ');
inputName.setAttributeNode(requiredAttrName);
inputMail.setAttributeNode(requiredAttrMail);



const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();




});
















//
