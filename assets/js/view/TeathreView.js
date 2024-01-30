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
        this.typeGenre = document.querySelector("#genreType");
        this.typePlay = document.querySelector("#playType");
        this.typeDate = document.querySelector("#dateType");
        this.theatreForm = document.querySelector("#form-theatre");
        this.theatreImage = document.querySelector("#imageTheatre");
        this.submitButton = document.querySelector("button[type=submit]");
        this.resetButton = document.querySelector("button[type=reset]");
    }

    /**
     * Enables or disables the submit button depending on the input values.
     * If all input is values are as expected, the button will be enabled.
     */
    toggleSubmitButton() {
        if (this.typeGenre.value !== "selectGenre" && this.typePlay.value !== "selectPlay" && this.typeDate.value !== "selectDate") {
            this.submitButton.disabled = false;
        } else {
            this.submitButton.disabled = true;
        }
    }

    /**
     * Renders image with desired genre, play, and date.
     * @param {*} genre 
     * @param {*} play 
     * @param {*} date 
     */
    renderTicket(genre, play, date){
        let imgSrc =  `assets/images/${genre}-${play}-${date}.png`;
        this.theatreImage.src = imgSrc;
    }

    /**
     * Resets image to the original image.
     */
    resetImage() {
        this.theatreImage.src = "assets/images/selectGenre-selectPlay-selectDate.png";
    }


    /**
     * Resets the input values and the submit button.
     */
    reset() {
        this.typeGenre.value = "selectGenre";
        this.typePlay.value = "selectPlay";
        this.typeDate.value = "selectDate";
        this.submitButton.disabled = true;
    }
}