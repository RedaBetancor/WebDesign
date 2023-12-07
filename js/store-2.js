
function displayFieldMessage(fieldId, message) {
	var messageElement = document.getElementById(fieldId + "-message");
	messageElement.textContent = message;
}

function clearMessages() {
	var messages = document.querySelectorAll('.error-message');
	messages.forEach(function(message){
		message.textContent = '';
	})
}

function validateForm() {
	clearMessages();

	var brand = document.getElementById('brand').value;
	var productName = document.getElementById('product-name').value;
	var flavor = document.getElementById('flavor').value;
	var quantity = document.getElementById('quantity').value;

	if (!brand) {
		displayFieldMessage('brand', 'Por favor, completa el campo Marca');
		return false;
	}

	if (!productName) {
		displayFieldMessage('product-name', 'Por favor, completa el campo Nombre del producto');
		return false;
	}

	if (!flavor) {
		displayFieldMessage('flavor', 'Por favor, completa el campo Sabor');
		return false;
	}

	if (!quantity) {
		displayFieldMessage('quantity', 'Por favor, completa el campo Cantidad');
		return false;
	}

	return false;
}