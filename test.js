var getCountyGeoJSON = require('./index').getCountyGeoJSON;
var fs = require('fs');

var test = getCountyGeoJSON('500k', ['IA'], function(err, data) {
  // console.log(JSON.stringify(data));
  var result = JSON.stringify(data)
  fs.writeFile("/tmp/test.geojson", result, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });

});
