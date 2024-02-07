export class FormView {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector("#form-submit");
    }

    craeteInputs(dataObject) {
        for (let property in dataObject) {
            this.form.querySelector('fieldset').insertAdjacentHTML('beforeend', `
            <label>${property}: </label>
            <input name="${property}" value="${dataObject[property]}" type="text" size="30"/>
            <br>
        `);
        }
        this.inputs = this.form.querySelector("input[type=text]");
    }
}