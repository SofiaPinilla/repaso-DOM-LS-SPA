//* DOM
//Crear un formulario para crear productos
//campos: name,description,image y price
//traer campos al archivo js
//Cuando se envie el formulario mostrar por consola los valores enviados

//* Local Storage
//Guardar el producto creado en el local Storage
//ir guardando los productos que creamos en un array y después en el local Storage

//* SPA
//CREAR SPA con un nav
//Crea vista Products que muestre los productos del local storage
//Tener el formulario en una vista Crear Producto

const name = document.getElementById("name");
const description = document.getElementById("description");
const image = document.getElementById("image");
const price = document.getElementById("price");
const btn = document.getElementById("btn");
const alert = document.querySelector(".alert");
const form = document.querySelector("#form");
const addProductNav = document.getElementById("addProductNav")
const productsContainer = document.querySelector(".productsContainer")
const productsNav = document.getElementById("productsNav")

// function sendData() {
// }
const products = JSON.parse(localStorage.getItem("Products")) || [];
const sendData = (e) => {
  e.preventDefault();
  const dataName = name.value;
  const dataDescription = description.value;
  const dataImage = image.value;
  const dataPrice = price.value;

  const obj = {
    dataName,
    dataDescription,
    dataImage,
    dataPrice,
  };

  //   const obj = {
  //     dataName: name.value,
  //     dataDescription: description.value,
  //     dataImage: image.value,
  //     dataPrice: price.value,
  //   };
  if (
    dataName === "" ||
    dataDescription === "" ||
    dataImage === "" ||
    dataPrice === ""
  ) {
    alert.classList.remove("alert");
    alert.innerHTML = `rellena todos los campos `;
    setTimeout(() => {
      alert.classList.add("alert");
    }, 5000);
  } else {
    // borrarFormulario();
    products.push(obj);
    localStorage.setItem("Products", JSON.stringify(products));
  }
};

const borrarFormulario = () => {
  form.classList.add("alert");
};

const goForm = ()=>{
    productsContainer.classList.replace("productsContainer","hide")
    form.classList.remove("hide")
}

const goProducts = ()=>{
    productsContainer.classList.replace("hide","productsContainer")
    form.classList.add("hide")
    paintProducts()
}

const paintProducts = ()=>{
    const products = JSON.parse(localStorage.getItem("Products"))
    productsContainer.innerHTML =""
    products.forEach(product => {
        productsContainer.innerHTML += `
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Precio: ${product.dataPrice} €</div>
  <div class="card-body">
    <h4 class="card-title">${product.dataName}</h4>
    <img src=${product.dataImage} >
    <p class="card-text">${product.dataDescription}</p>
  </div>
</div>
        `
    });
}

paintProducts()
btn.addEventListener("click", sendData);
addProductNav.addEventListener("click",goForm)
productsNav.addEventListener("click",goProducts)
