import axios from 'axios'
import Render from './RenderValue'

export default (city, position) => {
    
    let APIlink = "";
    
    if(city != undefined){
        APIlink = `https://api.waqi.info/feed/${city}/?token=${process.env.TOKEN}`
    }
    else{
        if(position == undefined){
            throw "Position is not defined"
        }
        console.log("lat" + position.latitude)
        console.log("long" + position.longitude)
        APIlink = `https://api.waqi.info/feed/geo:${position.latitude};${position.longitude}/?token=${process.env.TOKEN}`
        console.log(APIlink)
    }
    console.log("link: " + APIlink);
    axios.get(APIlink).then(res => {
        console.log("res: " + JSON.stringify(res.data))
        Render(true,res.data.data);
    }).catch(error =>{
        console.error(error.data)
        Render(false, error.data);
    });;
}
