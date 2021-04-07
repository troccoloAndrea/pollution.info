import AqiBadge from './AqiBadge'

export default (find, data) => {
  if (find) {
    console.log(JSON.stringify(data));
    var dataValue =
      `<div class="col-md-6">
          <label><i class="fas fa-map-marker-alt"></i> Stazione di:</label>
          <h2>${data.city.name}</h2>
          ${AqiBadge(data.aqi)}
        </div>
        <div class="col-md-6">
        <table class="table">
        <tbody>
          <tr>
            <th scope="row">PM2.5</th>
            <td>${((data.iaqi?.pm25?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm25?.v)}</td>
          </tr>
          <tr>
            <th scope="row">PM10</th>
            <td>${((data.iaqi?.pm10?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm10?.v)}</td>
          </tr>
          <tr>
            <th scope="row">CO</th>
            <td colspan="2">${((data.iaqi?.co?.v == undefined) ? "Dato non rilevato" : data.iaqi?.co?.v)}</td>
          </tr>
          <tr>
            <th scope="row">NO2</th>
            <td colspan="2">${((data.iaqi?.no2?.v == undefined) ? "Dato non rilevato" : data.iaqi?.no2?.v)}</td>
          </tr>
        </tbody>
      </table>
      </div>`;
    console.log(dataValue);
    document.getElementById("data-value").innerHTML = dataValue;
    document.getElementById("data-row").scrollIntoView();
  } else {
    document.getElementById("data-value").innerHTML = "non trovato";
    document.getElementById("data-row").scrollIntoView();
  }

}