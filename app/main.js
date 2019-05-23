import SpellController from "./components/SpellController.js";



class App {
    constructor() {
        this.controllers = {
            spellController: new SpellController()
        }
    }
}


window['app'] = new App()