import SpellService from "./SpellService.js";

//Private

let _spellService = new SpellService()

function _drawApiSpells() {
    let spells = _spellService.ApiSpells
    let template = ``
    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i]
        template += spell.ListTemplate
    }
    document.getElementById('api-spells').innerHTML = template
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

        _spellService.getAllSpells()

        //Get Data
    }

}