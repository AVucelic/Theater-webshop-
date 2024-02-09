import { TeathreView } from "./view/TeathreView.js";
import { TeathreModel } from "./model/TeathreModel.js";
import { TeathreController } from "./controller/TeathreController.js";

import { FormView } from "./view/FormView.js";
import { FormModel } from "./model/FormModel.js";
import { FormController } from "./controller/FormController.js";


class App {
    constructor() {
        const url = window.location.href; 
        const page = url.match(/[a-z]+.html/)[0];
        switch (page) {
            case 'index.html':
                new TeathreController(new TeathreModel(), new TeathreView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}

const app = new App();
