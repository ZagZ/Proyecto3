const express = require('express')
const mongoose = require('mongoose')
const Interest = require('../models/Interest')

const router = express.Router()

//Get Route 
router.get('/interests',(req,res,next)=>{

    Interest.find()
    .then(allTheInterests =>{
      res.json(allTheInterests)
    })
    .catch(err=>{
      res.json(err)
    })
  })

//Post Route
router.post('/interests',(req,res,next)=>{
  Interest.create({
    from: req.body.from,
    work: req.body.work,
    favfood: req.body.favfood,
    favmovie: req.body.favmovie,
    favsong: req.body.favsong,

  })
  .then(response=>{
    res.json(response)
  })
  .catch(err=>{
    res.json(err)
  })
})

//Get Specific interestlist
router.get('/interests/:id',(req,res,next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({message: 'Specified is is not valid'})
    return
  }

  Interest.findById(req.params.id)
  .then(response=>{
    res.status(200).json(response)
  })
  .catch(err=>{
    res.json(err)
  })
})

//Put route => Update specific interestlist
router.put('/interests/:id',(req,res,next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({message:'Specified id is not valid'})
    return
  }

  Interest.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.json({message:`Interest with ${req.params.id} is updated successfuly.`})
    })
    .catch(err=>{
      res.json(err)
    })
})


//Delete route => specific interestlist
router.delete('/interests/:id',(req,res,next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }

  Interest.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.json({message:`InterestList with ${req.params.id} is removed succefuly`})
    })
    .catch(err=>{
      res.json(err)
    })
})


module.exports = router;