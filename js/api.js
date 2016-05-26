var sdk = new CitySDK(); //Create the CitySDK Instance
var census = sdk.modules.census; //Create an instance of the module
census.enable("4eec81c83b1659c8430d700582947782ab1c196c"); //Enable module with the API key


//creating the request variable. Please note that I have left in income as the default variable.
var request = {
    "level": "county",
    "zip": "",
    "variables": [
        "income"
    ],
    "api": "acs5",
    "year": "",
    "tract": ""
};

//Function which will gather data from user and then submit it to the API. The API will then return 
//the data that was requested. 
function data(){
    var zip = document.getElementById("zip").value;
    var year = document.getElementById("year").value;
    var variable = document.getElementById("variables").value;
    //var tract = document.getElementById("tract").value;
    request.zip = zip;
    request.year = year;
    request.variables.push(variable);

    //The request to gather the actual data.
    census.APIRequest(request, function (response) {
        //Outputs the raw JSON text
        //jQuery("#data").text(JSON.stringify(response, null, 4));
        jQuery("#data").text(JSON.stringify(+response.data[0].income, null, 4));
        //console.log(JSON.parse(test));
        //alert(parseInt(test));
    });     
}


////////// Practice Code //////////////////
//The user enters the zip code of the area that they want to see statistics on. 
// var zip = Number(prompt("Please enter a zip code: "));
// request.zip = zip;

// var year = Number(prompt("Please enter the year"));
// request.year = year;

//Here the user will select which variables they want to see in the area they selected.
// var variable = prompt("Please enter a variable you would like to examine");
// request.variables.push(variable);

// request.variables[1] = "poverty";
// request.variables[2] = "population";
//request.zip = 30305;



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



