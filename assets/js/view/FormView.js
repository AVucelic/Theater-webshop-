/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {
    /**
     * Constructor for the form view class
     */
    constructor() {
        this.inputs = null;
        this.form = document.querySelector("#form-submit");
        this.submitButton = document.querySelector("button[type=submit]");
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend', `
            <label>${property}: </label>
            <input name="${property}" value="${dataObject[property]}" type="text" size="30"/>
            <br><br>
        `);
        }
        this.inputs = this.form.querySelectorAll("input[type=text]");
        // Attach event listeners for validation
        this.inputs.forEach((input) => {
            input.addEventListener('input', (event) => {
                this.validateField(event.target);
            });
        });
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting normally
            this.validateField(event.target);
        });
    }

    /**
     * Method that checks if the field based on input name
     * @param {*} inputElement 
     */
    validateField(inputElement) {
        const name = inputElement.name;
        const value = inputElement.value;

        // Clear any previous validation states
        inputElement.classList.remove('invalid');

        // Validate based on the input name
        if (name === 'CreditCard') {
            if (!this.validateCreditCard(value)) {
                inputElement.classList.add('invalid');
            }
        } else if (name === 'Email') {
            if (!this.validateEmail(value)) {
                inputElement.classList.add('invalid');
            }
        }
    }


    /**
     * Method that validates credit card input field
     * @param {*} cardNumber 
     * @returns 
     */
    validateCreditCard(cardNumber) {
        // Ensure the card number has exactly  16 digits
        if (cardNumber.length !== 16) {
            return false;
        }

        // Convert the card number to an array of digits
        let cardNumbers = cardNumber.split('').reverse().map(Number);

        // Initialize the sum variable
        let sum = 0;

        for (let i = 0; i < cardNumbers.length; i++) {
            let digit = cardNumbers[i];
            if (i % 2 !== 0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }

        // Check if the sum is divisible by  10
        return sum % 10 === 0;
    }

    /**
     * Method that validates if email is correctly inputed
     * @param {*} email 
     * @returns 
     */
    validateEmail(email) {
        // Simple regex check for email format
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    }

}