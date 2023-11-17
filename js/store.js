document.getElementById("button").addEventListener("click",  (e)=> {
    e.preventDefault();
  
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const taste = document.getElementById("taste").value;
    const brand = document.getElementById("brand").value;
  
    if (productName.trim() === '' || quantity.trim() === '' || taste.trim() === ''|| brand.trim() === '' ) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
  
    const productData = {
      name: productName,
      taste: taste,
      brand: brand,
      quantity: quantity
    };
  
    agregarProductoALista(productData);
    document.getElementById("productForm").reset();
});

function agregarProductoALista(producto) {
    const productListContainer = document.getElementById("productList");
  
    const productCard = document.createElement("div");
    productCard.className = "card m-2";
    productCard.style = "width: 18rem;";
  
    productCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text">Marca: ${producto.brand}</p>
        <p class="card-text">Sabor: ${producto.taste}</p>
        <p class="card-text">Cantidad: ${producto.quantity}</p>
      </div>
    `;
  
    productListContainer.appendChild(productCard);
}

document.getElementById("burguer").addEventListener("click", ()=>{
    var cross = document.getElementById("cross");
    cross.classList.remove("hidden");
    var burguer = document.getElementById("burguer");
    burguer.classList.add("hidden");
})

document.getElementById("cross").addEventListener("click", () => {
  var cross = document.getElementById("cross");
  cross.classList.add("hidden");
  var burguer = document.getElementById("burguer");
  burguer.classList.remove("hidden");
})