export class FormModel {
    constructor() {
        this.name = "";

        let teathre = JSON.parse(localStorage.getItem("teathre"));
        for (let property in teathre) {
            this[property] = teathre[property];
        }
    }

    persist() {
        localStorage.setItem("teathre", JSON.stringify(this));
    }

    getInputData() {
        return JSON.parse(JSON.stringify(this));
    }
}