import AqiBadge from './AqiBadge'

export default (find, data) => {
  if (find) {
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
                <p>L'indice di qualità dell'aria (AQI) è usato dalle agenzie governative per comunicare al pubblico quanto è inquinata l'aria attualmente o quanto si prevede che lo diventi. I rischi per la salute pubblica aumentano all'aumentare dell'AQI.</p>
                <h6>pm2.5</h6>
                <p>PM 2.5 è una classificazione numerica data alle polveri sottili in base alle dimensioni medie delle loro particelle.
                Con il termine PM 2,5 si raggruppano tutte le particelle aventi dimensioni minori o uguali a 2,5 micron (µm) ( dove 1 micron (μ) corrisponde ad un millesimo di millimetro ).</p>
                <h6>pm10</h6>
                <p>Il particolato, nella chimica ambientale, indica l'insieme delle sostanze solide o liquide sospese in aria che hanno dimensioni che variano da pochi nanometri a 100 µm. Il particolato è uno degli inquinanti più frequenti nelle aree urbane.</p>
                <h6>o3</h6>
                <p>E' un inquinante molto tossico per l'uomo, è un irritante per tutte le membrane mucose ed una esposizione critica e prolungata può causare tosse, mal di testa e perfino edema polmonare.
                L'Ozono è, fra gli inquinanti atmosferici, quello che svolge una marcata azione fitotossica nei confronti degli organismi vegetali, con effetti immediatamente visibili di necrosi fogliare ed effetti meno visibili come alterazioni enzimatiche e riduzione dell'attività di fotosintesi. </p>
                <h6>CO</h6>
                <p>Il monossido di carbonio (o ossido di carbonio o ossido carbonioso) è un gas incolore, inodore e insapore leggermente meno denso dell'aria. Se presente in concentrazioni superiori a circa 35 ppm risulta altamente tossico per gli animali, sia vertebrati che invertebrati, che usano l'emoglobina per trasportare l'ossigeno all'interno dell'organismo; in piccole quantità viene tuttavia prodotto dal normale metabolismo animale e si ritiene svolga alcune normali funzioni biologiche.</p>
                <h6>No2</h6>
                <p>Il diossido di azoto è un forte irritante delle vie polmonari; già a moderate concentrazioni nell'aria provoca tosse acuta, dolori al torace, convulsioni e insufficienza circolatoria.</p>
            </div>
          </div>
        </div>
      </div>
      
      
      `;
    document.getElementById("data-value").innerHTML = dataValue;
    document.getElementById("data-row").scrollIntoView();
  } else {
    //404 not found
    document.getElementById("data-value").innerHTML = `
    <div class="not-found">
    <p>404<i class="far fa-sad-tear"></i></p>
    <h3>Non ho trovato nessuna stazione in questa citta!</h3>
    </div>`;
    document.getElementById("data-row").scrollIntoView();
  }

}