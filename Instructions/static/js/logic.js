//api inside variable
//var url_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

//var url_quakes = "static/data/earthquake_data.geojson";

//get our data using a 
//d3.json(url_quakes, function(data){
    //console.log(data)
   // createFeatures(data.features);
//});

// Creating map object
var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });

//add tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 10,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


// function createFeatures(earthquakeData) {
    
//     function onEachFeature(feature, layer) {
//         layer.bindPopup("<h3>" + feature.properties.place + 
//         "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//     }

//     var earthquakes = L.geoJSON(earthquakeData, {
//         onEachFeature: onEachFeature
//       });

//       createMap(earthquakes);

// }

// function createMap(earthquakes) {


// }