import { Character } from "../models/character.js";

function index(req, res){
  res.render('characters/index', {
    title: 'All Characters'
  })
}

function newCharacter(req, res) {
  res.render('characters/new', {
    title: 'New Character'
  })
}

export {
  index,
  newCharacter as new,
}