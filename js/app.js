//variables
const inputName = document.getElementById('name');
const inputMail = document.getElementById('mail');
const fieldset = document.querySelector('fieldset');
const inputOtherTitle = document.querySelector('#other-title');
//JOB ROLE ---------------------------------------------------------------------
//When the page loads, give focus to the first text field
inputName.focus();
//hide the input Other in the job Role when the page charge.
inputOtherTitle.style.display = 'none';
//event listener for the Job Role.
fieldset.addEventListener('change', (e) => {
	const selected = e.target.value;
	const otherValue = document.querySelector('option[value="other"]');
	const other = otherValue.value;
	// if Other is selected then display the input else not.
	if (selected === other) {
		inputOtherTitle.style.display = 'block';
	} else {
		inputOtherTitle.style.display = 'none';
	}
});
//T-SHIRT INFO -----------------------------------------------------------------
//only display the color options that match the design selected.
//colors selectors
const shirtFieldset = document.querySelector('.shirt');
const tomato = document.querySelector('option[value="tomato"]');
const steelblue = document.querySelector('option[value="steelblue"]');
const dimgrey = document.querySelector('option[value="dimgrey"]');
const cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
const darkslategrey = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');
const divColors = document.querySelector('#colors-js-puns');
//hide the colors selector
divColors.style.display = 'none';
// event listener when design selection change
shirtFieldset.addEventListener('change', (e) => {
	const selected = e.target.value;
	const jsPunsValue = document.querySelector('option[value="js puns"]');
	const jsPuns = jsPunsValue.value;
	const heartJsValue = document.querySelector('option[value="heart js"]');
	const heartJs = heartJsValue.value;
	const selectedAttr = document.createAttribute('selected');
	// if selected is jsPuns then hide/ show depending of the list.
	if (selected === jsPuns) {
		// display the colors selector
		divColors.style.display = 'block';
		// deleting the previus selected category
		tomato.removeAttribute('selected');
		// selecting the first item to show when category selected.
		cornflowerblue.setAttributeNode(selectedAttr);
		tomato.style.display = 'none';
		steelblue.style.display = 'none';
		dimgrey.style.display = 'none';
		cornflowerblue.style.display = 'block';
		darkslategrey.style.display = 'block';
		gold.style.display = 'block';
	}
	if (selected === heartJs) {
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
	//  if the select theme button click then hide the color list.
	if (selected === 'Select Theme') {
		divColors.style.display = 'none';
	}
});
// REGISTER FOR ACTIVITIES -----------------------------------------------------
//Selecting each input in a const.
const fieldsetActivities = document.querySelector('.activities');
const all = document.querySelector('input[name="all"]');
const frameworks = document.querySelector('input[name="js-frameworks"]');
const libs = document.querySelector('input[name="js-libs"]');
const express = document.querySelector('input[name="express"]');
const node = document.querySelector('input[name="node"]');
const buildTools = document.querySelector('input[name="build-tools"]');
const npm = document.querySelector('input[name="npm"]');
//creating the attribute disabled.
const disabledAttr = document.createAttribute('disabled');
// creating the attribute price.
const allPrice = document.createAttribute('price')
const frameworksPrice = document.createAttribute('price')
const libsPrice = document.createAttribute('price')
const expressPrice = document.createAttribute('price')
const nodePrice = document.createAttribute('price')
const buildToolsPrice = document.createAttribute('price')
const npmPrice = document.createAttribute('price')
//creating the element div.
const totalPriceDiv = document.createElement('div');
//add event listener when cheking the checkboxes
fieldsetActivities.addEventListener('change', () => {
	//assigning the value of the attribute if checking.
	if (all.checked) {
		allPrice.value = 200;
	} else {
		allPrice.value = 0;
	}
	if (frameworks.checked) {
		//disabling the checkbox which are at the same time/day.
		express.disabled = true;
		frameworksPrice.value = 100;
		if (true) {
			//styling the disabling labels of the same time/day.
			express.parentNode.style.color = 'grey';
		}
	} else {
		express.disabled = false;
		express.parentNode.style.color = '';
		frameworksPrice.value = 0;
	}
	if (express.checked) {
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
	if (libs.checked) {
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
	if (node.checked) {
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
	//setting the attribute for each item
	all.setAttributeNode(allPrice);
	frameworks.setAttributeNode(frameworksPrice);
	libs.setAttributeNode(libsPrice);
	express.setAttributeNode(expressPrice);
	node.setAttributeNode(nodePrice);
	buildTools.setAttributeNode(buildToolsPrice);
	npm.setAttributeNode(npmPrice);
	//total amount $ in courses. Sum of each price attribute value.
	const total = +all.getAttribute('price') + +frameworks.getAttribute('price') + +libs.getAttribute('price') + +express.getAttribute('price') + +node.getAttribute('price') + +buildTools.getAttribute('price') + +npm.getAttribute('price');
	//creating the html and appending it.
	totalPriceDiv.innerHTML = "<h3> Total: $" + total + "<h3>";
	fieldsetActivities.appendChild(totalPriceDiv);
	// if value is 0, don't append total Price.
	if (total === 0) {
		fieldsetActivities.removeChild(totalPriceDiv);
	}
});
//PAYMENT INFO -----------------------------------------------------------------
//Payment Info section of the form:
// credit card block
const divCreditCard = document.querySelector('#credit-card');
divCreditCard.style.display = 'block';
// hiding the paypal option
const divPaypal = divCreditCard.nextElementSibling;
divPaypal.style.display = 'none';
// hiding the bitcoin option
const divBitcoin = divPaypal.nextElementSibling;
divBitcoin.style.display = 'none';
// selecting the parent.
const lastFieldset = divCreditCard.parentNode;
// selectors
const creditCard = document.querySelector('[value="credit card"]');
const bitcoin = document.querySelector('[value="bitcoin"]');
const paypal = document.querySelector('[value="paypal"]');
const selectMethod = document.querySelector('[value="select_method"]');
const selectPayment = document.querySelector('#payment');
// event listener when change the options.
lastFieldset.addEventListener('change', (e) => {
	const selected = e.target.value;
	// if selected any the select payment method dissapear.
	if (selected === 'credit card' || selected === 'paypal' || selected === 'bitcoin' || selected === 'select_method') {
		selectMethod.style.display = 'none';
	}
	//if select credit card the others are hidden.
	if (selected === 'credit card') {
		divCreditCard.style.display = 'block';
		divPaypal.style.display = 'none';
		divBitcoin.style.display = 'none';
	}
	if (selected === 'paypal') {
		divPaypal.style.display = 'block';
		divBitcoin.style.display = 'none';
		divCreditCard.style.display = 'none';
	}
	if (selected === 'bitcoin') {
		divBitcoin.style.display = 'block';
		divPaypal.style.display = 'none';
		divCreditCard.style.display = 'none';
	}
});
// credit card required field
const inputNumberCreditCard = document.querySelector('#cc-num');
// creating the attributes with pattern and min-max length.
inputNumberCreditCard.setAttribute("pattern", "[0-9]{13,16}$")
inputNumberCreditCard.setAttribute("minlength", "13");
inputNumberCreditCard.setAttribute("maxlength", "16");
//zip code required field
const zipCode = document.querySelector('#zip');
zipCode.setAttribute("pattern", "[0-9]{5}$");
zipCode.setAttribute("minlength", "5");
zipCode.setAttribute("maxlength", "5");
//CVV required field
const cvv = document.querySelector('#cvv');
cvv.setAttribute("pattern", "[0-9]{3}$");
cvv.setAttribute("minlength", "3");
cvv.setAttribute("maxlength", "3");
// credit card payment option is selected by default.
creditCard.selected = true;
//REAL TIME MAIL VALIDATION-----------------------------------------------------
const spanMail = document.createElement('span');
const labelMail = document.querySelectorAll('label')[1];
labelMail.appendChild(spanMail);
inputMail.addEventListener('input', (e) => {
	if (!inputMail.validity.valid || inputMail.value.length === 0) {
		spanMail.className = 'errorMailLive';
		const errorMailLive = document.querySelector('.errorMailLive');
		errorMailLive.innerHTML = " <strong>I'm waiting for an email, I'll let you know when it's ready</strong>";
		errorMailLive.style.color = '#b70000';
	} else {
		const errorMailLive = document.querySelector('.errorMailLive');
		errorMailLive.innerHTML = '<strong> GOOD JOB!</strong>';
		errorMailLive.style.color = '#2733ce';
	}
});
//REAL TIME NUMBER CARD VALIDATION ---------------------------------------------
const spanNumbersCreditCard = document.createElement('span');
lastFieldset.appendChild(spanNumbersCreditCard);
inputNumberCreditCard.addEventListener('input', (e) => {
  if (isNaN(inputNumberCreditCard.value)){
    spanNumbersCreditCard.className = 'errorCreditCardLive';
    const errorCreditLive = document.querySelector('.errorCreditCardLive');
    errorCreditLive.innerHTML = " <strong>This is not a number! </strong>";
    errorCreditLive.style.color = '#b70000';
  } else if (inputNumberCreditCard.value.length === 0){
    const errorCreditLive = document.querySelector('.errorCreditCardLive');
    errorCreditLive.innerHTML = " <strong>I need numbers! </strong>";
    errorCreditLive.style.color = '#b70000';
  } else if (inputNumberCreditCard.value.length === 5){
    const errorCreditLive = document.querySelector('.errorCreditCardLive');
    errorCreditLive.innerHTML = " <strong>Keep writing numbers dude!! </strong>";
    errorCreditLive.style.color = '#b70000';
  } else if(inputNumberCreditCard.validity.valid){
    const errorCreditLive = document.querySelector('.errorCreditCardLive');
    errorCreditLive.innerHTML = " <strong>WELL DONE WITH THE CREDIT CARD! </strong>";
    errorCreditLive.style.color = '#b70000';
  }
});
//WHEN THE REGISTER BUTTON IS CLICKED ------------------------------------------
const form = document.querySelector('form');
// event listener for the submit button.
form.addEventListener('submit', (e) => {
	//input name validation
	const spanName = document.createElement('span');
	const labelName = document.querySelector('label');
	inputName.required = true;
	if (!inputName.validity.valid) {
		labelName.appendChild(spanName);
		spanName.className = 'errorName';
		const errorName = document.querySelector('.errorName');
		errorName.innerHTML = '<strong>  Please type a correct name</strong>';
		errorName.style.color = '#b70000';
		inputName.setAttribute("placeholder", "Victor Hugo");
		e.preventDefault();
	} else {
		const errorName = document.querySelector('.errorName');
		errorName.innerHTML = '';
	}
	//input mail validation
	inputMail.required = true;
	if (!inputMail.validity.valid) {
		spanMail.className = 'errorMail';
		const errorMail = document.querySelector('.errorMail');
		errorMail.innerHTML = '<strong>  Please type a correct email (name@company.com)</strong>';
		errorMail.style.color = '#b70000';
		inputMail.setAttribute("placeholder", "victorhugo@writer.com");
		e.preventDefault();
	}
	//input activities validation
	const checkboxVal = all.checked || frameworks.checked || libs.checked || express.checked || node.checked || buildTools.checked || npm.checked;
	const activitiesError = all.parentNode.parentNode;
	const spanActivities = document.createElement('span');
	if (!checkboxVal === true) {
		activitiesError.appendChild(spanActivities);
		spanActivities.className = 'errorActivities';
		const errorActivities = document.querySelector('.errorActivities');
		errorActivities.innerHTML = '<strong>Please select at least one activity</strong>'
		errorActivities.style.color = '#b70000';
		e.preventDefault();
	} else {
		const errorActivities = document.querySelector('.errorActivities');
		errorActivities.innerHTML = '';
	}
	//input payment validation
	const spanPayment = document.createElement('span');
	if (creditCard.selected === true) {
		//this three inputs turn required
		inputNumberCreditCard.required = true;
		zipCode.required = true;
		cvv.required = true;
		// if at the same time are not well validated, then show error message.
		if (!inputNumberCreditCard.validity.valid || !zipCode.validity.valid || !cvv.validity.valid) {
			inputNumberCreditCard.setAttribute("placeholder", "13 to 16 numbers");
			zipCode.setAttribute("placeholder", "xxxxx");
			cvv.setAttribute("placeholder", "xxx");
			lastFieldset.appendChild(spanPayment);
			spanPayment.className = 'errorPayment';
			const errorPayment = document.querySelector('.errorPayment');
			errorPayment.innerHTML = '<strong> <br><br>The three fields accept only numbers:</strong><p>- a 13 to 16 digit credit card number</p><p>- a 5 digit zip code</p><p>- 3 number CVV value</p>';
			errorPayment.style.color = '#b70000';
			e.preventDefault();
		} else {
			const errorPayment = document.querySelector('.errorPayment');
			errorPayment.innerHTML = '';
		}
	}
	// if paypal or bitcoin are selected credit card inputs are not required.
	if (paypal.selected === true || bitcoin.selected === true) {
		inputNumberCreditCard.required = false;
		zipCode.required = false;
		cvv.required = false;
	}
});
