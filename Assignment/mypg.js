const property = document.getElementById("propertyType1");
const city = document.getElementById("cityType1");
const search = document.getElementById("search");
search.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log(property.value)
    console.log(city.value)
    const res = await fetch(`http://127.0.0.1:9090/api/product/productsearch?type=${property.value}&city=${city.value}`)
    const data = await res.json();
    console.log(data)
})

