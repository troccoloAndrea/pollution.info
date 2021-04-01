export default async function GetCurrentPosition(){
    navigator.geolocation.getCurrentPosition(success, error, options);
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
          return pos.coords;
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        throw err.message
      } 
}