import GetCurrentPosition from './CurrentPosition'
import './css/style.css'




function component() {
  alert("init");
    
    const element = document.createElement('div');
    GetCurrentPosition((position) => {
      alert(position)
      element.innerHTML = position.latitude;
    });
    return element;
  }
  
  document.body.appendChild(component());