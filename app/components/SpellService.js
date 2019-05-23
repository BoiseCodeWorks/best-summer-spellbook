import Spell from "../models/spell.js";

//Private
let _apiSpells = axios.create({
    baseURL: "https://mage-warz.herokuapp.com/api/spells"
})
let _apiSpellbook = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/CodeWizards/spells'
})



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

    get ApiSpells() {
        return _state.apiSpells.map(spell => new Spell(spell))
    }
    get Spellbook() {
        return _state.spellbook.map(spell => new Spell(spell))
    }
    get ActiveSpell() {
        return new Spell(_state.activeSpell)
    }

    getAllSpells() {
        _apiSpells.get()
            .then(res => {
                console.log(res)
            })
    }






}