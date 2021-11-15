'use strict';

function getRandomCust(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


let shopsList = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']; // from emily

let cookieShop = {
    location: 'Seattle',
    minHourlyCust: 23,
    maxHourlyCust: 65,
    cookieRate: 6.3,
    avg: 0,
    random: 0,
    totalArray: [],
    total: 0,

    getAverage: function () {
        this.random = getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        this.avg = this.cookieRate * this.random;
        return this.random;
    },

    getTotal: function () {
        
        
        for (let i = 0; i < hours.length; i+=1){
            this.totalArray.push(this.getAverage());
            this.total = this.total + this.totalArray[i];
            console.log(this.totalArray[i]);
        }
        console.log(this.total);
        return this.total;
    }

}




let cookieShop1 = {
    location: 'Tokyo',
    minHourlyCust: 3,
    maxHourlyCust: 24,
    cookieRate: 1.2,
    avg: 0,
    random: 0,
    totalArray: [],
    total: 0,

    getAverage: function () {
        this.random = getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        this.avg = this.cookieRate * this.random;
        return this.random;
    },
    
    getTotal: function () {
        
        
        for (let i = 0; i < hours.length; i+=1){
            this.totalArray.push(this.getAverage());
            this.total = this.total + this.totalArray[i];
            console.log(this.totalArray[i]);
        }
        console.log(this.total);
        return this.total;
    }


}

let cookieShop2 = {
    location: 'Dubai',
    minHourlyCust: 11,
    maxHourlyCust: 38,
    cookieRate: 3.7,
    avg: 0,
    random: 0,
    totalArray: [],
    total: 0,

    getAverage: function () {
        this.random = getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        this.avg = this.cookieRate * this.random;
        return this.random;
    },
    
    getTotal: function () {
        
        
        for (let i = 0; i < hours.length; i+=1){
            this.totalArray.push(this.getAverage());
            this.total = this.total + this.totalArray[i];
            console.log(this.totalArray[i]);
        }
        console.log(this.total);
        return this.total;
    }


}

let cookieShop3 = {
    location: 'Paris',
    minHourlyCust: 20,
    maxHourlyCust: 38,
    cookieRate: 2.3,
    avg: 0,
    random: 0,
    totalArray: [],
    total: 0,

    getAverage: function () {
        this.random = getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        this.avg = this.cookieRate * this.random;
        return this.random;
    },
    
    getTotal: function () {
        
        
        for (let i = 0; i < hours.length; i+=1){
            this.totalArray.push(this.getAverage());
            this.total = this.total + this.totalArray[i];
            console.log(this.totalArray[i]);
        }
        console.log(this.total);
        return this.total;
    }

}

let cookieShop4 = {
    location: 'Lima',
    minHourlyCust: 2,
    maxHourlyCust: 16,
    cookieRate: 4.6,
    avg: 0,
    random: 0,
    totalArray: [],
    total: 0,

    getAverage: function () {
        this.random = getRandomCust(this.minHourlyCust, this.maxHourlyCust);
        this.avg = this.cookieRate * this.random;
        return this.avg;
    },

    getTotal: function () {
        
        
        for (let i = 0; i < hours.length; i+=1){
            this.totalArray.push(this.getAverage());
            this.total = this.total + this.totalArray[i];
            console.log(this.totalArray[i]);
        }
        console.log(this.total);
        return this.total;
    }

  
}



let cookieContainer = document.getElementById('cookieShops');

function renderSeattle() {

    const h3Elem = document.createElement('h3');
    cookieContainer.appendChild(h3Elem);
    h3Elem.textContent = cookieShop.location;

    function renderList() {

        const ulElem = document.getElementById('cookieShops');

        for (let i = 0; i < hours.length; i += 1) {

            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = hours[i] + ": " + cookieShop.getAverage(); + " cookies";
        }
        const totalElem = document.createElement('li');
        ulElem.appendChild(totalElem);
        totalElem.textContent = "Total: " + cookieShop.getTotal(); + " cookies";

    }
    renderList();

}


function renderTokyo() {


    const h3Elem = document.createElement('h3');
    cookieContainer.appendChild(h3Elem);
    h3Elem.textContent = cookieShop1.location;

    function renderList() {

        const ulElem = document.getElementById('cookieShops');

        for (let i = 0; i < hours.length; i += 1) {

            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = hours[i] + ": " + cookieShop1.getAverage(); + " cookies";
        }

        const totalElem = document.createElement('li');
        ulElem.appendChild(totalElem);
        totalElem.textContent = "Total: " + cookieShop1.getTotal(); + " cookies";
    }
    renderList();
}



function renderDubai() {


    const h3Elem = document.createElement('h3');
    cookieContainer.appendChild(h3Elem);
    h3Elem.textContent = cookieShop2.location;

    function renderList() {

        const ulElem = document.getElementById('cookieShops');

        for (let i = 0; i < hours.length; i += 1) {

            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = hours[i] + ": " + cookieShop2.getAverage(); + " cookies";
        }

        const totalElem = document.createElement('li');
        ulElem.appendChild(totalElem);
        totalElem.textContent = "Total: " + cookieShop2.getTotal(); + " cookies";
    }
    renderList();
}

function renderParis() {


    const h3Elem = document.createElement('h3');
    cookieContainer.appendChild(h3Elem);
    h3Elem.textContent = cookieShop3.location;

    function renderList() {

        const ulElem = document.getElementById('cookieShops');

        for (let i = 0; i < hours.length; i += 1) {

            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = hours[i] + ": " + cookieShop3.getAverage(); + " cookies";
        }

        const totalElem = document.createElement('li');
        ulElem.appendChild(totalElem);
        totalElem.textContent = "Total: " + cookieShop3.getTotal(); + " cookies";

    }
    renderList();
}

function renderLima() {


    const h3Elem = document.createElement('h3');
    cookieContainer.appendChild(h3Elem);
    h3Elem.textContent = cookieShop4.location;

    function renderList() {

        const ulElem = document.getElementById('cookieShops');

        for (let i = 0; i < hours.length; i += 1) {

            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = hours[i] + ": " + cookieShop4.getAverage(); + " cookies";
        }

        const totalElem = document.createElement('li');
        ulElem.appendChild(totalElem);
        totalElem.textContent = "Total: " + cookieShop4.getTotal(); + " cookies";


    }
    renderList();
}





renderSeattle();
renderTokyo();
renderDubai();
renderParis();
renderLima();

// sales data

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this: 
