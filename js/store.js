document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();

  if (validateForm()) {
    const PRODUCTNAME = document.getElementById("product-name").value;
    const QUANTITY = document.getElementById("quantity").value;
    const FLAVOR = document.getElementById("flavor").value;
    const BRAND = document.getElementById("brand").value;

    const PRODUCTDATA = {
      name: PRODUCTNAME,
      flavor: FLAVOR,
      brand: BRAND,
      quantity: QUANTITY,
    };

    agregarProductoALista(PRODUCTDATA);
    document.getElementById("productForm").reset();
  }
});

function validateForm() {
  clearErrorMessages();

  const PRODUCTNAME = document.getElementById("product-name").value;
  const QUANTITY = document.getElementById("quantity").value;
  const FLAVOR = document.getElementById("flavor").value;
  const BRAND = document.getElementById("brand").value;

  let isValid = true;

  if (PRODUCTNAME.trim() === "") {
    displayErrorMessage("product-name", "Por favor, rellene el campo.")
    isValid = false;
  }

  if (QUANTITY.trim() === "") {
    displayErrorMessage("quantity", "Por favor, rellene el campo.")
    isValid = false;
  }

  if (FLAVOR.trim() === "") {
    displayErrorMessage("flavor", "Por favor, rellene el campo.")
    isValid = false;
  }

  if (BRAND.trim() === "") {
    displayErrorMessage("brand", "Por favor, rellene el campo.")
    isValid = false;
  }

  return isValid;
}

function displayErrorMessage(fieldId, message) {
  const ERRORMESSAGEELEMENT = document.getElementById(fieldId + "-error");
  ERRORMESSAGEELEMENT.textContent = message;
}

function clearErrorMessages() {
  const ERRORMESSAGES = document.querySelectorAll(".error-message");
  ERRORMESSAGES.forEach(function (ERRORMESSAGES) {
    ERRORMESSAGES.textContent = "";
  });
}

function agregarProductoALista(producto) {
  const PRODUCTLISTCONTAINER = document.getElementById("productList");

  const PRODUCTCARD = document.createElement("div");
  PRODUCTCARD.className = "card m-2";
  PRODUCTCARD.style = "width: 18rem;";

  PRODUCTCARD.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text">Marca: ${producto.brand}</p>
        <p class="card-text">Sabor: ${producto.taste}</p>
        <p class="card-text">Cantidad: ${producto.quantity}</p>
      </div>
    `;

  PRODUCTLISTCONTAINER.appendChild(PRODUCTCARD);
}