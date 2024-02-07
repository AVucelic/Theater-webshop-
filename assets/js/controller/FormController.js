export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.createInputs(this.model.getInputData());
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.model.persist();
    }

    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
    }
}