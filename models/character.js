import mongoose, { SchemaTypes } from 'mongoose'


const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  level: {type: Number, default: 1},
  race: String,
  age: Number,
  height: Number,
  weight: Number,
  currentHP: Number,
  maxHP: Number,
  str: String,
  dex: String,
  con: String,
  intel: String,
  wis: String,
  char: String,
  otherprofandlang: String,
  skillAcrobatics: String,
  skillAnimalHandling: String,
  skillArcana: String,
  skillAthletics: String,
  skillDeception: String,
  skillHistory: String,
  skillInsight: String,
  skillIntimidation: String,
  skillInvestigation: String,
  skillMedicine: String,
  skillNature: String,
  skillPerception: String,
  skillPerformance: String,
  skillPersuasion: String,
  skillReligion: String,
  skillSlightofHand: String,
  skillStealth: String,
  skillSurvival: String,
  skillcheckAcrobatics: Boolean,
  skillcheckAnimalHandling: Boolean,
  skillcheckArcana: Boolean,
  skillcheckAthletics: Boolean,
  skillcheckDeception: Boolean,
  skillcheckHistory: Boolean,
  skillcheckInsight: Boolean,
  skillcheckIntimidation: Boolean,
  skillcheckInvestigation: Boolean,
  skillcheckMedicine: Boolean,
  skillcheckNature: Boolean,
  skillcheckPerception: Boolean,
  skillcheckPerformance: Boolean,
  skillcheckPersuasion: Boolean,
  skillcheckReligion: Boolean,
  skillcheckSlightofHand: Boolean,
  skillcheckStealth: Boolean,
  skillcheckSurvival: Boolean,
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
  hitdicde: Number,
  proficiencybonus: Number,
  passiveperception: Number,
  personality: String,
  appearance: String,
  Inventory: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  Player: { type: Schema.Types.ObjectId, ref: 'Profile'},
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character,
}
