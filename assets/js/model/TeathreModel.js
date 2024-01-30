export class TeathreModel {

    /**
     * Constructor with genreType, playType, and dateType attributes which have value of "undefined"
     */
    constructor() {
        this._genreType = "undefined";
        this._playType = "undefined";
        this._dateType = "undefined";
    }

    /**
     * Setters for attributes
     */
    set genreType(genreType) {
        if (genreType === "selectGenre")
            this._genreType = "undefined";
        else
            this._genreType = genreType;
    }

    set playType(playType) {
        if (playType === "selectPlay")
            this._playType = "undefined";
        else
            this._playType = playType;
    }

    set dateType(dateType) {
        if (dateType === "selectDate")
            this._dateType = "undefined";
        else
            this._dateType = dateType;
    }

    /**
     * Getters for attributes
     */
    get genreType() {
        return this._genreType;
    }

    get playType() {
        return this._playType;
    }

    get dateType() {
        return this._dateType;
    }
}
