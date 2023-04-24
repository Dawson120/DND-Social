import { name } from "ejs";
import { Character } from "../models/character.js";

function index(req, res){
  Character.find({})
  .then(characters => {
  res.render('characters/index', {
    characters: characters,
    title: 'All Characters'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
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
  req.body.owner = req.user.profile._id
  Character.create(req.body)
  .then(character => {
    res.redirect(`/characters/${character._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters/new')
  })
}

function edit(req, res) {
  Character.findById(req.params.characterId)
  .then (character => {
    res.render('characters/edit', {
      character,
      title: character.name
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters/new')
  })
}

function kill(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
    if (character.owner.equals(req.user.profile._id)) {
      character.deleteOne()
      .then (() => {
        res.redirect('/characters')
      })
    } else {
      throw new error ('Shame On You')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newCharacter as new,
  create,
  show,
  kill,
  edit,
}