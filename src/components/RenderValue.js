import RenderMap from './RenderMap'

export default (find, data) => {
    if(find){
        console.log(JSON.stringify(data));
        var dataValue = 
        `<div class="data-content">
        <h2>${data.city.name}</h2>
        <p id="aqi-value">${data.aqi}</p>
        
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">PM2.5</th>
              <td>${data.iaqi?.pm25?.v}</td>
            </tr>
            <tr>
              <th scope="row">PM10</th>
              <td>${data.iaqi?.pm10?.v}</td>
            </tr>
            <tr>
              <th scope="row">CO</th>
              <td colspan="2">${data.iaqi?.co?.v}</td>
            </tr>
            <tr>
              <th scope="row">NO2</th>
              <td colspan="2">${data.iaqi?.no2?.v}</td>
            </tr>
          </tbody>
        </table>
      </div>`;
        console.log(dataValue);
        document.getElementById("data-card").innerHTML = dataValue;
        //RenderMap(data.city.geo[0], data.city.geo[1]);
        document.getElementById("data-row").scrollIntoView();
    }
    else {
        document.getElementById("data-card").innerHTML = "non trovato";
        document.getElementById("data-row").scrollIntoView();
    }
    
}