import AqiBadge from './AqiBadge'

export default (find, data) => {
  if (find) {
    console.log(JSON.stringify(data));
    var dataValue =
      `<div class="col-md-6">
          <label><i class="fas fa-map-marker-alt"></i> Stazione di:</label>
          <h2>${data.city.name}</h2>
          <label>Air Quality Index (AQI)</label>
          ${AqiBadge(data.aqi)}
        </div>
        <div class="col-md-6">
        <label><i class="fas fa-tachometer-alt"></i> Valori rilevati</label>
        <table class="table">
        <tbody>
          <tr>
            <th scope="row">pm2.5<label>Polveri sottili</label></th>
            <td>${((data.iaqi?.pm25?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm25?.v)}</td>
          </tr>
          <tr>
            <th scope="row">pm10<label>Particolato</label></th>
            <td>${((data.iaqi?.pm10?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm10?.v)}</td>
          </tr>
          <tr>
            <th scope="row">o3<label>Ozono</label></th>
            <td>${((data.iaqi?.o3?.v == undefined) ? "Dato non rilevato" : data.iaqi?.pm25?.v)}</td>
          </tr>
          <tr>
            <th scope="row">CO<label>Monossido di carbonio</label></th>
            <td colspan="2">${((data.iaqi?.co?.v == undefined) ? "Dato non rilevato" : data.iaqi?.co?.v)}</td>
          </tr>
          <tr>
            <th scope="row">No2<label>Diossido di azoto</label></th>
            <td colspan="2">${((data.iaqi?.no2?.v == undefined) ? "Dato non rilevato" : data.iaqi?.no2?.v)}</td>
          </tr>
        </tbody>
      </table>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#forecast">
        Informazioni sui valori<i class="fas fa-info-circle"></i>
        </button>
      </div>
      
      <div class="modal fade" id="forecast" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"><i class="fas fa-info-circle"></i> Informazioni sui valori</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h6>Air Quality Index (AQI)</h6>
                <p>lorem ipsum</p>
                <h6>pm2.5</h6>
                <p>lorem ipsum</p>
                <h6>pm10</h6>
                <p>lorem ipsum</p>
                <h6>o3</h6>
                <p>lorem ipsum</p>
                <h6>CO</h6>
                <p>lorem ipsum</p>
                <h6>No2</h6>
                <p>lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      
      
      `;
    console.log(dataValue);
    document.getElementById("data-value").innerHTML = dataValue;
    document.getElementById("data-row").scrollIntoView();
  } else {
    document.getElementById("data-value").innerHTML = `
    <div class="not-found">
    <p>404<i class="far fa-sad-tear"></i></p>
    <h3>Non ho trovato nessuna stazione in questa citta!</h3>
    </div>`;
    document.getElementById("data-row").scrollIntoView();
  }

}