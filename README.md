# pollution.info
<img width="853" alt="pollution info cattura" src="https://user-images.githubusercontent.com/46674104/114723362-e58fc280-9d3a-11eb-80ac-aebf89549682.PNG">

This is a web application to know the pollution level of a city or your current location. 

This project was developed in Javascript using webpack.

The data is provided by the [World Air Quality Index](https://waqi.info/) and consumed via api rest. 

## Demo Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/b228a78b-18fa-49f8-9593-7d1416cab99b/deploy-status)](https://app.netlify.com/sites/compassionate-lalande-eb32ad/deploys)

You can try the demo site at [https://compassionate-lalande-eb32ad.netlify.app/](https://compassionate-lalande-eb32ad.netlify.app/).
The deployment is hosted by netlify.

## Settings

If you want to download the code, after cloning the repository and **installing the packages** you will need to **change the name of the `.env_sample` file to `.env`** and change the following line by putting **your personal token you requested [here](https://aqicn.org/data-platform/token/#/) in place of `YOUR_TOKEN`.**

```
TOKEN=YOUR_TOKEN
```

After these steps you can build the application with:
```
npm run build
```

Now open the `index.html` file inside the `dist` folder and enjoy:beers:
