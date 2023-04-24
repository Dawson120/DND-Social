import { name } from "ejs";
import { Character } from "../models/character.js";

function index(req, res){
  res.render('characters/index', {
    title: 'All Characters'
  })
}

function show(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
  res.render('characters/show', {
    character: character,
    title: 'Hello world',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
  })
}

function newCharacter(req, res) {
  res.render('characters/new', {
    title: 'New Character'
  })
}

function create(req, res) {
  Character.create(req.body)
  .then(character => {
    res.redirect(`/characters/${character._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters/new')
  })
}

export {
  index,
  newCharacter as new,
  create,
  show,
}