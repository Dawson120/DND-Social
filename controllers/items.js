import { Item } from "../models/item.js"
import { Character } from "../models/character.js"

function newItem(req, res) {
  console.log("help me god")
}

function createItem(req, res) {
  console.log('burh')
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


export {
  createItem,
  newItem,
}