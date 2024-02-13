export class FormModel {
    constructor() {
        this.CreditCard = "";
        this.Email = "";
        this.init();

    }
    /**
 * Initializes this object properties. New properties are added based on the
 * data loaded from  localStorage.
 * 
 * @returns {undefined}
 */
    init() {
        let teathre = JSON.parse(localStorage.getItem('teathre'));
        for (let property in teathre) {
            this[property] = teathre[property];
        }
    }

    /**
     * Stores teathre data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'teathre'.
     * 
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem("teathre", JSON.stringify(this));

    }

    /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but in this case, we would be dealing 
     * with an array of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        return JSON.parse(JSON.stringify(this));
    }
}