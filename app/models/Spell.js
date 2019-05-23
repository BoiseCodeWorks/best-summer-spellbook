export default class Spell {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.components = data.components
        this._id = data._id
    }
    get ListTemplate() {
        return `
            <li onclick="app.controllers.spellController.viewDetails('${this._id}')">${this.name}</li>

`
    }
    get ActiveTemplate() {
        return `
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.level} - ${this.range} - ${this.duration}</h6>
    <p class="card-text">${this.description}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        `
    }


}

// Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     level: { type: Number },
//     range: { type: String, required: true },
//     duration: { type: String, required: true },
//     components: [{ type: String }],
//     user: { type: String, required: true },
// })