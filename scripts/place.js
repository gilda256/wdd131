const temp = 10; 
const windSpeed = 16; 

const tempElement = document.getElementById('temperature');
const windElement = document.getElementById('wind-speed');
const chillElement = document.getElementById('wind-chill');

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return 'N/A';
}

function updateWeather() {
    tempElement.textContent = `${temp}°C`;
    windElement.textContent = `${windSpeed} km/h`;
    chillElement.textContent = calculateWindChill(temp, windSpeed);
    
    if (chillElement.textContent !== 'N/A') {
        chillElement.textContent += '°C';
    }
}

updateWeather();

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
