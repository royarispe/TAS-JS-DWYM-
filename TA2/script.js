// Parte 2-1

const sumAllBtn = document.getElementById('sumAllBtn');
const divSum = document.getElementById('sum');
const rangeNum = document.getElementById('rangeNum');

const sumAll = (min, max) => {
    let sum = 0;
    while (min <= max) {
        sum += min;
        min++;
    }
    const pElement = document.createElement('p');
    pElement.innerText = sum;
    divSum.innerHTML = ''; // Limpiar sumas anteriores
    divSum.appendChild(pElement);
}

sumAllBtn.addEventListener('click', () => {
    let range = rangeNum.value.split(',').map(num => parseInt(num.trim()));
    console.log(range);
    sumAll(range[0], range[1]);
});

//Parte 2-2

const convertTempBtn = document.getElementById('convertTempBtn');

const celsiusToFahrenheit = (celsius) =>{
    let faren = (celsius * 9/5) + 32;
    console.log(faren);
    const pElement = document.createElement('p');
    pElement.innerText = `${celsius}°C = ${faren.toFixed(2)}°F`;
    document.getElementById('celsius-conversion').innerHTML = ''; // Limpiar conversiones anteriores
    document.getElementById('celsius-conversion').appendChild(pElement);
}

const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5/9;
    const pElement = document.createElement('p');
    pElement.innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheit-conversion').innerHTML = ''; // Limpiar conversiones anteriores
    document.getElementById('fahrenheit-conversion').appendChild(pElement);
}

convertTempBtn.addEventListener('click', () => {
    let celsius = document.getElementById('celsius');
    let fahrenheit = document.getElementById('fahrenheit');

    if (celsius !== null) {
        celsiusToFahrenheit(parseFloat(celsius.value));
    }
    if (fahrenheit !== null && fahrenheit.value !== '') {
        fahrenheitToCelsius(parseFloat(fahrenheit.value));
    }
});

// Parte 2-3

const leapYearBtn = document.getElementById('leapYearBtn');

const leapYears = (anio) => {
    let isLeap = false;
    if (anio % 4 === 0 && anio % 100 !== 0) {
        isLeap = true;
    } else if (anio % 400 === 0) {
        isLeap = true;
    }
    const pElement = document.createElement('p'); 
    pElement.innerText = isLeap ? 'Es bisiesto' : 'No es bisiesto';
    document.getElementById('leapYearResult').innerHTML = ''; // Limpiar conversiones anteriores
    document.getElementById('leapYearResult').appendChild(pElement);
}

leapYearBtn.addEventListener('click', () => {
    let year = document.getElementById('leapYear');
    if (year !== null && year.value !== '') {
        leapYears(parseInt(year.value));
    }
});

// Parte 2-4

const sumArrayBtn = document.getElementById('sumArrayBtn');

const getSum = (array) => {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    const pElement = document.createElement('p');
    pElement.innerText = `La suma de los elementos del arreglo es: ${sum}`;
    document.getElementById('sumArrayResult').innerHTML = ''; // Limpiar conversiones anteriores
    document.getElementById('sumArrayResult').appendChild(pElement);
};

sumArrayBtn.addEventListener('click', () => {
    let array = document.getElementById('sumArray').value.split(',').map(num => parseInt(num.trim()));
    getSum(array);
});
