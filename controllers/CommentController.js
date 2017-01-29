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
    

    comment.then(comment=>{
      Zone.findByIdAndUpdate(zoneId, {
          $inc: {numComments: 1},
          $push: {comments: comment}},{
          upsert: true,
          'new': true 
          }, (err, res)=>{
          if (err){
            callback(err, null)
            return
          }
        })
      Zone
      .findById(zoneId)
      .populate('comments', null, null, {sort: {'timestamp': -1}})
      .exec((err, comments)=>{
        if (err) {
          console.log('erre')
          callback(err, null)
          return
        }
        console.log('fond them')
        callback(null, comments)
      });
    })



  },

  // desperately needs promise refactoring
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