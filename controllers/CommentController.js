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
    console.log(params)
    
    let zoneId = params['id']
    //find zone 
    //add comment id to zone Comment collection
    Comment.create(params, function(err, comment){
      if (err){
        callback(err, null)
        return
      }
      
      console.log('we at creat cntroller ',comment)
      
      Zone.findById(zoneId, (err, res)=>{
        if (err){
          callback(err, null)
          return
        }

        res.comments.push(comment)
        res.save((err)=>{
          if (err){
            callback(err, null)
            return
          }
          callback(null, comment)
        })
      })
    })
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
    Comment.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null)
        return
      }

      callback(null, null)
    })
  }
};