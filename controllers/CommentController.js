const Comment = require('../models/Comment');
const Zone = require('../models/Zone');



module.exports = {
  
  find: function(params, callback){
    Comment.find(params, function(err, comments){
      if (err){
        callback(err, null)
        return
      }

      callback(null, comments)
    })
  },

  findById: function(id, callback){
    Comment.findById(id, function(err, comment){
      if (err){
        callback(err, null)
        return
      }

      callback(null, comment)
    })
  },

  create: function(params, callback){
    let zoneId = params['id']
    
    const comment = Comment.create(params, (err, comment)=>{
      if (err){
        callback(err, null)
        return
      }
      return comment
    })
    
    comment.then(res=>{
      Zone.findByIdAndUpdate(zoneId, {
          $inc: {numComments: 1},
          $push: {comments: res},
          safe: true, 
          upsert: true
        }, (err, res)=>{
          if (err){
            console.log('error from updating zone', err)
            return
          }
          console.log('success update',res)
          return res
        })
    })
    .then(res =>callback(null, res))
    .catch(e => callback(e, null))
  },

  update: function(id, params, callback){
    Comment.findByIdAndUpdate(id, params, {new: true}, function(err, comment){
      if(err){
        callback(err, null)
        return
      }
      
      callback(null, comment)
    })
  },
  
  destroy: function(id, callback){
    Comment.findByIdAndRemove(id, (err)=>{
      if(err){
        callback(err, null)
        return
      }

      callback(null, null)
    })
  }
};