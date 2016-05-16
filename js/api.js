var sdk = new CitySDK(); //Create the CitySDK Instance
var census = sdk.modules.census; //Create an instance of the module
census.enable("4eec81c83b1659c8430d700582947782ab1c196c"); //Enable module with the API key


//creating the request
var request = {
    "level": "county",
    "zip": "",
    "variables": [
        "income"
    ],
    "api": "acs5",
    "year": "2013"
};

var zip = Number(prompt("Please enter a zip code: "));
request.zip = zip;

var variable = prompt("Please enter a variable you would like to examine");
request.variables.push(variable);

request.variables[1] = "poverty";
request.variables[2] = "population";
//request.zip = 30305;

census.APIRequest(request, function (response) {
    //Outputs the raw JSON text
   jQuery("#data").text(JSON.stringify(response, null, 4));
});



////////////////// Below This line works Commented out in case I mess something up above //////////////

//var sdk = new CitySDK(); //Create the CitySDK Instance
//var census = sdk.modules.census; //Create an instance of the module
//census.enable("4eec81c83b1659c8430d700582947782ab1c196c"); //Enable module with the API key

//creating the request
// var request = {
//     "level": "county",
//     "zip": "30519",
//     "variables": [
//         "income",
//         "population",
//         "median_male_age",
//         "median_home_value",
//     ],
//     "api": "acs5",
//     "year": "2013"
// };

// var zip = Number(prompt("Please enter a zip code: "));
// request.zip = zip;
// alert(zip);

// census.APIRequest(request, function (response) {
    //Outputs the raw JSON text
//    jQuery("#data").text(JSON.stringify(response, null, 4));
// });



