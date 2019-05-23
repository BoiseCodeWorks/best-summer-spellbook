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