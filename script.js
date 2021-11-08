'use strict';
// RNG for customers per hour
function getRandomCust(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function randomInRange(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// Array with hours
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily

Cookieshop.prototype.calcSalesThisHour = function () {

    for (let i = 0; i < hours.length; i += 1) {

        const customerRange = this.maxHourlyCust - this.minHourlyCust + 1;

        const randomCustomerNumber = Math.floor(Math.random() * customerRange);

        const fixedToMakeSenseCustomerCount = randomCustomerNumber + this.minHourlyCust;

        const salesThisHour = Math.ceil(fixedToMakeSenseCustomerCount * this.cookiesPerCust);

        this.cookiesSoldEachHour.push(salesThisHour);

        // Old code not returning the right values. Using class demo code to see if it fixes it.
        // const average = Math.ceil((this.cookiesPerCust * getRandomCust(this.minHourlyCust, this.maxHourlyCust)));
        // return Math.ceil(average); 


    }

}

// Shop Constructor
function Cookieshop(cityName, minHourlyCust, maxHourlyCust, cookiesPerCust) {
    this.location = cityName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.cookiesPerCust = cookiesPerCust;
    this.average = 0;
    this.cookiesSoldEachHour = [];
    this.hourlyTotals = [];
    this.calcSalesThisHour();
    this.getHourlySales();
    //this.getTheHourlySalesTotal();
}


// Calculate and store average sales per hour for this shop 
Cookieshop.prototype.getHourlySales = function () {
    for (let i = 0; i < hours.length; i++) {
        // this.cookiesSoldEachHour[i] = this.calcSalesThisHour();
        // this.cookiesSoldEachHour.push(this.cookiesSoldEachHour[i]);
        return this.cookiesSoldEachHour[i];
    }
}

const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 4.6);











Cookieshop.prototype.getTotalSales = function () {
    let salesTotal = 0;
    for (let i = 0; i < hours.length; i++) {

        salesTotal += this.cookiesSoldEachHour[i];
    }
    return salesTotal;
}


// *** Under Construction ***
const button = document.getElementById('button1');

button.addEventListener('click', handleClick);

function handleClick() {
    document.getElementById("entryForm").submit();
    alert('Form submitted.');
    const locationNew = document.getElementById("location");
    const minCookiesNew = document.getElementById("minCookies");
    const maxCookiesNew = document.getElementById("maxCookies");

    console.log(locationNew, mincookiesNew, maxCookiewsNew);
}



let allShopHourlyTotalSales = [];








const cookieContainerElem = document.getElementById('cookieShops');
const articleElem = document.createElement('article'); // create article in HTML
cookieContainerElem.appendChild(articleElem);

// from Class 07, but typed out
const tableElem = document.createElement('table'); // create table
articleElem.appendChild(tableElem);


function renderHeaderRow() {

    const topRow = document.createElement('tr'); // col names
    tableElem.appendChild(topRow);

    // Table Headings 
    const locationHeading = document.createElement('th');
    topRow.appendChild(locationHeading);
    locationHeading.textContent = 'Location';

    for (let i = 0; i < hours.length; i += 1) {
        const thElem = document.createElement('th');
        topRow.appendChild(thElem);
        thElem.textContent = hours[i];
    }

    const totalCookiesHeading = document.createElement('th');
    topRow.appendChild(totalCookiesHeading);
    totalCookiesHeading.textContent = 'Location Total';

}


Cookieshop.prototype.render = function () {

    // Values inside the tables
    const dataRowElem = document.createElement('tr');
    tableElem.appendChild(dataRowElem);

    const cityName = document.createElement('td');
    dataRowElem.appendChild(cityName);
    cityName.textContent = this.location;

    for (let i = 0; i < hours.length; i += 1) {
        const thElem = document.createElement('td');
        dataRowElem.appendChild(thElem);
        thElem.textContent = this.cookiesSoldEachHour[i];

    }

    const totalCookies = document.createElement('td');
    dataRowElem.appendChild(totalCookies);
    totalCookies.textContent = this.getTotalSales();



}

let hourlyTotals = [];
function getTheHourlySalesTotal() {
    // outer (aka slow) loop is the hours
    let hourlySalesTotal = 0;
    for (let hourIndex = 0; hourIndex < hours.length; hourIndex += 1) {
        // now we're in the hourly slot

        


        let shops = [seattle, tokyo, dubai, paris, lima];
        // inner loop is over the shops
        for (let shopIndex = 0; shopIndex < shops.length; shopIndex += 1) {

            const currentShop = shops[shopIndex];

            const hourlySalesForCurrentShop = currentShop.cookiesSoldEachHour[hourIndex];

            hourlySalesTotal = hourlySalesTotal + hourlySalesForCurrentShop;
        }

        
        hourlyTotals.push(hourlySalesTotal);

    }
    return hourlySalesTotal;


}




//console.log(hourlyTotals);

// Function added to bottom row.
function renderFooterRow() {
    // Add up hourly total

    // let thatOneHourOfSales = 0;

    // getThatOneHourSales();
    
   
       

    // Add to the table a row 
    const tableRow = document.createElement('tr');
    tableElem.appendChild(tableRow);

    // need one cell for location 
    const thElem = document.createElement('th');
    tableRow.appendChild(thElem);
    thElem.textContent = 'Totals';

    // need cell each for every hour (loop)
    for (let i = 0; i < hours.length; i += 1) {

        const thElem = document.createElement('th');
        tableRow.appendChild(thElem);
        thElem.textContent =  hourlyTotals[i];
        
    }

    // need one cell for megatotal
    const lastCell = document.createElement('th');
    const theTotal = getTheHourlySalesTotal();
    tableRow.appendChild(lastCell);
    lastCell.textContent = theTotal;


}



renderHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterRow();



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
