//api inside variable
var url_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

var url_quakes = "static/data/earthquake_data.geojson";

//get our data using a 
d3.json(url_quakes, function(data){
    console.log(data)
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {
    
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place + 
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }

    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature
      });

      createMap(earthquakes);

}