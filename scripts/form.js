const products = [
    {
        id: "pb-101",
        name: "Quantum Processor",
        averagerating: 4.8
    },
    {
        id: "mb-202",
        name: "AI Neural Network",
        averagerating: 4.2
    },
    {
        id: "sb-303",
        name: "Time Travel Module",
        averagerating: 4.6
    },
    {
        id: "db-404",
        name: "Dimensional Shifter",
        averagerating: 3.9
    },
    {
        id: "tb-505",
        name: "Space Warp Generator",
        averagerating: 4.7
    }
];

const productNameSelect = document.querySelector("#product-name");

productNameSelect.innerHTML = null;

const option = document.createElement("option");
option.disabled = true;
option.selected = true;
option.value = "";
option.innerHTML = "Choose a Product...";
productNameSelect.appendChild(option);

products.forEach(product => {
    const option = document.createElement("option");
    option.id = product.id;
    option.textContent = `${product.name} (Rating: ${product.averagerating})`;

    productNameSelect.appendChild(option);
});
