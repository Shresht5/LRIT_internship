const products = [
    { name: "Laptop", price: 75000 },
    { name: "Headphones", price: 2500 },
    { name: "Smartphone", price: 45000 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
const renderdata = document.getElementById('productsList');

function productRender(items) {
    renderdata.innerHTML = "";
    items.forEach((p) => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<h3>${p.name}</h3><p>$ ${p.price}</p>`;
        renderdata.appendChild(div);
    })
}
productRender(products);

document.getElementById("selector").addEventListener('change', (e) => {
    let sorts = [...products];
    switch (e.target.value) {
        case "a-z": sorts.sort((a, b) => a.name.localeCompare(b.name)); break;//sorts.split('').sort().join('')
        case "z-a": sorts.sort((a, b) => b.name.localeCompare(a.name)); break;
        case "price asc": sorts.sort((a, b) => a.price - b.price); break;
        case "price desc": sorts.sort((a, b) => b.price - a.price); break;
    }
    productRender(sorts)
});

