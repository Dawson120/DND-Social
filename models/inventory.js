import mongoose from 'mongoose'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  quantity: Number,
  itemname: String,
  desc: String,
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}
