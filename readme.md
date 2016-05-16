== README

This is the basic set up of using the CitySDK API from the U.S. Census Bureau. It will ask the user
for a zip code, year, and variables to enter. At that point, data will come back, in JSON format, for the user to examine. 

Information about CitySDK may be found here: 
http://uscensusbureau.github.io/citysdk/

== ISSUES

The user may receive the following error message, when using the Chrome Browser:

index.html:1 XMLHttpRequest cannot load http://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Curre…returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.

one solution that I found was to use the CORS plugin for Chrome. I am not sure if this error appears on other browsers. 

One can read about this problem here:

http://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource

