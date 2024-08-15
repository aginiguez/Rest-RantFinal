const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)