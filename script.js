'use strict';

function getRandomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function Cookieshop(cityName, minHourlyCust, maxHourlyCust, cookiesPerCust) {
    this.location = cityName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.cookiesPerCust = cookiesPerCust;
    this.average = 0;
    this.avgPerHour = [];
    this.getAverage();
}

// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 
// Putting these zeroes here for diagnostic reasons.

//avg = 0;



Cookieshop.prototype.getAverage = function () {
    const avg = this.cookiesPerCust * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    return Math.ceil(avg);
}

const seattle = new Cookieshop('Seattle', 23, 65, 6.3, 0);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2, 0);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7, 0);
const paris = new Cookieshop('Paris', 20, 38, 2.3, 0);
const lima = new Cookieshop('Lima', 2, 16, 4.6, 0);

// Calculate and store average sales per hour for this shop 



let tempArray = 0;
Cookieshop.prototype.getHourlySales = function () {
    for (let i = 0; i < hours.length; i++) {
    let tempArray = getAverage();
    const avgHourlyArray = avgPerHour.push(tempArray);
}
}

// Array with hours

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily

let totalSeattle = 0;
// , totalTokyo, totalDubai, totalParis, totalLima

// Get total sales
function seattleTotal()  {
for (let i = 0; i < hours.length; i++) {
    
    totalSeattle = totalSeattle + seattle.avgPerHour[i];
    return totalSeattle;
}
}

//console.log(seattle.getHourlySales());

// console.log(seattle.avgPerHour);

function tokyoTotal() {

for (let i = 0; i < hours.length; i++) {
    tokyo.avgPerHour[i] = tokyo.getAverage();
    totalTokyo = totalTokyo + tokyo.avgPerHour[i];

}
}

function dubaiTotal(){

for (let i = 0; i < hours.length; i++) {
    dubai.avgPerHour[i] = dubai.getAverage();
    totalDubai = totalDubai + dubai.avgPerHour[i];

}
}

function parisTotal(){

for (let i = 0; i < hours.length; i++) {
    paris.avgPerHour[i] = paris.getAverage();
    totalDubai = totalDubai + paris.avgPerHour[i];

}
}


function limaTotal() {
    for (let i = 0; i < hours.length; i++) {
        lima.avgPerHour[i] = lima.getAverage();
        totalDubai = totalDubai + lima.avgPerHour[i];
        
    }
}



// console.log(seattleTotal());
const cookieContainerElem = document.getElementById('cookieShops');

const articleElem = document.createElement('article'); // create article in HTML

cookieContainerElem.appendChild(articleElem);

    // from Class 07, but typed out
    const tableElem = document.createElement('table'); // create table
    articleElem.appendChild(tableElem);

    const topRow = document.createElement('tr'); // col names
    tableElem.appendChild(topRow);

      // Table Headings 
      const locationHeading = document.createElement('th');
      topRow.appendChild(locationHeading);
      locationHeading.textContent = 'Location';
  
      const minHourlyCustHeading = document.createElement('th');
      topRow.appendChild(minHourlyCustHeading);
      minHourlyCustHeading.textContent = 'Min / Cust';
  
      const maxHourlyCustHeading = document.createElement('th');
      topRow.appendChild(maxHourlyCustHeading);
      maxHourlyCustHeading.textContent = 'Max / Cust';
  
      const cookiesPerCustHeading = document.createElement('th');
      topRow.appendChild(cookiesPerCustHeading);
      cookiesPerCustHeading.textContent = 'Avg Cookie / Sale';
  
      const cookieTotalHeading = document.createElement('th');
      topRow.appendChild(cookieTotalHeading);
      cookieTotalHeading.textContent = 'Total Sales';

Cookieshop.prototype.render = function () {

    // Values inside the tables
    const dataRowElem = document.createElement('tr');
    tableElem.appendChild(dataRowElem);

    const cityName = document.createElement('td');
    dataRowElem.appendChild(cityName);
    cityName.textContent = this.location;

    const minHourlyCust = document.createElement('td');
    dataRowElem.appendChild(minHourlyCust);
    minHourlyCust.textContent = this.minHourlyCust;

    const maxHourlyCust = document.createElement('td');
    dataRowElem.appendChild(maxHourlyCust);
    maxHourlyCust.textContent = this.maxHourlyCust;

    const cookiesPerCust = document.createElement('td');
    dataRowElem.appendChild(cookiesPerCust);
    cookiesPerCust.textContent = this.cookiesPerCust;

    const totalCookies = document.createElement('td');
    dataRowElem.appendChild(totalCookies);
    totalCookies.textContent = seattleTotal();

}

console.log(seattle.getHourlySales());
seattle.render();

tokyo.render();
dubai.render();
paris.render();
lima.render();

/*

let cookieContainer = document.getElementById('cookieShops');

const h3Elem = document.createElement('h3');


articleElem.appendChild(h3Elem);
h3Elem.textContent = `${seattle.name}`;

const cookieContainerElem = document.getElementById('cookieShops');
// ^ find parent element (from lecture example)
const listElem = document.createElement('ul');
// ^ create child element
cookieContainerElem.appendChild(listElem);
// ^ add the child to parent
const liElem = document.createElement('li'); // create child
listElem.appendChild(liElem); // append child
liElem.textContent = frankie.name;// set/update child content as needed */

// sales data

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this: 