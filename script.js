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
    this.getAverage();
}

Cookieshop.prototype.getAverage = function () {
    const avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    return Math.ceil(avg);
},


const seattle = new Cookieshop('Seattle', 23, 65, 6.3, 0);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2, 0);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7, 0);
const paris = new Cookieshop('Paris', 20, 38, 2.3, 0);
const lima = new Cookieshop('Lima', 2, 16, 4.6, 0);

// Calculate and store average sales per hour for this shop 
// Get total sales

// Array with hours

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily

for (let i = 0; i < hours.length; i++) {
    limaShop.avgPerHour[i] = limaShop.getAverage();
    

}
console.log(limaShop.avgPerHour);

// from Class 07, but typed out
const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

const topRow = document.createElement('tr'); // col names
tableElem.appendChild(topRow);

const location = document.createElement('th');
headerRowElem.appendChild(location);
location.textContent = 'Location';

const location = document.createElement('th');
headerRowElem.appendChild(location);
location.textContent = 'Min / Cust';

const location = document.createElement('th');
headerRowElem.appendChild(location);
location.textContent = 'Max / Cust';

const location = document.createElement('th');
headerRowElem.appendChild(location);
location.textContent = 'Avg Cookie / Sale';

const infoRow = document.createElement('tr'); // values within
tableElem.appendChild(infoRow);



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
liElem.textContent = frankie.name;// set/update child content as needed

// sales data

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this: 