const tours = [
    {
      id: 1,
      name: "Kish Island Adventure",
      pricePerPerson: 120,
      image: "image/kish.jpg",
      description: "3-day tropical getaway with snorkeling and island tours."
    },
    {
      id: 2,
      name: "Persepolis Historic Tour",
      pricePerPerson: 90,
      image: "image/persepolis.jpg",
      description: "1-day cultural tour with expert guides and lunch included."
    },
    {
      id: 3,
      name: "Damavand Climbing",
      pricePerPerson: 150,
      image: "image/damavand.jpg",
      description: "2-day adventure tour to Iran's highest peak with gear support."
    }
];

const tourTypeSelect = document.getElementById("tour-type");
const numPeopleInput = document.getElementById("num-people");
const tourPriceDisplay = document.getElementById("tour-price");
const bookingForm = document.getElementById("booking-form");
const message = document.getElementById("form-message");

function updatePrice() {
    const selectedTourId = parseInt(tourTypeSelect.value);
    const numPeople = parseInt(numPeopleInput.value) || 1;
    const selectedTour = tours.find(tour => tour.id === selectedTourId);

    if (selectedTour) {
        const totalPrice = selectedTour.pricePerPerson * numPeople;
        tourPriceDisplay.textContent = `$${totalPrice}`;
    }
}

tourTypeSelect.addEventListener("change", updatePrice);
numPeopleInput.addEventListener("input", updatePrice);

updatePrice();

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedTourId = parseInt(tourTypeSelect.value);
    const date = document.getElementById("tour-date").value;
    const numPeople = parseInt(numPeopleInput.value);

    if (!selectedTourId || !date || !numPeople) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Your tour has been successfully booked!";
    message.style.color = "green";

    bookingForm.reset();
    updatePrice();
});
