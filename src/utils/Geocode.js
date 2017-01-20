import axios from 'axios'

export default {
  getLatLng: (encodedZip)=>{
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedZip}`
    
    var coordinates = new Promise((resolve, reject)=>{

      axios.get(geocodeUrl).then(response => {
        const lat = parseFloat(response.data.results[0].geometry.bounds.northeast.lat)
        const lng = parseFloat(response.data.results[0].geometry.bounds.northeast.lng)

        if(typeof lat === 'number'){
          resolve({location: {lat, lng}})
        }else{
          reject('something went wrong')
        }

        // return callback(null, {location: {lat, lng}}
        // return new Promise ((resolve, reject)=>{
        //   if (typeof lat !== 'number'){
        //     reject('Not found')
        //   }else {
        //     resolve({location: {lat, lng}})
        //   }
        // })
      })
    })
    return coordinates

  }

}
