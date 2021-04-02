export default function RenderMap(lat, long){
    var mymap = L.map('mapid').setView([lat, long], 13);

    if(mymap.hasLayer())
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.MAPTOKEN
    }).addTo(mymap);
}
export default function UpdateMap(lat,long){
    var mymap = L.map('mapid').setView([lat, long], 13);
}