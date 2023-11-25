let cities = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral","Nagpur","Pune"];

// let cityList = "<li>"+cities[0]+"</li>";
// cityList = cityList + "<li>"+cities[1]+"</li>";
// cityList = cityList + "<li>"+cities[2]+"</li>";
// cityList = cityList + "<li>"+cities[3]+"</li>";
// cityList = cityList + "<li>"+cities[4]+"</li>";
//loops
console.log("lenght",cities.length);
let cityList = "";
for(let i=0; i<cities.length; i++){
    cityList = cityList + "<li>"+cities[i]+"</li>";
}
document.getElementById("cities").innerHTML = cityList;