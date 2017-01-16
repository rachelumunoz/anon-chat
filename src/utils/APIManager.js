import request from 'superagent'

export default {

  get: (url, params, callback)=>{
    request
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if (err){
          callback({message: err}, null)
          return
        }

        const confirmation = res.body.confirmation
        if (confirmation !== 'success'){
            callback(res.body.message, null)
            return
        }
        callback(null, res)
      })
  },

  post: (url, body, callback)=>{
    request
      .post(url)
      .send(body)
      .set('Accept','application/json')
      .end((err, res)=>{
        if (err){
          callback(err, null)
          return
        }

        const confirmation = res.body.confirmation
        if (confirmation !== 'success'){
            callback({message: res.body.message}, null)
            return
        }
        
        callback(null, res)
      
      })
  },

  put: ()=>{

  },

  delete: ()=>{

  }

}