const express = require('express');
const router = express.Router()
// const ZoneController = require('../controllers/ZoneController')
const controllers = require('../controllers');

router.get('/:resource', (req, res, next)=>{
  let resource = req.params.resource;
  let controller = controllers[resource];

  if( controller === undefined ){
    res.json({
      confirmation: 'fail',
      message: `Resource does not exist: ${resource}`
    })

    return
  }

  controller.find(req.query, (err, results)=>{
    if (err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results
    })
  })
})

router.get('/:resource/:id', (req, res, next)=>{
  let resource = req.params.resource;
  let id = req.params.id;

  let controller = controllers[resource];

  if( controller === undefined ){
    res.json({
      confirmation: 'fail',
      message: `Resource does not exist: ${resource}`
    })

    return
  }

  controller.findById(id, (err, result)=>{
    if (err){
      res.json({
        confirmation: 'fail',
        message: 'Not found'
      })
      return
    }
    res.json({
      confirmation: 'success',
      result
    })
  })
})

router.post('/:resource', (req, res, next)=>{
  let resource = req.params.resource;
  let controller = controllers[resource];

  if( controller === undefined ){
    res.json({
      confirmation: 'fail',
      message: `Resource does not exist: ${resource}`
    })

    return
  }

  controller.create(req.body, (err, result)=>{
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result
    })
  })
})


router.get('/:resource/:id/comments', (req, res, next)=>{
  let resource = req.params.resource;
  let controller = controllers[resource]
  
  controller.findComments(req.params.id, (err, results)=>{
    if (err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }

    res.json({
      confirmation: 'success',
      results
    })
  })

})


module.exports = router;