const Zone = require('../models/Zone');
const Comment = require('../models/Comment');


module.exports = {
  
  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if (err){
        callback(err, null)
        return
      }

      callback(null, zones)
    })
  },

  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if (err){
        callback(err, null)
        return
      }
      console.log(zone)


      callback(null, zone)
    })
  },

  create: function(params, callback){
    var zips = params["zipCodes"].split(',');
    var newZips = []
    
    zips.forEach((zip)=>{
      newZips.push(zip.trim())
    });

    params["zipCodes"] = newZips;
    Zone.create(params, function(err, zone){
      if (err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone){
      if(err){
        callback(err, null)
        return
      }
      
      callback(null, zone)
    })
  },
  
  destroy: function(id, callback){
    Zone.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null)
        return
      }

      callback(null, null)
    })
  },

  findComments: function(id, callback){
    Zone
      .findById(id)
      .populate('comments', null, null, {sort: {'timestamp': -1}})
      .exec((err, comments)=>{
        if (err) {
          callback(err, null)
          return
        }
        callback(null, comments)
    });
  }, 

  createZoneComment: function(zoneId, params, callback){

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
          callback(err, null)
          return
        }
        callback(null, comments)
      });
    })
  }
};