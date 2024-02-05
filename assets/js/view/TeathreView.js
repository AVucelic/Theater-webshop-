/**
 * Class that represents the application view. The view displays information 
 * contained in the model: type & color. The view does not obtain the information 
 * directly from the model, it uses the controller as a mediator which instructs 
 * it when and what to display. 
 * 
 * The view holds references to all UI elements with which the user interacts with
 * AND for which the event-handling mechanism needs to be implemented.
 */
export class TeathreView {
    constructor() {
        this.teathreForm = document.querySelector("#form-teathre");
        this.selectsDiv = document.querySelector("#div-selects");
        this.teathreDiv = document.querySelector("#div-teathre");
        this.submitButton = document.querySelector("button[type=submit]");
        this.resetButton = document.querySelector("button[type=reset]");
        this.selects = null;
    }


    /**
     * Renders the image based on the current selects' values.
     * 
     * @returns {undefined}
     */
    renderTeathre() {
        let imgSrc = 'assets/images/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png'; //remove the last character '-'.

        this.teathreDiv.src = imgSrc;
    }


    renderSelects(selectIDs) {
        selectIDs.forEach((selectID) => {
            let select = document.createElement('select');
            select.id = selectID;
            select.options.add(new Option(` -- Select a ${selectID} -- `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });
        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    /**
 * Resets all next selects, selects that are siblings to the one defined by
 * this method parameter.
 * 
 * @param {type} selectID - the ID of the select which next siblings are going to be reset
 */
    resetNextSiblings(selectID) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }
    }

    /**
* Adds options to a select.
* 
* @param {String} selectID
* @param {Array} options - array of strings (option names)
*/
    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;
        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }


}