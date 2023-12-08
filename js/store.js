const form = document.getElementById("product-form");
const button = document.getElementById("button");
const productList = document.getElementById("product-list");
const products = [];

button.addEventListener("click", function (event) {
  event.preventDefault();

  const productName = document.getElementById("product-name").value;
  const brand = document.getElementById("brand").value;
  const flavor = document.getElementById("flavor").value;
  const quantity = document.getElementById("quantity").value;

  if (!productName || !brand || !flavor || !quantity) {
    displayErrorMessage("Por favor, complete todos los campos.");
    return;
  }

  const product = {
    productName,
    brand,
    flavor,
    quantity,
  };

  products.push(product);

  form.reset();

  displayProductList();

  clearErrorMessages();
});

function displayProductList() {
  productList.innerHTML = "";

  products.forEach(function (product, index) {
    const productCard = document.createElement("div");
    productCard.className = "card mb-2";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = product.productName + " - " + product.brand;

    const details = document.createElement("p");
    details.className = "card-text";
    details.textContent =
      "Sabor: " + product.flavor + ", Cantidad: " + product.quantity;

    const editButton = document.createElement("button");
    editButton.className = "btn btn-warning btn-sm me-2";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", function () {
      editProduct(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
      products.splice(index, 1);
      displayProductList();
    });

    cardBody.appendChild(title);
    cardBody.appendChild(details);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);

    productCard.appendChild(cardBody);

    productList.appendChild(productCard);
  });
}

function displayErrorMessage(message) {
  clearErrorMessages();

  const errorMessage = document.createElement("div");
  errorMessage.className = "alert alert-danger";
  errorMessage.textContent = message;

  form.insertBefore(errorMessage, form.firstChild);
}

function clearErrorMessages() {
  const errorMessage = form.querySelectorAll(".invalid-feedback");
  errorMessage.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });
}

function editProduct(index) {
  const product = products[index];

  document.getElementById("product-name").value = product.productName;
  document.getElementById("brand").value = product.brand;
  document.getElementById("flavor").value = product.flavor;
  document.getElementById("quantity").value = product.quantity;

  products.splice(index, 1);

  displayProductList();
}

function deleteProduct(index) {
  products.splice(index, 1);

  displayProductList();
}
