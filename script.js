const container = document.getElementById('container');
const colors = ['#c21c09ff', '#5b1379ff', '#196496ff', '#e67e22', '#2ecc71', '#f1c40f', '#3498db', '#9b59b6', '#34495e', '#00eeffff'];
const SQUARES = 200;
const squares = [];

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
    squares.push(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    
    setTimeout(() => {
        removeColor(element);
    }, 500);
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    const randomSquare = squares[Math.floor(Math.random() * squares.length)];
    setColor(randomSquare);
}, 100);


const bemutatkozas = document.getElementById('bemutatkozas');
const szovegek = [
'Üdvözöllek a portfólió oldalamon!',
'A nevem Bogdán László',
'Köszönöm, hogy benéztél hozzám!',
];

let szovegIndex = 0;
let karakterIndex = 0;

function getRandomDelay() {
    return Math.random() * 100 + 50; 
}

function typeWriter() {
    if (szovegIndex < szovegek.length) {
        const aktualisSzoveg = szovegek[szovegIndex];
        
        if (karakterIndex < aktualisSzoveg.length) {
            bemutatkozas.innerHTML += aktualisSzoveg.charAt(karakterIndex);
            karakterIndex++;
            setTimeout(typeWriter, getRandomDelay());
        } else {
            bemutatkozas.innerHTML += '<br>';
            szovegIndex++;
            karakterIndex = 0;
            setTimeout(typeWriter, 800);
        }
    }
}
setTimeout(typeWriter, 500);


window.onload = function(){
    const cards = [
    {
    'id':1,
    'name': 'JavaScript',
    'description': 'A Javascript az egyik kedvencem, rengeteg kreatív ötletet tudtam már vele megvalósítani',
    'github': 'https://github.com/lacko186/carshop'
    },
        {
    'id':2,
    'name': 'PHP',
    'description': 'PHP segítségével láttam bele a szerveroldal működésébe, remek keretrendszerek és a szerverkapcsolatok létrehozására',
    'github': 'https://github.com/lacko186/Kapostransit_vizsgaremek'
    },
        {
    'id':3,
    'name': 'C++',
    'description': 'a C++ egy kihívás volt számomra, egy erősen típusos nyelv ami ténylegesen megtanít',
    'github': 'https://github.com/lacko186/alapok'
    },
        {
    'id':4,
    'name': 'C#',
    'description': 'A C#-al a kreativitás határtalan, az asztali alkalmazásokon keresztül, játékokon át mindenre tökéletes',
    'github': 'https://github.com/lacko186/asztali_gyakorlo'
    },
        {
    'id':5,
    'name': 'Python',
    'description': 'A python egyszerűségében rejlik a bonyolultsága, a modern machine learning alapja',
    'github': 'https://github.com/lacko186/python_alapok'
    },
    {
    'id':6,
    'name': 'Android',
    'description': 'A Kotlinnal rengeteg Androidos kreatív alkalmazás készült, hátránya az erősforrásigény',
    'github': 'https://github.com/lacko186/Android'
    }
]

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');

one.innerHTML = `<h1>${cards[0].name}</h1><br<p>${cards[0].description}</p><a href='${cards[0].github}'>${cards[0].github}</a>`
two.innerHTML = `<h1>${cards[1].name}</h1><br<p>${cards[1].description}</p><a href='${cards[1].github}'>${cards[1].github}</a>`
three.innerHTML = `<h1>${cards[2].name}</h1><br<p>${cards[2].description}</p><a href='${cards[2].github}'>${cards[2].github}</a>`
four.innerHTML = `<h1>${cards[3].name}</h1><br<p>${cards[3].description}</p><a href='${cards[3].github}'>${cards[3].github}</a>`
five.innerHTML = `<h1>${cards[4].name}</h1><br<p>${cards[4].description}</p><a href='${cards[4].github}'>${cards[4].github}</a>`
six.innerHTML = `<h1>${cards[5].name}</h1><br<p>${cards[5].description}</p><a href='${cards[5].github}'>${cards[5].github}</a>`}

const tapasztalat = document.getElementById('tapasztalat');
const tapasztalatok = [{
'id':1,
'date': '2023.03-2023.06',
'position': 'Gyakornok',
'company': 'Alfabox Kft',
'description': 'Webfejlesztő gyakornokként dolgoztam, ahol HTML, CSS, JavaScript és PHP nyelveken fejlesztettem weboldalakat és alkalmazásokat. Részt vettem a front-end és back-end fejlesztési folyamatokban, valamint adatbázis-kezelési feladatokban is. '

},
{
    'id':2,
    'date': '2024.03-2025.06',
    'position': 'Gyakornok',
    'company': 'Kaposvári Informatika Nonprofit Kft.',
    'description': 'Szoftverfejlesztő gyakornokként dolgoztam, ahol különböző programozási nyelveken, például C#, Java és Python használatával fejlesztettem szoftvermegoldásokat. Részt vettem a teljes fejlesztési ciklusban, beleértve a tervezést, kódolást, tesztelést és hibajavítást is.'
}
]

tapasztalat.innerHTML = `<h2>${tapasztalatok[0].date}</h2><h3>${tapasztalatok[0].position}</h3><u><h4>${tapasztalatok[0].company}</h4></u><p>${tapasztalatok[0].description}</p><br><h2>${tapasztalatok[1].date}</h2><h3>${tapasztalatok[1].position}</h3><u><h4>${tapasztalatok[1].company}</h4></u><p>${tapasztalatok[1].description}</p>`

