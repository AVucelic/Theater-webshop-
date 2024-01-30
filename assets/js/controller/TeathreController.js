/**
 * Class that represents the application controller. The controller is responsible 
 * for accessing data from the model and displaying it on the view. The controller 
 * is used to intermediate between the view and the model. It monitors user interactions 
 * with the view and communicates any changes to the model. On the other hand, 
 * changes (if any) to the model are observed by the controller and subsequently 
 * reflected in the view.  
 * 
 * The controller contains the code that handles different types of events. The
 * controller's methods are event handlers.
 * 
 * BEWARE of the 'this' keyword. The 'this' keyword behaves a little differently
 * in JavaScript compared to other languages. In most cases, the value of 'this'
 * is determined by how a function is called (runtime binding). Inside a handler,
 * 'this' points to the UI element that triggered the event. Inside an arrow 
 * function, 'this' points to the object that owns/defines the arrow function.
 * Here, that's the AnimalController object.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
export class TeathreController {
    /**
     * Creates an object representing the theatre controller.
     * 
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * 
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.typeGenre.addEventListener("change", this.handleSelectChange);
        this.view.typePlay.addEventListener("change", this.handleSelectChange);
        this.view.typeDate.addEventListener("change", this.handleSelectChange);
        this.view.theatreForm.addEventListener("submit", this.handleFormSubmit);
        this.view.resetButton.addEventListener("click", this.handleImageReset);
        this.view.resetButton.addEventListener("click", this.handleReset);
    }

    /**
     * Handles "change" events fired by input fields.
     * On change, the model is updated to reflect the new values and the view 
     * is tasked with enabling/disabling the submit button.
     * 
     * @param {Event} event - the event to be processed 
     */
    handleSelectChange = (event) => {
        let select = event.target;
        this.model[select.name] = select.value;
        console.log('Model:', this.model);
        this.view.renderTicket(this.model.genreType, this.model.playType, this.model.dateType);
        this.view.toggleSubmitButton();
    }

    /**
     * Handles "submit" events fired by the form.
     * On submit, the view renders the image, and then, it's reset to initial
     * values. 
     * 
     * @param {Event} event - the event to be processed 
     */
    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        event.preventDefault();
        this.view.renderTicket(this.model.genreType, this.model.playType, this.model.dateType);
        this.view.reset();

    }

    /**
     * Resets the image to original one.
     */
    handleImageReset = () => {
        this.view.resetImage();
    }

    /**
     * Handles "reset" button events from the form.
     * On reset, the values will be reseted to default ones.
     * @param {*} event 
     */
    handleReset = (event) => {
        event.preventDefault();
        this.view.reset();
    }
}

