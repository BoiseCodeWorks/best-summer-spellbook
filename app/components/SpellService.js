import Spell from "../models/spell.js";

//Private


// Endpoints: 
// http://bcw-sandbox.herokuapp.com/api/YOURNAME/spells
// https://mage-warz.herokuapp.com/api/spells

let _state = {
    apiSpells: [],
    activeSpell: {},
    spellbook: []
}

let _subscribers = {
    apiSpells: [],
    activeSpell: {},
    spellbook: []
}

function setState(propName, data) {
    _state[propName] = data
    _subscribers[propName].forEach(fn => fn())
}


//Public
export default class SpellService {
    addSubscribers(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get apiSpells() {
        return _state.apiSpells.map(spell => new Spell(spell))
    }

}