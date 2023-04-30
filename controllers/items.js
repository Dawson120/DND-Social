import { Item } from "../models/item.js"
import { Character } from "../models/character.js"

function createItem(req, res) {
req.body.owner = req.user.profile._id
Character.findById(req.params.characterId)
  .then(character => {
  Item.create(req.body)
    .then(item => {
      character.inventory.push(item._id)
      character.save()
        .then(() => {
      res.redirect(`/characters/${req.params.characterId}/inventory`)
        })
        .catch(err => {
          console.log(err)
          res.redirect('/items/new')
        })
      })
      .catch(err => {
        console.log(err)
        res.redirect('/items/new')
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/items/new')
    })
}

function removeItem(req, res) {
  Character.findById(req.params.characterId)
    .then(character => {
      const itemIndex = character.inventory.indexOf(req.params.itemId)
      if (itemIndex > -1) {
        character.inventory.splice(itemIndex, 1)
      }
      character.save()
        .then(() => {
          res.redirect(`/characters/${req.params.characterId}/inventory`)
        })
        .catch(err => {
          console.log(err)
          res.redirect('/items/new')
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/items/new')
    })
}

export {
  createItem,
  removeItem,
}