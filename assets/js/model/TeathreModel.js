import { selectData } from "../store/selectData";

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
                case 'genereType':
                    options = Object.keys(ShopModel.store[selectID]);
                    break;
                case 'playType':
                    if (this.weaponType !== "undefined") {
                        options = Object.keys(ShopModel.store['genereType'][this.genreType]['playType']);
                    }
                    break;
                case 'dateType':
                    if (this.weaponType !== "undefined" && this.weaponSize !== "undefined") {
                        options = Object.keys(ShopModel.store['genereType'][this.genreType]['dateType']);
                    }
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
}
