import { TeathreView } from "./view/TeathreView.js";
import { TeathreModel } from "./model/TeathreModel.js";
import { TeathreController } from "./controller/TeathreController.js";

const app = new TeathreController(new TeathreModel(), new TeathreView());
