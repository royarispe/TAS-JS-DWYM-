const iText = document.getElementById("iText");
const nNum = document.getElementById("nNum");
const repeatBtn = document.getElementById("repeatBtn");
const reverseBtn = document.getElementById("reverseBtn");

//Parte 1: Manipulación de Cadenas

//Repetir.
const repeatString = (text, num) => {
    const addText = document.createElement("p");
    for (let i = 0; i < num; i++) {
        addText.innerHTML += text + "<br>";
    }
    document.body.appendChild(addText);
};

//Invertir.
const reverseString = (text) => {
    const reversedText = text.split('').reverse().join('');
    const pElement = document.createElement("p");
    pElement.innerHTML = reversedText;
    document.body.appendChild(pElement);
};

repeatBtn.addEventListener("click", () => {
    repeatString(iText.value, parseInt(nNum.value));
});

reverseBtn.addEventListener("click", () => {
    reverseString(iText.value);
});

//Parte 2: Manipulación de Arrays

//Numeros
const arrayInput = document.getElementById("arrayInput");
const itemInput = document.getElementById("itemInput");
const removeBtn = document.getElementById("removeBtn");

const removeFromArray = (arreglo, item) => {
    const resultArray = arreglo.reduce((acc, element) => {
        if (element !== item) {
            acc.push(element);
        }
        return acc;
    },[]);
    console.log(resultArray);
    return resultArray;
};

removeBtn.addEventListener("click", () => {
    const array = arrayInput.value.split(',');
    const item = itemInput.value;
    removeFromArray(array, item);
});

//Libros
const booksInput = document.getElementById("booksInput");
const getTitlesBtn = document.getElementById("getTitlesBtn");
const titlesDiv = document.getElementById("titles");

const getTheTitles = (books) => {
    const titles = books.map(book => book.title);
    console.log(titles);
    titlesDiv.innerHTML = "";

    // Mostrar los títulos en el HTML
    titles.forEach(title => {
        const h1Element = document.createElement("h1");
        h1Element.innerText = title;
        titlesDiv.appendChild(h1Element);
    });

    return titles;
};

getTitlesBtn.addEventListener("click", () => {
    try {
        const books = JSON.parse(booksInput.value);
        if (Array.isArray(books)) {
            getTheTitles(books);
        } else {
            console.error("El formato ingresado no es un arreglo de objetos.");
        }
    } catch (error) {
        console.error("Error al parsear el JSON: ", error.message);
    }
});

/*
JSON para test:

[
    {"title": "Harry Potter y la piedra filosofal", "author": "J.K. Rowling"},
    {"title": "Harry Potter y la cámara secreta", "author": "J.K. Rowling"},
    {"title": "Harry Potter y el prisionero de Azkaban", "author": "J.K. Rowling"},
    {"title": "Harry Potter y el cáliz de fuego", "author": "J.K. Rowling"},
    {"title": "Harry Potter y la orden del fénix", "author": "J.K. Rowling"},
    {"title": "Harry Potter y el misterio del príncipe", "author": "J.K. Rowling"},
    {"title": "Harry Potter y las reliquias de la muerte", "author": "J.K. Rowling"}
]

[
    {"title": "El Señor de los Anillos: La Comunidad del Anillo", "author": "J.R.R. Tolkien"},
    {"title": "El Señor de los Anillos: Las Dos Torres", "author": "J.R.R. Tolkien"},
    {"title": "El Señor de los Anillos: El Retorno del Rey", "author": "J.R.R. Tolkien"}
]
*/

//Parte 3: Manipulación de Arrays

//Números impares.
const resultsDiv = document.getElementById("resultsPart3");

const getOdds = (nums) => {
    const oddNumbers = nums.filter(num => num % 2 !== 0);
    console.log(oddNumbers);

    resultsDiv.innerHTML = '';

    oddNumbers.forEach(num => {
        const pElement = document.createElement("p");
        pElement.innerText = num;
        pElement.style.color = "violet";
        pElement.style.fontSize = "16px";
        resultsDiv.appendChild(pElement);
    });
    return oddNumbers;
};

getOddsBtn.addEventListener("click", () => {
    const nums = numsInput.value.split(',').map(num => parseInt(num.trim()));
    getOdds(nums);
});

//Duplicados

const duplicates = (nums) => {
    const counts = {};
    const duplicatesFound = {};

    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    resultsDiv.innerHTML = '';

    for (const [num, count] of Object.entries(counts)) {
        if (count > 1) {
            duplicatesFound[num] = count;

            const h4Element = document.createElement("h4");
            h4Element.innerText = `Valor duplicado: ${num}`;
            h4Element.style.marginRight = "10px";

            const pElement = document.createElement("p");
            pElement.innerText = `Cantidad: ${count}`;

            const brElement = document.createElement("br");

            resultsDiv.appendChild(h4Element);
            resultsDiv.appendChild(pElement);
            resultsDiv.appendChild(brElement);
            }
    }
};

findDuplicatesBtn.addEventListener("click", () => {
    const nums = numsInput.value.split(',').map(num => parseInt(num.trim()));
    duplicates(nums);
});