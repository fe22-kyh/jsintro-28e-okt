let address = "    Eriksberg 3B";

console.log(address);

address = address.trim(); // trim tar endast bort whitespaces runt texten (ej innuti texten)

console.log(address);

address = address.replace(" ", ""); // Ersätt whitepace med ett tomt tecken

console.log(address);

address = address.replace("berg", "vägen "); // Eriksberg3B --> Eriksvägen 3B

console.log(address);




let url = "https://www.google.com:443/search?q=cats";

//url = url.replace("www.", "");
//url = url.replace(".com", "");

//console.log(url);

//Om söksträngen inte finns, så blir indexOf -1
let index = url.indexOf("www."); //Hämtar index (position) för där sekvensen började

url = url.slice(index); //Ger tillbaka allt som kommer efter den angivna positionen

console.log(url);

index = url.indexOf(":443") // sök sista index 

//från början till index
url = url.slice(0, index) // www.google.com:443/search?q=cats --> www.google.com

console.log(url);

if (url.indexOf("https://") == -1) { // -1 betyder att texten inte fanns
  console.log("Domänen saknade ett protokol");
}

// Verbet includes bättre beskriver en text sökning
if (!url.includes("/search")) { // Kollar ifall url:en är en sökning
  console.log("url:en är INTE en sökurl");
}