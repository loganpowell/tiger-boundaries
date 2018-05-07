var getCountyGeoJSON = require('./index').getCountyGeoJSON;

getCountyGeoJSON('500k', ['IA'], function(err, data) {
  console.log(JSON.stringify(data));
});
