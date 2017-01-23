import axios from 'axios'


export default {
  // getLatLng: (encodedZip)=>{
  //   var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedZip}`
    
  //   var coordinates = new Promise((resolve, reject)=>{

  //     axios.get(geocodeUrl).then(response => {
  //       const lat = parseFloat(response.data.results[0].geometry.bounds.northeast.lat)
  //       const lng = parseFloat(response.data.results[0].geometry.bounds.northeast.lng)

  //       if(typeof lat === 'number'){
  //         resolve({location: {lat, lng}})
  //       }else{
  //         reject('something went wrong')
  //       }

  //       // return callback(null, {location: {lat, lng}}
  //       // return new Promise ((resolve, reject)=>{
  //       //   if (typeof lat !== 'number'){
  //       //     reject('Not found')
  //       //   }else {
  //       //     resolve({location: {lat, lng}})
  //       //   }
  //       // })
  //     })
  //   })
  //   return coordinates
  // },

  getBrowserLocation: ()=>{
    
    function doSomething(pos){
      let lat = pos.coords.latitude
      let lng = pos.coords.longitude
      let location = {lat, lng}
      // return location
      return new Promise((resolve, reject)=>{
        if(location.lat && location.lng){
          resolve(location)
        }else{
          reject('something went wrong')
        }
      })
    }

    function success(pos){
      let result = doSomething(pos)

      result.then((location)=>{
        console.log('in success promise tehn', location)
        // return location

        return new Promise ((resolve, reject)=>{
          console.log('retrning promise from sucess')
          resolve(location)
        })
      }).catch(e=>console.log(e))
    }

    function error(){
      return 'error'
    }

    

    if (navigator.geolocation){
      console.log(' geolocation true')

      navigator.geolocation.watchPosition(success)

    } else{
      console.log(' geolocation false')
    }

    // return locationCoords
  }
}
