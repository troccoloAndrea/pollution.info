import GeoLocation from './components/GeoLocation'
import Search from './components/Search'
import './css/style.css'

document.getElementById("form-search").addEventListener("submit", (e) => {
  e.preventDefault();
  let city = document.getElementById("input-city").value
  try {
    Search(city)
  } catch (err) {
    alert(err);
  }

});

document.getElementById("btn-geolocation").addEventListener("click", () => {
  try {
    GeoLocation();
  } catch (err) {
    alert("errore" + err);
  }

})


