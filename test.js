var getCountyGeoJSON = require('./index').getCountyGeoJSON;
var fs = require('fs');
var statesObj = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District of Columbia",
  "FL": "Florida",
  "GA": "Georgia",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

var statesArr = Object.getOwnPropertyNames(statesObj)



// testObj["features"][0]["properties"]["STATEFP"]

var test = getCountyGeoJSON(
  '500k',
  statesArr,
  function(err, data) {
  // console.log(JSON.stringify(data));
  var result = JSON.stringify(data)
  // console.log("getting data " + result["features"][0]["properties"]["STATEFP"] )
  fs.writeFile("/tmp/test.geojson", result, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });

});

// envelope: lat: 50.351052 (N) | lng: -97.923439 (W)
// envelope: lat: 24.934241 (N) | lng: -76.126564 (W)
