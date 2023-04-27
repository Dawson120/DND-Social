import { name } from "ejs";
import { Character } from "../models/character.js";
import { Item } from "../models/item.js"

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

// function addItems(req, res) {
//   // console.log('deez')
//   Character.findById(req.params.characterId)
//   .then(character => {
//     res.render('items/new', {
//       character: character,
//       title: `${character.name}'s Inventory`
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/characters')
//   })
// }

function show(req, res) {
  Character.findById(req.params.characterId)
  .populate('inventory')
  .then(character => {
  res.render('characters/show', {
    character: character,
    title: character.name,
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
  // console.log('help')
  Character.findById(req.params.characterId)
  .then (character => {
    res.render('characters/edit', {
      character: character,
      title: character.name,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
  })
}

function inventory(req, res) {
  Character.findById(req.params.characterId)
  .populate('inventory')
  .then (character => {
    Item.find({_id: {$nin: character.inventory}})
    .then (items => {
    res.render('characters/inventory', {
      character: character,
      title: `${character.name}'s Inventory`,
      items: items
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/characters')
  })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
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

function update(req, res) {
  Character.findByIdAndUpdate(req.params.characterId, req.body)
  .then(character => {
    res.redirect(`/characters/${character._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
  })
}
function newNote(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
    character.notes.push(req.body)
    character.save()
    .then(()=> {
      res.redirect(`/characters/${character._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/characters')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
  })
}
function deleteNote(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
    character.notes.remove(req.params.notesId)
    character.save()
    .then(()=> {
      res.redirect(`/characters/${character._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/characters')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/characters')
  })
}

export {
  index,
  newCharacter as new,
  create,
  show,
  kill,
  edit,
  update,
  newNote,
  deleteNote,
  inventory,
}