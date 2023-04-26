import mongoose from 'mongoose'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  quantity: Number,
  itemname: String,
  desc: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}
