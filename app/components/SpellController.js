import SpellService from "./SpellService.js";

//Private

let _spellService = new SpellService()

function _drawApiSpells() {

}

function _drawActiveSpell() {

}


function _drawSpellbook() {

}


//Public
export default class SpellController {
    constructor() {
        //Register Subscribers
        _spellService.addSubscribers("apiSpells", _drawApiSpells)
        _spellService.addSubscribers("activeSpell", _drawActiveSpell)
        _spellService.addSubscribers("spellbook", _drawSpellbook)



        //Get Data
    }
}