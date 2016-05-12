var sdk = new CitySDK(); //Create the CitySDK Instance
var census = sdk.modules.census; //Create an instance of the module
census.enable("4eec81c83b1659c8430d700582947782ab1c196c"); //Enable module with the API key

//creating the request
var request = {
    "level": "county",
    "zip": "30519",
    "variables": [
        "income",
        "population",
        "median_male_age",
    ],
    //"api": "acs5",
    "year": "2013"
};

census.APIRequest(request, function (response) {
    //Outputs the raw JSON text
   jQuery("#data").text(JSON.stringify(response, null, 4));
});







//// OLD BELOW HERE IGNORE IGNORE  /////////
// var sdk = new CitySDK();
// census = sdk.modules.census;
// census.enable("4eec81c83b1659c8430d700582947782ab1c196c");

// var request = {
//     "zip": "30519",
//     "variables": [
//         "income",
//         "population",
//         "median_male_age",
//     ],
//     "level": "tract"
// }

// var callback = function(response) {
//     map.data.addGeoJson(response);
// };

// census.GEORequest(request, callback);

/////////////// Version 2 ////////////////////

//demographics of Gwinnett county 

// var sdk = new CitySDK();
// census = sdk.modules.census;
// census.enable("4eec81c83b1659c8430d700582947782ab1c196c");

// var request = {
//     "level":"state",
//     "state":"GA",
//     "sublevel":"county",
//     "name": "Gwinnett County",
//     "variables": [
//         "income",
//         "population",
//         "median_male_age",
//     ],
//     "year": "2014",  
// }

// census.APIRequest(request, function(response) {
//     jQuery("#data").text(JSON.stringify(response, null, 4));
// });


