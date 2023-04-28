import mongoose, { SchemaTypes } from 'mongoose'


const Schema = mongoose.Schema

const notesSchema = new Schema({
  note: String,
  created: {
    type: Number,
    default: function() {
      return new Date().getDate()
    }
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
})


const characterSchema = new Schema({
  name: String,
  level: {type: Number, default: 1},
  race: String,
  age: Number,
  height: String,
  weight: Number,
  currentHP: Number,
  maxHP: Number,
  str: Number,
  strMod: Number,
  dex: Number,
  dexMod: Number,
  con: Number,
  conMod: Number,
  intel: Number,
  intelMod: Number,
  wis: Number,
  wisMod: Number,
  char: Number,
  charMod: Number,
  otherprofandlang: String,
  skillAcrobatics: {type: String, default: 0},
  skillAnimalHandling: {type: String, default: 0},
  skillArcana: {type: String, default: 0},
  skillAthletics: {type: String, default: 0},
  skillDeception: {type: String, default: 0},
  skillHistory: {type: String, default: 0},
  skillInsight: {type: String, default: 0},
  skillIntimidation: {type: String, default: 0},
  skillInvestigation: {type: String, default: 0},
  skillMedicine: {type: String, default: 0},
  skillNature: {type: String, default: 0},
  skillPerception: {type: String, default: 0},
  skillPerformance: {type: String, default: 0},
  skillPersuasion: {type: String, default: 0},
  skillReligion: {type: String, default: 0},
  skillSlightofHand: {type: String, default: 0},
  skillStealth: {type: String, default: 0},
  skillSurvival: {type: String, default: 0},
  strSave: String,
  dexSave: String,
  conSave: String,
  intelSave: String,
  wisSave: String,
  charSave: String,
  strcheckSave: Boolean,
  dexcheckSave: Boolean,
  concheckSave: Boolean,
  intelcheckSave: Boolean,
  wischeckSave: Boolean,
  charcheckSave: Boolean,
  armorclass: Number,
  initiative: Number,
  speed: Number,
  hitdice: Number,
  proficiencybonus: Number,
  passiveperception: Number,
  personality: String,
  appearance: String,
  notes: [notesSchema],
  inventory: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character,
}
