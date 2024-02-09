/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that 
 * provides a way to easily construct a set of key/value pairs representing form 
 * fields and their values.
 * 
 */
export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.createInputs(this.model.getInputData());

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener("change", this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener("submit", this.handleFormSubmit);

    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.view.inputs.forEach((input) => {
            if (input.value.trim() === '') {
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        });

        // Only proceed with form submission if all fields are filled
        if ([...this.view.inputs].every(input => input.value.trim() !== '')) {
            this.model.persist();
        } else {
            // Optionally, display a message to inform the user that the form cannot be submitted
            alert('Please fill in all required fields.');
        }
        this.model.persist();

    }

    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
    }
}