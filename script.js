'use strict';
// RNG for customers per hour
function getRandomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily
// Shop Constructor
function Cookieshop(cityName, minHourlyCust, maxHourlyCust, cookiesPerCust) {
    this.location = cityName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.cookiesPerCust = cookiesPerCust;
    this.average = 0;
    this.avgPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.getAverage();
    this.getHourlySales();
    this.getTotalSales();
}



Cookieshop.prototype.getAverage = function () {
    const average = (this.cookiesPerCust * getRandomCust(this.minHourlyCust, this.maxHourlyCust));
    return Math.ceil(average);
}

// Calculate and store average sales per hour for this shop 
Cookieshop.prototype.getHourlySales = function () {
    for (let i = 0; i < hours.length; i++) {
    this.avgPerHour[i] = this.getAverage();
    return this.avgPerHour[i];
}
}

Cookieshop.prototype.getTotalSales = function () {
    let outputTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        outputTotal = outputTotal + this.getHourlySales();
        
    }
    return outputTotal;
}




const seattle = new Cookieshop('Seattle', 23, 65, 6.3);
const tokyo = new Cookieshop('Tokyo', 3, 24, 1.2);
const dubai = new Cookieshop('Dubai', 11, 38, 3.7);
const paris = new Cookieshop('Paris', 20, 38, 2.3);
const lima = new Cookieshop('Lima', 2, 16, 4.6);


// Array with hours

const cookieContainerElem = document.getElementById('cookieShops');

const articleElem = document.createElement('article'); // create article in HTML

cookieContainerElem.appendChild(articleElem);

    // from Class 07, but typed out
    const tableElem = document.createElement('table'); // create table
    articleElem.appendChild(tableElem);

    const topRow = document.createElement('tr'); // col names
    tableElem.appendChild(topRow);

      // Table Headings 
      const locationHeading = document.createElement('th'); //1
      topRow.appendChild(locationHeading);
      locationHeading.textContent = 'Location';

    //TODO: Put this in a loop, it's disgusting.
      const minHourlyCustHeading0 = document.createElement('th'); //2
      topRow.appendChild(minHourlyCustHeading0);
      minHourlyCustHeading0.textContent = hours[0];
  
      const maxHourlyCustHeading1 = document.createElement('th'); //3
      topRow.appendChild(maxHourlyCustHeading1);
      maxHourlyCustHeading1.textContent = hours[1];
  
      const maxHourlyCustHeading2 = document.createElement('th'); //4
      topRow.appendChild(maxHourlyCustHeading2);
      maxHourlyCustHeading2.textContent = hours[2];
  
      const maxHourlyCustHeading3 = document.createElement('th'); //5
      topRow.appendChild(maxHourlyCustHeading3);
      maxHourlyCustHeading3.textContent = hours[3];

      const maxHourlyCustHeading4 = document.createElement('th');// 6
      topRow.appendChild(maxHourlyCustHeading4);
      maxHourlyCustHeading4.textContent = hours[4];

      const maxHourlyCustHeading5 = document.createElement('th');//7
      topRow.appendChild(maxHourlyCustHeading5);
      maxHourlyCustHeading5.textContent = hours[5];

      const maxHourlyCustHeading6 = document.createElement('th'); //8
      topRow.appendChild(maxHourlyCustHeading6);
      maxHourlyCustHeading6.textContent = hours[6];

      const maxHourlyCustHeading7 = document.createElement('th'); //9
      topRow.appendChild(maxHourlyCustHeading7);
      maxHourlyCustHeading7.textContent = hours[7];

      const maxHourlyCustHeading8 = document.createElement('th'); //10
      topRow.appendChild(maxHourlyCustHeading8);
      maxHourlyCustHeading8.textContent = hours[8];

      const maxHourlyCustHeading9 = document.createElement('th'); //11
      topRow.appendChild(maxHourlyCustHeading9);
      maxHourlyCustHeading9.textContent = hours[9];

      const maxHourlyCustHeading10 = document.createElement('th'); //12
      topRow.appendChild(maxHourlyCustHeading10);
      maxHourlyCustHeading10.textContent = hours[10];

      const maxHourlyCustHeading11 = document.createElement('th'); //13
      topRow.appendChild(maxHourlyCustHeading11);
      maxHourlyCustHeading11.textContent = hours[11];

      const maxHourlyCustHeading12 = document.createElement('th'); //14
      topRow.appendChild(maxHourlyCustHeading12);
      maxHourlyCustHeading12.textContent = hours[12];

      const maxHourlyCustHeading13 = document.createElement('th'); //15
      topRow.appendChild(maxHourlyCustHeading13);
      maxHourlyCustHeading13.textContent = hours[13];

        const totalCookiesHeading = document.createElement('th'); //16
      topRow.appendChild(totalCookiesHeading);
      totalCookiesHeading.textContent = 'Location Total';


    Cookieshop.prototype.render = function () {

    // Values inside the tables
    const dataRowElem = document.createElement('tr'); 
    tableElem.appendChild(dataRowElem);

    const cityName = document.createElement('td'); //1
    dataRowElem.appendChild(cityName);
    cityName.textContent = this.location;
    
    const hour0 = document.createElement('td'); //2
    dataRowElem.appendChild(hour0);
    hour0.textContent = this.getHourlySales();

    const hour1 = document.createElement('td'); //3
    dataRowElem.appendChild(hour1);
    hour1.textContent = this.getHourlySales();

    const hour2 = document.createElement('td'); //4
    dataRowElem.appendChild(hour2);
    hour2.textContent = this.getHourlySales();

    const hour3 = document.createElement('td'); //5
    dataRowElem.appendChild(hour3);
    hour3.textContent = this.getHourlySales();

    const hour4 = document.createElement('td'); //6
    dataRowElem.appendChild(hour4);
    hour4.textContent = this.getHourlySales();

    const hour5 = document.createElement('td'); //7
    dataRowElem.appendChild(hour5);
    hour5.textContent = this.getHourlySales();

    const hour6 = document.createElement('td'); //8
    dataRowElem.appendChild(hour6);
    hour6.textContent = this.getHourlySales();

    const hour7 = document.createElement('td'); //9
    dataRowElem.appendChild(hour7);
    hour7.textContent = this.getHourlySales();

    const hour8 = document.createElement('td'); //10
    dataRowElem.appendChild(hour8);
    hour8.textContent = this.getHourlySales();

    const hour9 = document.createElement('td'); //11
    dataRowElem.appendChild(hour9);
    hour9.textContent = this.getHourlySales();

    const hour10 = document.createElement('td'); //12
    dataRowElem.appendChild(hour10);
    hour10.textContent = this.getHourlySales();

    const hour11 = document.createElement('td'); //13
    dataRowElem.appendChild(hour11);
    hour11.textContent = this.getHourlySales();

    const hour12 = document.createElement('td'); //14
    dataRowElem.appendChild(hour12);
    hour12.textContent = this.getHourlySales();

    const hour13 = document.createElement('td'); //15
    dataRowElem.appendChild(hour13);
    hour13.textContent = this.getHourlySales();


    const totalCookies = document.createElement('td'); //16
    dataRowElem.appendChild(totalCookies);
    totalCookies.textContent = this.getTotalSales();
    console.log(this.getTotalSales());

}




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