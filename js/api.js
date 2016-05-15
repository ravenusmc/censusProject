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
        "median_home_value",
        "poverty"
    ],
    "api": "acs5",
    "year": "2013"
};

alert(request.variables[1])

census.APIRequest(request, function (response) {
    //Outputs the raw JSON text
   jQuery("#data").text(JSON.stringify(response, null, 4));
});





