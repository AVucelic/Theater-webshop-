/**
 * Represents the application model. The model contains the data, the information 
 * regarding the animal such as: type and color. The model can obtain data either 
 * from a database or files, which could be located locally or externally. The 
 * model does not talk directly to a view, instead is made available to a controller 
 * which accesses it when needed. 
 */
import { selectData } from "../store/selectData.js";

export class TeathreModel {
    static store = selectData;

    /**
     * Constructor with genreType, playType, and dateType attributes which have value of "undefined"
     */
    constructor() {
        this.genreType = "undefined";
        this.playType = "undefined";
        this.dateType = "undefined";
    }

    /**
     * Returns an array of this object's properties names.
     * The returned array is used by View to dynamically render the selects. 
     * For each Model property, a select is being rendered in View.
     * 
     * @returns {Array} array of property names (strings)
     */
    getProperties() {
        return Object.keys(this);
    }

    /**
 * Gets the data from the external resource to be used as select options.
 * 
 * @param {String} selectID - select ID
 * @returns {Array} array of select's options (strings)
 */
    getOptions(selectID) {
        // 1. extract the data from the external resource (AnimalModel.store).
        let options; // a JS object
        switch (selectID) {
            case 'genreType':
                options = Object.keys(TeathreModel.store);
                break;
            case 'playType':
                options = Object.keys(TeathreModel.store[this.genreType]);
                break;
            case 'dateType':
                options = Object.keys(TeathreModel.store[this.genreType][this.playType]);
                break;
        }

        // 2. return select options
        return options;
    }

    /**
     * Resets this object's properties to "undefined". Not all properties are
     * going to be reset, only those that are listed after the property defined 
     * by this method parameter. 
     * 
     * @param {type} property - property from which the reset starts.
     */
    resetNextProperties(property) {
        let properties = Object.keys(this);
        let index = properties.indexOf(property);
        while (++index < properties.length) {
            this[properties[index]] = "undefined";
        }

    }

    /**
     * Stores teathre data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'teathre'.
     * 
     * @returns {undefined}
     */
    store() {
        localStorage.setItem("teathre", JSON.stringify(this));
        console.log(localStorage().getItem("teathre"));
    }

    /**
     * Stores teathre data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'teathre'.
     * 
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('teathre', JSON.stringify(this));
    }
}
