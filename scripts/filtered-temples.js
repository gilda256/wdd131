const temples = [
    {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 10",
        area: 62000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg"
    },
    {
        templeName: "Boston Massachusetts Temple",
        location: "Belmont, Massachusetts, United States",
        dedicated: "2000, October, 1",
        area: 32375,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
    },
    {
        templeName: "Twin Falls Idaho Temple",
        location: "Twin Falls, Idaho, United States",
        dedicated: "2008, August, 28",
        area: 90000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/twin-falls-idaho/400x250/twin-falls-temple-850955-wallpaper.jpg"
    },
    {
        templeName: "Brigham City Utah Temple",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, September, 26",
        area: 12545,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
    },
    {
        templeName: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona, United States",
        dedicated: "2014, November, 16",
        area: 52000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/2018/400x250/Phoenix-Arizona-Temple-4-1300737.jpg"
    },
    {
        templeName: "Denver Colorado Temple",
        location: "Denver, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 75600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-766966-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicated: "1995, September, 11",
        area: 50000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
    },
    {
        templeName: "Sacramento California Temple",
        location: "Sacramento, California, United States",
        dedicated: "2006, September, 3",
        area: 470000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-769989-wallpaper.jpg"
    },
    {
        templeName: "Gilbert Arizona Temple",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 62000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-temple-evening-1172169-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518357-wallpaper.jpg"
    },
];


const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
    populateTempleCards(temples);
});

oldButton.addEventListener('click', () => {

    const oldTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900);

    populateTempleCards(oldTemples);
});

newButton.addEventListener('click', () => {

    const newTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000);

    populateTempleCards(newTemples);
});

largeButton.addEventListener('click', () => {

    const largeTemples = temples.filter((temple) => temple.area > 90000);

    populateTempleCards(largeTemples);
});

smallButton.addEventListener('click', () => {

    const smallTemples = temples.filter((temple) => temple.area < 10000);

    populateTempleCards(smallTemples);
});


function generateTempleCard(temple) {
    return `<figure>
            <figcaption>
                <h2>${temple.templeName}</h2>
                <p><strong>Location: </strong>${temple.location}</p>
                <p><strong>Dedicated: </strong>${temple.dedicated}</p>
                <p><strong>Size: </strong>${temple.area} sq ft</p>
            </figcaption>
            <img src="${temple.imageUrl}"
                alt="Picture of the ${temple.templeName}" loading="lazy" width="400" height="250">
        </figure>`;
}

function populateTempleCards(temples) {
    const mainElement = document.querySelector("main");

    mainElement.innerHTML = "<h2>Home</h2>";

    for (let i = 0; i < temples.length; i++) {
        mainElement.innerHTML = mainElement.innerHTML + generateTempleCard(temples[i]);
    }
}

populateTempleCards(temples);