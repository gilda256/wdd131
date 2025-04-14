const destinations = [
    {
      name: "Northern Forests",
      category: "nature",
      image: "image/forest.jpg",
      description: "Lush green forests ideal for family hiking and nature lovers."
    },
    {
      name: "Persepolis",
      category: "historic",
      image: "image/persepolis.jpg",
      description: "Ancient ruins offering a glimpse into Persian empire history."
    },
    {
      name: "Kish Island",
      category: "nature",
      image: "image/kish.jpg",
      description: "Tropical beaches with family-friendly activities."
    },
    {
      name: "Mount Damavand",
      category: "adventure",
      image: "image/damavand.jpg",
      description: "Iran's highest peak – a paradise for climbers and adventurers."
    }
  ];
  
  const filterSelect = document.getElementById("filter");
  const listContainer = document.getElementById("destination-list");
  
  function displayDestinations(filter) {
    listContainer.innerHTML = "";
    const filtered = filter === "all" ? destinations : destinations.filter(dest => dest.category === filter);
  
    filtered.forEach(dest => {
      const card = `
        <div class="destination-card">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
        </div>
      `;
      listContainer.insertAdjacentHTML("beforeend", card);
    });
  }
  
  filterSelect.addEventListener("change", () => {
    displayDestinations(filterSelect.value);
  });
  
  displayDestinations("all");
  