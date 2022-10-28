var carModel = "Volvo"; // före 2016
let carColor = "Silvergrey"; // efter 2016
const carYear = 2015; // const - konstant, får ej ändras

//carYear = 2018; // carYear är const, programmet krashar

// Maroon BMW, year 2017
console.log(carColor + " " + carModel + ", year " + carYear);
console.log(`${carColor} ${carModel}, year ${carYear}`); // String literal

//Om bilen är från 2017 och av modellen SAAB eller av färgen blå, då är den fin.
if (carYear == 2017 && carModel == "SAAB" || carColor == "Blue") {
  //let answer = "yes"; // ej tillgänglig utanför if-satsen
  //var answer = "yes"; // tillgänglig utanför if-satsen (bug-prone)

  console.log("Vilken fin bil");
} // slutet på första if-satsen

//console.log(answer);

//Skriv en if-sats så att en bil är fin om
//den är från 2017 eller av märket volvo endast om den är silvergrå
if (carColor == "Silvergrey" && carYear == 2017 || carModel == "Volvo") {
  console.log("Super fin bil");
}

//den är från 2017 eller av märket volvo, endast om den är silvergrå
if ((carYear == 2017 || carModel == "Volvo") && carColor == "Silvergrey") {
  console.log("En super fin bil");
}

//den är från 2017 eller av märket volvo och av färgen silvergrå
if (carYear == 2017 || carModel == "Volvo" && carColor == "Silvergrey") {
  console.log("En super fin bil");
}

//Krav för ett skottår
//1. Året är jämnt delbart med 4 (1996, 2000, 2004, 2016)
//2. Året är INTE jämnt delbart med 100 (1700, 1800, 1900) EJ skottår
//    a. Året är jämnt delbart med 400 (1600, 2000, 2400)

let year = 1700;

//Alternativ 1
if (year % 400 == 0 || year % 4 == 0) { // jämnt delbart med 4 (resten blir 0)
  if (year % 100 != 0) {
    console.log(year + " is a leap year");
  }
}

//Alternativ 2
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log(year + " is a leap year");
}

//Alternativ 2.1
if (year % 400 == 0) {
  console.log(year + " is a leap year")
}
else if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log(year + " is a leap year");
  }
}


//Skapa en kod som givet en månad och ett år ger antalet dagar till motsvarande månad.

//Ex. month 2, year 1996 --> 29 days (leap year feburary) 
//Ex2. month 1, year 1996 --> 31 days (january)
//Ex3. month 9, year 2002 --> 30 days (september)

let month = 5;
let anno = 1996;

/*if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
  console.log("31 days");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("30 days");
} else if (month == 2) {
  if (anno % 400 == 0 || (anno % 4 == 0 && anno % 100 != 0)) { // byt year till anno
    console.log("29 days");
  } else {
    console.log("28 days");
  }
}*/

let days = 0; // deklarera med initisiseringsvärdet 0

if (month == 2) {
  if (anno % 400 == 0 || (anno % 4 == 0 && anno % 100 != 0)) { // byt year till anno
    console.log("29 days");
  } else {
    console.log("28 days");
  }
} else if (month < 8) {
  days = (month % 2) + 30;
} else {
  //Efter den 7:e månaden, så är jämna månader 31 dagar och ojämna månader 30 dagar
  days = 31 - (month % 2); //9:e september, 9 % 2 = 1    31 - 1 = 30

  //days = ((month - 1) % 2) + 30;
}

// Om du vill lösa en rad, då behöver du tenrary operations
console.log(days + " days");


