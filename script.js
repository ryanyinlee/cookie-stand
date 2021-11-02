'use strict';

var i;


function getRandomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(getRandomCust(1,10));



let seattleShop = {
    location: 'Seattle',
    minHourlyCust: 23,
    maxHourlyCust: 65,
    cookieRate: 6.3, // avg cookies per customer/hr
    avg: 0, // placeholder
    
    getAverage: function () {
        this.avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    },


}


let tokyoShop = {
    location: 'Tokyo',
    minHourlyCust: 3,
    maxHourlyCust: 24,
    cookieRate: 1.2,
    avg: 0,

    getAverage: function () {
        this.avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    },

}

let dubaiShop = {
    location: 'Dubai',
    minHourlyCust: 11,
    maxHourlyCust: 38,
    cookieRate: 3.7,
    avg: 0,

    getAverage: function () {
        this.avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    },

}

let parisShop = {
    location: 'Paris',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    cookieRate: 2.3,
    avg: 0,

    getAverage: function () {
        this.avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
    },

}

let limaShop = {
    location: 'Lima',
    minHourlyCust: 2,
    maxHourlyCust: 16,
    cookieRate: 4.6,
    avgPerHour: [],

    getAverage: function () {
        const avg = this.cookieRate * getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        return Math.ceil(avg);
    },

}
// Calculate and store average sales per hour for this shop 
// Get total sales

// Array with hours

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily

for (i = 0; i < hours.length; i++) {
    limaShop.avgPerHour[i] = limaShop.getAverage();
    

}
console.log(limaShop.avgPerHour);



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