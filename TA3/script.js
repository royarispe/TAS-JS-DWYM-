// Parte 3-1
const generatePasswd = document.getElementById('generatePasswd');

const generatePassword = (length) => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

    let password = '';
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    if (length < 8) {
        length = 8;
    }
    
    while (password.length < length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    const pElement = document.createElement('p');
    pElement.textContent = `Su contraseña generada es: ${password}`;
    document.getElementById('resultPasswd').innerHTML = '';
    document.getElementById('resultPasswd').appendChild(pElement);  
}

generatePasswd.addEventListener('click', () => {
    let length = document.getElementById('lPassword').value;
    console.log(length);
    generatePassword(length);
});

// Parte 3-2

const addPeople = document.getElementById('addPeople');
const findTheOldestBtn = document.getElementById('findTheOldestBtn');
let peopleArray = [];

const findTheOldest = (array) => {
    let oldest = null;
    for (people of array) {
        if (oldest === null || people.age > oldest.age) {
            oldest = people;
        }
    }
    const pElement = document.createElement('p');
    pElement.textContent = `La persona más vieja es: ${oldest.name} con ${oldest.age} años`;
    document.getElementById('resultPeople').innerHTML = '';
    document.getElementById('resultPeople').appendChild(pElement);
}


addPeople.addEventListener('click', () => {
    let name = document.getElementById('namePeople').value;
    let age = document.getElementById('agePeople').value;

    if (name !== '' && age !== '' && name !== null && age !== null) {
        let people = new People(name, age);
        peopleArray.push(people);
        console.log(peopleArray);

        document.getElementById('namePeople').value = '';
        document.getElementById('agePeople').value = '';
    }
});

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

findTheOldestBtn.addEventListener('click', () => {
    findTheOldest(peopleArray);
});